import { produce } from 'immer'
import * as t from 'io-ts'
import { cast } from 'technoidentity-utils'
import { http as httpAPI, MethodArgs, RequestConfig } from './http'

type APIMethodArgs = Omit<MethodArgs, 'resource'>
interface API<
  A extends Record<string, unknown>,
  I extends Record<string, unknown> | unknown = unknown
> {
  many(options?: APIMethodArgs): Promise<readonly A[]>
  one(options?: APIMethodArgs): Promise<A>
  create(data: I, options?: APIMethodArgs): Promise<A>
  get(id: string, options?: APIMethodArgs): Promise<A>
  update(id: string, data: I, options?: APIMethodArgs): Promise<A>
  del(id: string, options?: APIMethodArgs): Promise<void>
}

function appendId(options: MethodArgs, id: string): MethodArgs {
  return produce(options, draft => {
    if (draft.path === undefined) {
      draft.path = id
    } else if (t.UnknownArray.is(draft.path)) {
      draft.path.unshift(id)
    } else {
      draft.path = [id, draft.path]
    }
  })
}

interface RestArgs<
  A extends Record<string, unknown>,
  O extends Record<string, unknown>,
  I extends Record<string, unknown> | unknown = unknown
> extends RequestConfig {
  readonly resource: string
  readonly spec: t.Mixed & t.Type<A, O, I>
}

export function rest<
  A extends Record<string, unknown>,
  O extends Record<string, unknown>,
  I extends Record<string, unknown> | unknown = unknown
>(args: RestArgs<A, O, I>): API<A, I> {
  const { resource, spec, ...options } = args

  const http: ReturnType<typeof httpAPI> = httpAPI(options)

  async function many(options: APIMethodArgs): Promise<ReadonlyArray<A>> {
    return http.get({ ...options, resource }, t.readonlyArray(spec))
  }

  async function one(options: APIMethodArgs): Promise<A> {
    return http.get({ ...options, resource }, spec)
  }

  async function create(data: I, options: APIMethodArgs): Promise<A> {
    cast(spec, data)

    return http.post({ ...options, resource }, data, spec)
  }

  async function del(id: string, options?: APIMethodArgs): Promise<void> {
    return http.del(appendId({ ...options, resource }, id))
  }

  async function get(id: string, options: APIMethodArgs): Promise<A> {
    return one(appendId({ ...options, resource }, id))
  }

  async function update(
    id: string,
    data: I,
    options: APIMethodArgs,
  ): Promise<A> {
    cast(spec, data)

    return http.put(appendId({ ...options, resource }, id), data, spec)
  }

  return { one, many, get, update, create, del }
}
