import { AxiosInstance, AxiosResponse } from 'axios'
import { produce } from 'immer'
import {
  Int,
  isRight,
  ObjC,
  ObjInputOf,
  objPick,
  ObjTypeOf,
  omit,
  pickID,
  Props,
  readonlyArray,
  TypeOf,
  TypeOfID,
  UnknownArray,
} from 'technoidentity-utils'
import { http as httpAPI, MethodArgs, RequestConfig } from './http'
import { APIQuery, toAPIQuery as toQueryFn } from './query'

type APIMethodArgs = Omit<MethodArgs, 'resource'>
export interface API<Opt extends Props, Req extends Props> {
  readonly http: ReturnType<typeof httpAPI>
  readonly spec: ObjC<Opt, Req>
  readonly resource: string

  many(options?: APIMethodArgs): Promise<ReadonlyArray<TypeOf<ObjC<Opt, Req>>>>

  one(options?: APIMethodArgs): Promise<TypeOf<ObjC<Opt, Req>>>

  create(
    data: Omit<TypeOf<ObjC<Opt, Req>>, keyof TypeOfID<Opt, Req>>,
    options?: APIMethodArgs,
  ): Promise<TypeOf<ObjC<Opt, Req>>>

  get(
    id: TypeOfID<Opt, Req>,
    options?: APIMethodArgs,
  ): Promise<TypeOf<ObjC<Opt, Req>>>

  list(
    query: APIQuery<TypeOf<ObjC<Opt, Req>>>,
    options?: Omit<APIMethodArgs, 'query'>,
  ): Promise<ReadonlyArray<TypeOf<ObjC<Opt, Req>>>>

  listWithCount(
    query: APIQuery<TypeOf<ObjC<Opt, Req>>>,
    options?: Omit<APIMethodArgs, 'query'>,
  ): Promise<{
    readonly list: ReadonlyArray<TypeOf<ObjC<Opt, Req>>>
    readonly totalCount?: number
  }>

  select<K extends keyof TypeOf<ObjC<Opt, Req>>>(
    query: Omit<APIQuery<TypeOf<ObjC<Opt, Req>>>, 'select'>,
    select: readonly K[],
    options?: Omit<APIMethodArgs, 'query'>,
  ): Promise<
    ReadonlyArray<
      TypeOf<
        ObjC<Pick<Opt, Extract<keyof Opt, K>>, Pick<Req, Extract<keyof Req, K>>>
      >
    >
  >

  replace(
    id: TypeOfID<Opt, Req>,
    data: TypeOf<ObjC<Opt, Req>>,
    options?: APIMethodArgs,
  ): Promise<TypeOf<ObjC<Opt, Req>>>

  update(
    id: TypeOfID<Opt, Req>,
    data: Partial<TypeOf<ObjC<Opt, Req>>>,
    options?: APIMethodArgs,
  ): Promise<TypeOf<ObjC<Opt, Req>>>

  del(id: TypeOfID<Opt, Req>, options?: APIMethodArgs): Promise<void>

  many$(
    options?: APIMethodArgs,
  ): {
    readonly data: Promise<ReadonlyArray<TypeOf<ObjC<Opt, Req>>>>
    readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
  }

  one$(
    options?: APIMethodArgs,
  ): {
    readonly data: Promise<TypeOf<ObjC<Opt, Req>>>
    readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
  }

  create$(
    data: Omit<TypeOf<ObjC<Opt, Req>>, keyof TypeOfID<Opt, Req>>,
    options?: APIMethodArgs,
  ): {
    readonly data: Promise<TypeOf<ObjC<Opt, Req>>>
    readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
  }

  get$(
    id: TypeOfID<Opt, Req>,
    options?: APIMethodArgs,
  ): {
    readonly data: Promise<TypeOf<ObjC<Opt, Req>>>
    readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
  }

  list$(
    query: APIQuery<TypeOf<ObjC<Opt, Req>>>,
    options?: Omit<APIMethodArgs, 'query'>,
  ): {
    readonly data: Promise<ReadonlyArray<TypeOf<ObjC<Opt, Req>>>>
    readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
  }

  select$<K extends keyof TypeOf<ObjC<Opt, Req>>>(
    query: Omit<APIQuery<TypeOf<ObjC<Opt, Req>>>, 'select'>,
    select: readonly K[],
    options?: Omit<APIMethodArgs, 'query'>,
  ): {
    readonly data: Promise<
      ReadonlyArray<
        TypeOf<
          ObjC<
            Pick<Opt, Extract<keyof Opt, K>>,
            Pick<Req, Extract<keyof Req, K>>
          >
        >
      >
    >
    readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
  }

  replace$(
    id: TypeOfID<Opt, Req>,
    data: TypeOf<ObjC<Opt, Req>>,
    options?: APIMethodArgs,
  ): {
    readonly data: Promise<TypeOf<ObjC<Opt, Req>>>
    readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
  }

  update$(
    id: TypeOfID<Opt, Req>,
    data: Partial<TypeOf<ObjC<Opt, Req>>>,
    options?: APIMethodArgs,
  ): {
    readonly data: Promise<TypeOf<ObjC<Opt, Req>>>
    readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
  }

  del$(
    id: TypeOfID<Opt, Req>,
    options?: APIMethodArgs,
  ): Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
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

export function rest<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
  idPath: (id: TypeOfID<Opt, Req>) => string,
  resource: string,
  options: RequestConfig | AxiosInstance,
  toQuery: (
    spec: ObjC<Opt, Req>,
    query: APIQuery<TypeOf<ObjC<Opt, Req>>>,
  ) => string = toQueryFn,
): API<Opt, Req> {
  const http: ReturnType<typeof httpAPI> = httpAPI(options)

  function many$(
    options: APIMethodArgs,
  ): {
    readonly data: Promise<ReadonlyArray<TypeOf<ObjC<Opt, Req>>>>
    readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
  } {
    return http.get$({ ...options, resource }, readonlyArray(spec))
  }

  async function many(
    options: APIMethodArgs,
  ): Promise<ReadonlyArray<TypeOf<ObjC<Opt, Req>>>> {
    return many$(options).data
  }

  function one$(
    options: APIMethodArgs,
  ): {
    readonly data: Promise<ObjTypeOf<Opt, Req>>
    readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
  } {
    return http.get$({ ...options, resource }, spec)
  }

  async function one(options: APIMethodArgs): Promise<ObjTypeOf<Opt, Req>> {
    return one$(options).data
  }

  function create$(
    data: Omit<TypeOf<ObjC<Opt, Req>>, keyof TypeOfID<Opt, Req>>,
    options: APIMethodArgs,
  ): {
    readonly data: Promise<TypeOf<ObjC<Opt, Req>>>
    readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
  } {
    // @TODO: Hopefully in future, either we won't omit, or use spec to omit.
    return http.post$(
      { ...options, resource },
      omit(data, Object.keys(pickID(spec)) as any),
      spec,
    )
  }

  async function create(
    data: Omit<TypeOf<ObjC<Opt, Req>>, keyof TypeOfID<Opt, Req>>,
    options: APIMethodArgs,
  ): Promise<TypeOf<ObjC<Opt, Req>>> {
    return create$(data, options).data
  }

  async function del$(
    id: TypeOfID<Opt, Req>,
    options?: APIMethodArgs,
  ): Promise<AxiosResponse<void>> {
    return http.del$(appendId({ ...options, resource }, idPath(id)))
  }

  async function del(
    id: TypeOfID<Opt, Req>,
    options?: APIMethodArgs,
  ): Promise<void> {
    await del$(id, options)
  }

  function get$(
    id: TypeOfID<Opt, Req>,
    options: APIMethodArgs,
  ): {
    readonly data: Promise<TypeOf<ObjC<Opt, Req>>>
    readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
  } {
    return one$(appendId({ ...options, resource }, idPath(id)))
  }

  async function get(
    id: TypeOfID<Opt, Req>,
    options: APIMethodArgs,
  ): Promise<TypeOf<ObjC<Opt, Req>>> {
    return get$(id, options).data
  }

  function list$(
    query: APIQuery<TypeOf<ObjC<Opt, Req>>>,
    options?: Omit<APIMethodArgs, 'query'>,
  ): {
    readonly data: Promise<ReadonlyArray<TypeOf<ObjC<Opt, Req>>>>
    readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
  } {
    return many$({ query: toQuery(spec, query), ...options })
  }

  async function list(
    query: APIQuery<TypeOf<ObjC<Opt, Req>>>,
    options?: Omit<APIMethodArgs, 'query'>,
  ): Promise<ReadonlyArray<TypeOf<ObjC<Opt, Req>>>> {
    return list$(query, options).data
  }

  async function listWithCount(
    query: APIQuery<TypeOf<ObjC<Opt, Req>>>,
    options?: Omit<APIMethodArgs, 'query'>,
  ): Promise<{
    list: ReadonlyArray<TypeOf<ObjC<Opt, Req>>>
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

  function select$<K extends keyof TypeOf<ObjC<Opt, Req>>>(
    query: Omit<APIQuery<TypeOf<ObjC<Opt, Req>>>, 'select'>,
    select: readonly K[],
    options?: Omit<APIMethodArgs, 'query'>,
    // @TODO: LOL at type
  ): {
    readonly data: Promise<
      ReadonlyArray<
        TypeOf<
          ObjC<
            Pick<Opt, Extract<keyof Opt, K>>,
            Pick<Req, Extract<keyof Req, K>>
          >
        >
      >
    >
    readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
  } {
    return http.get$(
      { query: toQuery(spec, { ...query, select }), ...options, resource },
      readonlyArray(objPick(spec, select)),
    )
  }

  async function select<K extends keyof TypeOf<ObjC<Opt, Req>>>(
    query: Omit<APIQuery<TypeOf<ObjC<Opt, Req>>>, 'select'>,
    select: readonly K[],
    options?: Omit<APIMethodArgs, 'query'>,
    // @TODO: LOL at type
  ): Promise<
    ReadonlyArray<
      TypeOf<
        ObjC<Pick<Opt, Extract<keyof Opt, K>>, Pick<Req, Extract<keyof Req, K>>>
      >
    >
  > {
    return select$(query, select, options).data
  }

  function replace$(
    id: TypeOfID<Opt, Req>,
    data: TypeOf<ObjC<Opt, Req>>,
    options: APIMethodArgs,
  ): {
    readonly data: Promise<TypeOf<ObjC<Opt, Req>>>
    readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
  } {
    return http.put$(appendId({ ...options, resource }, idPath(id)), data, spec)
  }

  async function replace(
    id: TypeOfID<Opt, Req>,
    data: TypeOf<ObjC<Opt, Req>>,
    options: APIMethodArgs,
  ): Promise<TypeOf<ObjC<Opt, Req>>> {
    return replace$(id, data, options).data
  }

  function update$(
    id: TypeOfID<Opt, Req>,
    data: Partial<TypeOf<ObjC<Opt, Req>>>,
    options: APIMethodArgs,
  ): {
    readonly data: Promise<TypeOf<ObjC<Opt, Req>>>
    readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
  } {
    return http.patch$(
      appendId({ ...options, resource }, idPath(id)),
      data,
      spec,
    )
  }

  async function update(
    id: TypeOfID<Opt, Req>,
    data: Partial<TypeOf<ObjC<Opt, Req>>>,
    options: APIMethodArgs,
  ): Promise<TypeOf<ObjC<Opt, Req>>> {
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
