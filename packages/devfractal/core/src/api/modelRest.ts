import { AxiosInstance, AxiosResponse } from 'axios'
import { produce } from 'immer'
import {
  Int,
  isRight,
  ModelID,
  ObjC,
  ObjInputOf,
  objPick,
  ObjTypeOf,
  omit,
  pickID,
  Props,
  readonlyArray,
  TypeOf,
  TypeOfPick,
  UnknownArray,
} from 'technoidentity-utils'
import { http as httpAPI, MethodArgs, RequestConfig } from './http'
import { APIQuery, toAPIQuery as toQueryFn } from './query'

type MID<R extends Props & ModelID> = TypeOf<R['id']>

type Response<O extends Props, R extends Props & ModelID> = AxiosResponse<
  ObjInputOf<O, R>
>

interface Response$<O extends Props, R extends Props & ModelID, Data> {
  readonly data: Promise<Data>
  readonly response: Promise<Response<O, R>>
}

type One<O extends Props, R extends Props & ModelID> = ObjTypeOf<O, R>
type One$<O extends Props, R extends Props & ModelID> = Response$<
  O,
  R,
  One<O, R>
>
type List<O extends Props, R extends Props & ModelID> = ReadonlyArray<One<O, R>>
type List$<O extends Props, R extends Props & ModelID> = Response$<
  O,
  R,
  List<O, R>
>

type Create<O extends Props, R extends Props & ModelID> = Omit<
  One<O, R>,
  keyof TypeOf<R['id']>
>

type Select<
  O extends Props,
  R extends Props & ModelID,
  K extends keyof One<O, R>
> = ReadonlyArray<TypeOfPick<O, R, K>>

type Select$<
  O extends Props,
  R extends Props & ModelID,
  K extends keyof One<O, R>
> = Response$<O, R, Select<O, R, K>>

type Query<O extends Props, R extends Props & ModelID> = APIQuery<One<O, R>>
type APIArgs = Omit<MethodArgs, 'resource'>

export interface ModelAPI<Opt extends Props, Req extends Props & ModelID> {
  readonly http: ReturnType<typeof httpAPI>
  readonly spec: ObjC<Opt, Req>
  readonly resource: string

  many(options?: APIArgs): Promise<List<Opt, Req>>
  one(options?: APIArgs): Promise<One<Opt, Req>>
  create(data: Create<Opt, Req>, options?: APIArgs): Promise<One<Opt, Req>>
  get(id: MID<Req>, options?: APIArgs): Promise<One<Opt, Req>>

  list(
    query: Query<Opt, Req>,
    options?: Omit<APIArgs, 'query'>,
  ): Promise<List<Opt, Req>>

  listWithCount(
    query: Query<Opt, Req>,
    options?: Omit<APIArgs, 'query'>,
  ): Promise<{
    readonly list: ReadonlyArray<One<Opt, Req>>
    readonly totalCount?: number
  }>

  select<K extends keyof One<Opt, Req>>(
    query: Omit<Query<Opt, Req>, 'select'>,
    select: readonly K[],
    options?: Omit<APIArgs, 'query'>,
  ): Promise<Select<Opt, Req, K>>

  replace(
    id: MID<Req>,
    data: One<Opt, Req>,
    options?: APIArgs,
  ): Promise<One<Opt, Req>>

  update(
    id: MID<Req>,
    data: Partial<One<Opt, Req>>,
    options?: APIArgs,
  ): Promise<One<Opt, Req>>

  del(id: MID<Req>, options?: APIArgs): Promise<void>

  many$(options?: APIArgs): List$<Opt, Req>

  one$(options?: APIArgs): One$<Opt, Req>

  create$(data: Create<Opt, Req>, options?: APIArgs): One$<Opt, Req>

  get$(id: MID<Req>, options?: APIArgs): One$<Opt, Req>

  list$(
    query: Query<Opt, Req>,
    options?: Omit<APIArgs, 'query'>,
  ): List$<Opt, Req>

  select$<K extends keyof One<Opt, Req>>(
    query: Omit<Query<Opt, Req>, 'select'>,
    select: readonly K[],
    options?: Omit<APIArgs, 'query'>,
  ): Select$<Opt, Req, K>

  replace$(id: MID<Req>, data: One<Opt, Req>, options?: APIArgs): One$<Opt, Req>

  update$(
    id: MID<Req>,
    data: Partial<One<Opt, Req>>,
    options?: APIArgs,
  ): One$<Opt, Req>

  del$(id: MID<Req>, options?: APIArgs): Promise<Response<Opt, Req>>
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

export function modelAPI<Opt extends Props, Req extends Props & ModelID>(
  spec: ObjC<Opt, Req>,
  idPath: (id: MID<Req>) => string,
  resource: string,
  options: RequestConfig | AxiosInstance,
  toQuery: (spec: ObjC<Opt, Req>, query: Query<Opt, Req>) => string = toQueryFn,
): ModelAPI<Opt, Req> {
  const http: ReturnType<typeof httpAPI> = httpAPI(options)

  function many$(options: APIArgs): List$<Opt, Req> {
    return http.get$({ ...options, resource }, readonlyArray(spec))
  }

  async function many(options: APIArgs): Promise<List<Opt, Req>> {
    return many$(options).data
  }

  function one$(options: APIArgs): One$<Opt, Req> {
    return http.get$({ ...options, resource }, spec)
  }

  async function one(options: APIArgs): Promise<One<Opt, Req>> {
    return one$(options).data
  }

  function create$(
    data: Omit<One<Opt, Req>, keyof MID<Req>>,
    options: APIArgs,
  ): One$<Opt, Req> {
    return http.post$(
      { ...options, resource },
      omit(data, Object.keys(pickID(spec)) as any),
      spec,
    )
  }

  async function create(
    data: Omit<One<Opt, Req>, keyof MID<Req>>,
    options: APIArgs,
  ): Promise<One<Opt, Req>> {
    return create$(data, options).data
  }

  async function del$(
    id: MID<Req>,
    options?: APIArgs,
  ): Promise<AxiosResponse<void>> {
    return http.del$(appendId({ ...options, resource }, idPath(id)))
  }

  async function del(id: MID<Req>, options?: APIArgs): Promise<void> {
    await del$(id, options)
  }

  function get$(id: MID<Req>, options: APIArgs): One$<Opt, Req> {
    return one$(appendId({ ...options, resource }, idPath(id)))
  }

  async function get(id: MID<Req>, options: APIArgs): Promise<One<Opt, Req>> {
    return get$(id, options).data
  }

  function list$(
    query: Query<Opt, Req>,
    options?: Omit<APIArgs, 'query'>,
  ): List$<Opt, Req> {
    return many$({ query: toQuery(spec, query), ...options })
  }

  async function list(
    query: Query<Opt, Req>,
    options?: Omit<APIArgs, 'query'>,
  ): Promise<List<Opt, Req>> {
    return list$(query, options).data
  }

  async function listWithCount(
    query: Query<Opt, Req>,
    options?: Omit<APIArgs, 'query'>,
  ): Promise<{
    list: ReadonlyArray<One<Opt, Req>>
    totalCount?: number
  }> {
    // tslint:disable typedef
    const result = list$(query, options)
    const decoded = Int.decode((await result.response).headers['x-total-count'])
    // tslint:enable typedef

    return {
      list: await result.data,
      totalCount: isRight(decoded) ? decoded.right : undefined,
    }
  }

  function select$<K extends keyof One<Opt, Req>>(
    query: Omit<Query<Opt, Req>, 'select'>,
    select: readonly K[],
    options?: Omit<APIArgs, 'query'>,
  ): Select$<Opt, Req, K> {
    return http.get$(
      { query: toQuery(spec, { ...query, select }), ...options, resource },
      readonlyArray(objPick(spec, select)),
    )
  }

  async function select<K extends keyof One<Opt, Req>>(
    query: Omit<Query<Opt, Req>, 'select'>,
    select: readonly K[],
    options?: Omit<APIArgs, 'query'>,
    // @TODO: LOL at type
  ): Promise<Select<Opt, Req, K>> {
    return select$(query, select, options).data
  }

  function replace$(
    id: MID<Req>,
    data: One<Opt, Req>,
    options: APIArgs,
  ): One$<Opt, Req> {
    return http.put$(appendId({ ...options, resource }, idPath(id)), data, spec)
  }

  async function replace(
    id: MID<Req>,
    data: One<Opt, Req>,
    options: APIArgs,
  ): Promise<One<Opt, Req>> {
    return replace$(id, data, options).data
  }

  function update$(
    id: MID<Req>,
    data: Partial<One<Opt, Req>>,
    options: APIArgs,
  ): One$<Opt, Req> {
    return http.patch$(
      appendId({ ...options, resource }, idPath(id)),
      data,
      spec,
    )
  }

  async function update(
    id: MID<Req>,
    data: Partial<One<Opt, Req>>,
    options: APIArgs,
  ): Promise<One<Opt, Req>> {
    return update$(id, data, options).data
  }

  return {
    one,
    one$,

    many,
    many$,

    replace,
    replace$,

    update,
    update$,

    create,
    create$,

    del,
    del$,

    get,
    get$,

    list,
    listWithCount,
    list$,

    select,
    select$,

    spec,
    resource,
    http,
  }
}
