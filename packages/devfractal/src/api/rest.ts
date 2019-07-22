import { produce } from 'immer'
import * as t from 'io-ts'
import { Array } from 'tcomb'
import { cast, opt } from 'technoidentity-utils'
import { http as httpAPI, MethodArgs, RequestConfig } from './http'

// tslint:disable typedef

// Currently will not support intersection etc...
// export function ManyQuery<C extends t.Props>(codec: t.ReadonlyC<t.TypeC<C>>) {
//   return opt({
//     page: t.number,
//     limit: t.number,
//     asc: t.keyof(codec.type.props), 
//     desc: t.keyof(codec.type.props),
//   })
// }



export function ManyQuery<C extends t.Props>(codec: t.ReadonlyC<t.TypeC<C>>) {
  return opt({
    _page: t.number,
    _limit: t.number,
    _sort: t.keyof(codec.type.props),
    _order: t.keyof({asc:true,desc:true}),
    
  })
}

type APIMethodArgs = Omit<MethodArgs, 'resource'>
interface API<
  A extends Record<string, any>,
  I extends Record<string, any> | unknown = unknown
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
    } else if (Array.is(draft.path)) {
      draft.path.unshift(id)
    } else {
      draft.path = [id, draft.path]
    }
  })
}

interface RestArgs<
  A extends Record<string, any>,
  O extends Record<string, any>,
  I extends Record<string, any> | unknown = unknown
> extends RequestConfig {
  readonly resource: string
  readonly type: t.Mixed & t.Type<A, O, I>
}

export function rest<
  A extends Record<string, any>,
  O extends Record<string, any>,
  I extends Record<string, any> | unknown = unknown
>(args: RestArgs<A, O, I>): API<A, I> {
  const { resource, type, ...options } = args

  const http: ReturnType<typeof httpAPI> = httpAPI(options)

  async function many(options: APIMethodArgs): Promise<ReadonlyArray<A>> {
    return http.get({ ...options, resource }, t.readonlyArray(type))
  }

  async function one(options: APIMethodArgs): Promise<A> {
    return http.get({ ...options, resource }, type)
  }

  async function create(data: I, options: APIMethodArgs): Promise<A> {
    cast(type, data)

    return http.post({ ...options, resource }, data, type)
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
    cast(type, data)

    return http.put(appendId({ ...options, resource }, id), data, type)
  }

  return { one, many, get, update, create, del }
}
