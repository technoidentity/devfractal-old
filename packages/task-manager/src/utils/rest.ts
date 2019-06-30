import { produce } from 'immer'
import { Mixed, readonlyArray, Type } from 'io-ts'
import { Array } from 'tcomb'
import { typeInvariant } from 'technoidentity-devfractal'
import { http as httpAPI, MethodArgs, RequestConfig } from './http'

interface API<
  A extends Record<string, any>,
  I extends Record<string, any> | unknown = unknown
> {
  many(options?: Omit<MethodArgs, 'resource'>): Promise<readonly A[]>
  one(options?: Omit<MethodArgs, 'resource'>): Promise<A>
  create(data: I, options?: Omit<MethodArgs, 'resource'>): Promise<A>
  get(id: string, options?: Omit<MethodArgs, 'resource'>): Promise<A>
  update(
    id: string,
    data: I,
    options?: Omit<MethodArgs, 'resource'>,
  ): Promise<A>
  del(id: string, options?: Omit<MethodArgs, 'resource'>): Promise<void>
}

function appendId(options: MethodArgs, id: string): MethodArgs {
  return produce(options, draft => {
    if (draft.path === undefined) {
      draft.path = id
    } else if (Array.is(draft.path)) {
      draft.path.unshift(id)
    } else {
      draft.path = [draft.path, id]
    }
  })
}

interface RestArgs<
  A extends Record<string, any>,
  O extends Record<string, any>,
  I extends Record<string, any> | unknown = unknown
> extends RequestConfig {
  readonly resource: string
  readonly type: Mixed & Type<A, O, I>
}

export function rest<
  A extends Record<string, any>,
  O extends Record<string, any>,
  I extends Record<string, any> | unknown = unknown
>(args: RestArgs<A, O, I>): API<A, I> {
  const { resource, type, ...options } = args

  const http: ReturnType<typeof httpAPI> = httpAPI(options)

  async function many(
    options: Omit<MethodArgs, 'resource'>,
  ): Promise<ReadonlyArray<A>> {
    return http.get({ ...options, resource }, readonlyArray(type))
  }

  async function one(options: Omit<MethodArgs, 'resource'>): Promise<A> {
    return http.get({ ...options, resource }, type)
  }

  async function create(
    data: I,
    options: Omit<MethodArgs, 'resource'>,
  ): Promise<A> {
    typeInvariant(type, data)

    return http.post({ ...options, resource }, data, type)
  }

  async function del(
    id: string,
    options?: Omit<MethodArgs, 'resource'>,
  ): Promise<void> {
    return http.del(appendId({ ...options, resource }, id))
  }

  async function get(
    id: string,
    options: Omit<MethodArgs, 'resource'>,
  ): Promise<A> {
    return one(appendId({ ...options, resource }, id))
  }

  async function update(
    id: string,
    data: I,
    options: Omit<MethodArgs, 'resource'>,
  ): Promise<A> {
    typeInvariant(type, data)

    return http.put(appendId({ ...options, resource }, id), data, type)
  }

  return { one, many, get, update, create, del }
}
