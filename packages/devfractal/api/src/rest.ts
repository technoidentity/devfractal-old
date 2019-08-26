import { produce } from 'immer'
import * as t from 'io-ts'
import { HasProps, omit } from 'technoidentity-utils'
import { http as httpAPI, MethodArgs, RequestConfig } from './http'
import { APIQuery, toAPIQuery as toQueryFn } from './query'

type APIMethodArgs = Omit<MethodArgs, 'resource'>
export interface API<Spec extends t.Mixed, ID extends keyof t.TypeOf<Spec>> {
  readonly spec: Spec
  readonly idKey: ID
  readonly resource: string

  many(options?: APIMethodArgs): Promise<ReadonlyArray<t.TypeOf<Spec>>>

  one(options?: APIMethodArgs): Promise<t.TypeOf<Spec>>

  create(
    data: Omit<t.TypeOf<Spec>, ID>,
    options?: APIMethodArgs,
  ): Promise<t.TypeOf<Spec>>

  get(id: t.TypeOf<Spec>[ID], options?: APIMethodArgs): Promise<t.TypeOf<Spec>>
  list(
    query: APIQuery<t.TypeOf<Spec>>,
    options?: Omit<APIMethodArgs, 'query'>,
  ): Promise<ReadonlyArray<t.TypeOf<Spec>>>

  replace(
    id: t.TypeOf<Spec>[ID],
    data: t.TypeOf<Spec>,
    options?: APIMethodArgs,
  ): Promise<t.TypeOf<Spec>>

  update(
    id: t.TypeOf<Spec>[ID],
    data: Partial<t.TypeOf<Spec>>,
    options?: APIMethodArgs,
  ): Promise<t.TypeOf<Spec>>

  del(id: t.TypeOf<Spec>[ID], options?: APIMethodArgs): Promise<void>
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

interface RestArgs extends RequestConfig {
  readonly resource: string
}

export function rest<
  Spec extends t.Mixed & HasProps,
  ID extends keyof t.TypeOf<Spec>
>(
  spec: Spec,
  id: ID /* = 'id' as any */,
  { resource, ...options }: RestArgs,
  toQuery: (spec: Spec, query: APIQuery<t.TypeOf<Spec>>) => string = toQueryFn,
): API<Spec, ID> {
  const http: ReturnType<typeof httpAPI> = httpAPI(options)

  async function many(
    options: APIMethodArgs,
  ): Promise<ReadonlyArray<t.TypeOf<Spec>>> {
    return http.get({ ...options, resource }, t.readonlyArray(spec))
  }

  async function one(options: APIMethodArgs): Promise<t.TypeOf<Spec>> {
    return http.get({ ...options, resource }, spec)
  }

  async function create(
    data: Omit<t.TypeOf<Spec>, ID>,
    options: APIMethodArgs,
  ): Promise<t.TypeOf<Spec>> {
    return http.post(
      { ...options, resource },
      omit<t.TypeOf<Spec>, ID>(data, [id]),
      spec,
    )
  }

  async function remove(
    id: t.TypeOf<Spec>[ID],
    options?: APIMethodArgs,
  ): Promise<void> {
    return http.del(appendId({ ...options, resource }, id))
  }

  async function get(
    id: t.TypeOf<Spec>[ID],
    options: APIMethodArgs,
  ): Promise<t.TypeOf<Spec>> {
    return one(appendId({ ...options, resource }, id))
  }

  async function list(
    query: APIQuery<t.TypeOf<Spec>>,
    options?: Omit<APIMethodArgs, 'query'>,
  ): Promise<ReadonlyArray<t.TypeOf<Spec>>> {
    return many({ query: toQuery(spec, query), ...options })
  }

  async function replace(
    id: t.TypeOf<Spec>[ID],
    data: t.TypeOf<Spec>,
    options: APIMethodArgs,
  ): Promise<t.TypeOf<Spec>> {
    return http.put(appendId({ ...options, resource }, id), data, spec)
  }

  async function update(
    id: t.TypeOf<Spec>[ID],
    data: Partial<t.TypeOf<Spec>>,
    options: APIMethodArgs,
  ): Promise<t.TypeOf<Spec>> {
    return http.patch(appendId({ ...options, resource }, id), data, spec)
  }

  return {
    one,
    many,
    replace,
    update,
    create,
    del: remove,
    get,
    list,
    idKey: id,
    spec,
    resource,
  }
}
