import { typeInvariant } from '@technoidentity/utils'
import { produce } from 'immer'
import { Mixed, readonlyArray, Type } from 'io-ts'
import { Array } from 'tcomb'
import { http as httpAPI, MethodArgs, RequestConfig } from './http'

interface API<I extends Record<string, any>, A extends Record<string, any>> {
  many(options?: Omit<MethodArgs, 'resource'>): Promise<readonly A[]>
  one(options: Omit<MethodArgs, 'resource'>): Promise<A>
  create(data: I, options: Omit<MethodArgs, 'resource'>): Promise<A>
  get(id: string, options: Omit<MethodArgs, 'resource'>): Promise<A>
  update(id: string, data: I, options: Omit<MethodArgs, 'resource'>): Promise<A>
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

// tslint:disable-next-line: typedef
export function rest<
  I extends Record<string, any>,
  A extends Record<string, any>
>(
  options: RequestConfig,
  type: Mixed & Type<A, A, I>,
  resource: string,
): API<I, A> {
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

  return { one, many, get, update, create }
}
