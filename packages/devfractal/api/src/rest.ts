import { produce } from 'immer'
import {
  AnyObj,
  omit,
  readonlyArray,
  TypeOf,
  UnknownArray,
} from 'technoidentity-utils'
import { http as httpAPI, MethodArgs, RequestConfig } from './http'
import { APIQuery, toAPIQuery as toQueryFn } from './query'

type APIMethodArgs = Omit<MethodArgs, 'resource'>
export interface API<Spec extends AnyObj, ID extends keyof TypeOf<Spec>> {
  readonly http: ReturnType<typeof httpAPI>
  readonly spec: Spec
  readonly idKey: ID
  readonly resource: string

  many(options?: APIMethodArgs): Promise<ReadonlyArray<TypeOf<Spec>>>

  one(options?: APIMethodArgs): Promise<TypeOf<Spec>>

  create(
    data: Omit<TypeOf<Spec>, ID>,
    options?: APIMethodArgs,
  ): Promise<TypeOf<Spec>>

  get(id: TypeOf<Spec>[ID], options?: APIMethodArgs): Promise<TypeOf<Spec>>

  list(
    query: APIQuery<TypeOf<Spec>>,
    options?: Omit<APIMethodArgs, 'query'>,
  ): Promise<ReadonlyArray<TypeOf<Spec>>>

  replace(
    id: TypeOf<Spec>[ID],
    data: TypeOf<Spec>,
    options?: APIMethodArgs,
  ): Promise<TypeOf<Spec>>

  update(
    id: TypeOf<Spec>[ID],
    data: Partial<TypeOf<Spec>>,
    options?: APIMethodArgs,
  ): Promise<TypeOf<Spec>>

  del(id: TypeOf<Spec>[ID], options?: APIMethodArgs): Promise<void>
}

function appendId(options: MethodArgs, id: string): MethodArgs {
  return produce(options, draft => {
    if (draft.path === undefined) {
      draft.path = id
    } else if (UnknownArray.is(draft.path)) {
      draft.path.unshift(id)
    } else {
      draft.path = [id, draft.path]
    }
  })
}

interface RestArgs extends RequestConfig {
  readonly resource: string
}

export function rest<Spec extends AnyObj, ID extends keyof TypeOf<Spec>>(
  spec: Spec,
  idKey: ID /* = 'id' as any */,
  { resource, ...options }: RestArgs,
  toQuery: (spec: Spec, query: APIQuery<TypeOf<Spec>>) => string = toQueryFn,
): API<Spec, ID> {
  const http: ReturnType<typeof httpAPI> = httpAPI(options)

  async function many(
    options: APIMethodArgs,
  ): Promise<ReadonlyArray<TypeOf<Spec>>> {
    return http.get({ ...options, resource }, readonlyArray(spec))
  }

  async function one(options: APIMethodArgs): Promise<TypeOf<Spec>> {
    return http.get({ ...options, resource }, spec)
  }

  async function create(
    data: Omit<TypeOf<Spec>, ID>,
    options: APIMethodArgs,
  ): Promise<TypeOf<Spec>> {
    return http.post(
      { ...options, resource },
      omit<TypeOf<Spec>, ID>(data, [idKey]),
      spec,
    )
  }

  async function del(
    id: TypeOf<Spec>[ID],
    options?: APIMethodArgs,
  ): Promise<void> {
    return http.del(appendId({ ...options, resource }, id))
  }

  async function get(
    id: TypeOf<Spec>[ID],
    options: APIMethodArgs,
  ): Promise<TypeOf<Spec>> {
    return one(appendId({ ...options, resource }, id))
  }

  async function list(
    query: APIQuery<TypeOf<Spec>>,
    options?: Omit<APIMethodArgs, 'query'>,
  ): Promise<ReadonlyArray<TypeOf<Spec>>> {
    return many({ query: toQuery(spec, query), ...options })
  }

  async function replace(
    id: TypeOf<Spec>[ID],
    data: TypeOf<Spec>,
    options: APIMethodArgs,
  ): Promise<TypeOf<Spec>> {
    return http.put(appendId({ ...options, resource }, id), data, spec)
  }

  async function update(
    id: TypeOf<Spec>[ID],
    data: Partial<TypeOf<Spec>>,
    options: APIMethodArgs,
  ): Promise<TypeOf<Spec>> {
    return http.patch(appendId({ ...options, resource }, id), data, spec)
  }

  return {
    one,
    many,
    replace,
    update,
    create,
    del,
    get,
    list,
    idKey,
    spec,
    resource,
    http,
  }
}
