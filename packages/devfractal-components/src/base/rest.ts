import { produce } from 'immer'
import { Mixed, readonlyArray, Type } from 'io-ts'
import { Array } from 'tcomb'
import { typeInvariant } from '../utils'
import { http as httpAPI, MethodArgs, RequestConfig } from './http'

interface API<I extends Record<string, any>, A extends Record<string, any>> {
  many(options?: MethodArgs): Promise<readonly A[]>
  one(options: MethodArgs): Promise<A>
  create(data: I, options: MethodArgs): Promise<A>
  get(id: string, options: MethodArgs): Promise<A>
  update(id: string, data: I, options: MethodArgs): Promise<A>
}

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
export function rest<
  I extends Record<string, any>,
  A extends Record<string, any>
>(options: RequestConfig, type: Mixed & Type<A, A, I>): API<I, A> {
  const http: ReturnType<typeof httpAPI> = httpAPI(options)

  async function many(options: MethodArgs): Promise<ReadonlyArray<A>> {
    return http.get(options, readonlyArray(type))
  }

  async function one(options: MethodArgs): Promise<A> {
    return http.get(options, type)
  }

  async function create(data: I, options: MethodArgs): Promise<A> {
    typeInvariant(type, data)
    return http.post(options, data, type)
  }

  async function get(id: string, options: MethodArgs): Promise<A> {
    return one(appendId(options, id))
  }

  async function update(id: string, data: I, options: MethodArgs): Promise<A> {
    typeInvariant(type, data)

    return http.put(appendId(options, id), data, type)
  }

  return { one, many, get, update, create }
}
