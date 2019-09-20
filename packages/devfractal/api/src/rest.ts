import { produce } from 'immer'
import {
  ObjC,
  omit,
  Props,
  readonlyArray,
  TypeOf,
  UnknownArray,
} from 'technoidentity-utils'
import { http as httpAPI, MethodArgs, RequestConfig } from './http'
import { APIQuery, toAPIQuery as toQueryFn } from './query'

type APIMethodArgs = Omit<MethodArgs, 'resource'>
export interface API<
  Opt extends Props,
  Req extends Props,
  ID extends keyof TypeOf<ObjC<Opt, Req>>
> {
  readonly http: ReturnType<typeof httpAPI>
  readonly spec: ObjC<Opt, Req>
  readonly idKey: ID
  readonly resource: string

  many(options?: APIMethodArgs): Promise<ReadonlyArray<TypeOf<ObjC<Opt, Req>>>>

  one(options?: APIMethodArgs): Promise<TypeOf<ObjC<Opt, Req>>>

  create(
    data: Omit<TypeOf<ObjC<Opt, Req>>, ID>,
    options?: APIMethodArgs,
  ): Promise<TypeOf<ObjC<Opt, Req>>>

  get(
    id: TypeOf<ObjC<Opt, Req>>[ID],
    options?: APIMethodArgs,
  ): Promise<TypeOf<ObjC<Opt, Req>>>

  list(
    query: APIQuery<TypeOf<ObjC<Opt, Req>>>,
    options?: Omit<APIMethodArgs, 'query'>,
  ): Promise<ReadonlyArray<TypeOf<ObjC<Opt, Req>>>>

  select<K extends keyof TypeOf<ObjC<Opt, Req>>>(
    query: Omit<APIQuery<TypeOf<ObjC<Opt, Req>>>, 'select'>,
    select?: readonly K[],
    options?: Omit<APIMethodArgs, 'query'>,
  ): Promise<ReadonlyArray<Pick<TypeOf<ObjC<Opt, Req>>, K>>>

  replace(
    id: TypeOf<ObjC<Opt, Req>>[ID],
    data: TypeOf<ObjC<Opt, Req>>,
    options?: APIMethodArgs,
  ): Promise<TypeOf<ObjC<Opt, Req>>>

  update(
    id: TypeOf<ObjC<Opt, Req>>[ID],
    data: Partial<TypeOf<ObjC<Opt, Req>>>,
    options?: APIMethodArgs,
  ): Promise<TypeOf<ObjC<Opt, Req>>>

  del(id: TypeOf<ObjC<Opt, Req>>[ID], options?: APIMethodArgs): Promise<void>
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

export function rest<
  Opt extends Props,
  Req extends Props,
  ID extends keyof TypeOf<ObjC<Opt, Req>>
>(
  spec: ObjC<Opt, Req>,
  idKey: ID,
  { resource, ...options }: RestArgs,
  toQuery: (
    spec: ObjC<Opt, Req>,
    query: APIQuery<TypeOf<ObjC<Opt, Req>>>,
  ) => string = toQueryFn,
): API<Opt, Req, ID> {
  const http: ReturnType<typeof httpAPI> = httpAPI(options)

  async function many(
    options: APIMethodArgs,
  ): Promise<ReadonlyArray<TypeOf<ObjC<Opt, Req>>>> {
    return http.get({ ...options, resource }, readonlyArray(spec))
  }

  async function one(options: APIMethodArgs): Promise<TypeOf<ObjC<Opt, Req>>> {
    return http.get({ ...options, resource }, spec)
  }

  async function create(
    data: Omit<TypeOf<ObjC<Opt, Req>>, ID>,
    options: APIMethodArgs,
  ): Promise<TypeOf<ObjC<Opt, Req>>> {
    // @TODO: Hopefully in future, either we won't omit, or use spec to omit.
    return http.post({ ...options, resource }, omit(data, [idKey as any]), spec)
  }

  async function del(
    id: TypeOf<ObjC<Opt, Req>>[ID],
    options?: APIMethodArgs,
  ): Promise<void> {
    return http.del(appendId({ ...options, resource }, id))
  }

  async function get(
    id: TypeOf<ObjC<Opt, Req>>[ID],
    options: APIMethodArgs,
  ): Promise<TypeOf<ObjC<Opt, Req>>> {
    return one(appendId({ ...options, resource }, id))
  }

  async function list(
    query: APIQuery<TypeOf<ObjC<Opt, Req>>>,
    options?: Omit<APIMethodArgs, 'query'>,
  ): Promise<ReadonlyArray<TypeOf<ObjC<Opt, Req>>>> {
    return many({ query: toQuery(spec, query), ...options })
  }

  async function pluck<K extends keyof TypeOf<ObjC<Opt, Req>>>(
    query: Omit<APIQuery<TypeOf<ObjC<Opt, Req>>>, 'select'>,
    select?: readonly K[],
    options?: Omit<APIMethodArgs, 'query'>,
  ): Promise<ReadonlyArray<Pick<TypeOf<ObjC<Opt, Req>>, K>>> {
    return many({ query: toQuery(spec, { ...query, select }), ...options })
  }

  async function replace(
    id: TypeOf<ObjC<Opt, Req>>[ID],
    data: TypeOf<ObjC<Opt, Req>>,
    options: APIMethodArgs,
  ): Promise<TypeOf<ObjC<Opt, Req>>> {
    return http.put(appendId({ ...options, resource }, id), data, spec)
  }

  async function update(
    id: TypeOf<ObjC<Opt, Req>>[ID],
    data: Partial<TypeOf<ObjC<Opt, Req>>>,
    options: APIMethodArgs,
  ): Promise<TypeOf<ObjC<Opt, Req>>> {
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
    select: pluck,
  }
}
