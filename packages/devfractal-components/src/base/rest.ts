import { Either } from 'fp-ts/lib/Either'
import { Decoder, Errors, Mixed, readonlyArray } from 'io-ts'
import { reporter } from 'io-ts-reporters'
import { http as httpAPI, MethodArgs, RequestConfig } from './http'
import { produce } from 'immer'
interface API<A extends Record<string, any>> {
  many(options?: MethodArgs): Promise<readonly A[]>
  create(data: Partial<A>): Promise<A>
  get(id: string): Promise<A>
  one(options?: MethodArgs): Promise<A>
  update(id: string, data: Partial<A>): Promise<A>
}

const appendId = (options: MethodArgs, id: string) =>
  produce(options, draft => {
    if (draft.path === undefined) {
      draft.path = id
    } else if (Array.is(draft.path)) {
      draft.path.push(id)
    } else {
      draft.path = [draft.path, id]
    }
  })

export function rest<I, A>(
  options: RequestConfig,
  type: Mixed & Decoder<I, A>,
): API<A> {
  const http: ReturnType<typeof httpAPI> = httpAPI(options)

  async function many(options: MethodArgs): Promise<ReadonlyArray<A>> {
    return http.get(options, readonlyArray(type))
  }

  async function one(options: MethodArgs, id: string): Promise<A> {
    return http.get(appendId(options, id), type)
  }

  async function create(options: MethodArgs, data: A): Promise<A> {
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
