import { Either } from 'fp-ts/lib/Either'
import { Decoder, Errors, Mixed, readonlyArray } from 'io-ts'
import { reporter } from 'io-ts-reporters'
import { http as httpAPI, MethodArgs, RequestConfig } from './http'

interface API<A extends Record<string, any>> {
  many(options?: MethodArgs): Promise<readonly A[]>
  create(data: Partial<A>): Promise<A>
  get(id: string): Promise<A>
  one(options?: MethodArgs): Promise<A>
  update(id: string, data: Partial<A>): Promise<A>
}

export function rest<I, A>(
  options: RequestConfig,
  type: Mixed & Decoder<I, A>,
): API<A> {
  const http: ReturnType<typeof httpAPI> = httpAPI(options)

  async function many(options: MethodArgs): Promise<ReadonlyArray<A>> {
    return http.get(options, readonlyArray(type))
  }

  async function one(options: MethodArgs): Promise<A> {
    return http.get(options, type)
  }

  async function create(data: A): Promise<A> {
    const decoded: Either<Errors, A> = type.decode(data)
    if (decoded.isLeft()) {
      throw new Error(reporter(decoded).join('\n'))
    }

    return http.post(data, type)
  }

  async function get(id: string): Promise<A> {
    return one({ path: id })
  }

  async function update(id: string, data: I): Promise<A> {
    const decoded: Either<Errors, A> = type.decode(data)
    if (decoded.isLeft()) {
      throw new Error(reporter(decoded).join('\n'))
    }

    return http.put({ path: id }, data, type)
  }

  return { one, many, get, update, create }
}
