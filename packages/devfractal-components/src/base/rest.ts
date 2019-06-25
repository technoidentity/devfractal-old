import { Either } from 'fp-ts/lib/Either'
import { produce } from 'immer'
import { Decoder, Errors, Mixed, readonlyArray } from 'io-ts'
import { reporter } from 'io-ts-reporters'
import { Array } from 'tcomb'
import { http as httpAPI, MethodArgs, RequestConfig } from './http'
// interface API<A extends Record<string, any>> {
//   many(options?: MethodArgs): Promise<readonly A[]>
//   create(data: A): Promise<A>
//   get(id: string): Promise<A>
//   one(options: MethodArgs): Promise<A>
//   update(id: string, data: Partial<A>): Promise<A>
// }

function appendId(options: MethodArgs, id: string): MethodArgs {
  return produce(options, draft => {
    if (draft.path === undefined) {
      draft.path = id
    } else if (Array.is(draft.path)) {
      draft.path.push(id)
    } else {
      draft.path = [draft.path, id]
    }
  })
}

// tslint:disable-next-line: typedef
export function rest<I, A>(
  options: RequestConfig,
  type: Mixed & Decoder<I, A>,
) {
  const http: ReturnType<typeof httpAPI> = httpAPI(options)

  async function many(options: MethodArgs): Promise<ReadonlyArray<A>> {
    return http.get(options, readonlyArray(type))
  }

  async function one(options: MethodArgs): Promise<A> {
    return http.get(options, type)
  }

  async function create(options: MethodArgs, data: I): Promise<A> {
    const decoded: Either<Errors, A> = type.decode(data)
    if (decoded.isLeft()) {
      throw new Error(reporter(decoded).join('\n'))
    }

    return http.post(options, data, type)
  }

  async function get(options: MethodArgs, id: string): Promise<A> {
    return one(appendId(options, id))
  }

  async function update(options: MethodArgs, id: string, data: I): Promise<A> {
    const decoded: Either<Errors, A> = type.decode(data)
    if (decoded.isLeft()) {
      throw new Error(reporter(decoded).join('\n'))
    }

    return http.put(appendId(options, id), data, type)
  }

  return { one, many, get, update, create }
}
