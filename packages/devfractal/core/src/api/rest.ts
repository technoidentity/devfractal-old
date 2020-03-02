import { AxiosInstance, AxiosResponse } from 'axios'
import { produce } from 'immer'
import {
  ObjC,
  ObjInputOf,
  objPick,
  ObjTypeOf,
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
    data: Omit<TypeOf<ObjC<Opt, Req>>, ID>,
    options?: APIMethodArgs,
  ): {
    readonly data: Promise<TypeOf<ObjC<Opt, Req>>>
    readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
  }

  get$(
    id: TypeOf<ObjC<Opt, Req>>[ID],
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
    id: TypeOf<ObjC<Opt, Req>>[ID],
    data: TypeOf<ObjC<Opt, Req>>,
    options?: APIMethodArgs,
  ): {
    readonly data: Promise<TypeOf<ObjC<Opt, Req>>>
    readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
  }

  update$(
    id: TypeOf<ObjC<Opt, Req>>[ID],
    data: Partial<TypeOf<ObjC<Opt, Req>>>,
    options?: APIMethodArgs,
  ): {
    readonly data: Promise<TypeOf<ObjC<Opt, Req>>>
    readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
  }

  del$(
    id: TypeOf<ObjC<Opt, Req>>[ID],
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

export function rest<
  Opt extends Props,
  Req extends Props,
  ID extends keyof TypeOf<ObjC<Opt, Req>>
>(
  spec: ObjC<Opt, Req>,
  idKey: ID,
  resource: string,
  options: RequestConfig | AxiosInstance,
  toQuery: (
    spec: ObjC<Opt, Req>,
    query: APIQuery<TypeOf<ObjC<Opt, Req>>>,
  ) => string = toQueryFn,
): API<Opt, Req, ID> {
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
    data: Omit<TypeOf<ObjC<Opt, Req>>, ID>,
    options: APIMethodArgs,
  ): {
    readonly data: Promise<TypeOf<ObjC<Opt, Req>>>
    readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
  } {
    // @TODO: Hopefully in future, either we won't omit, or use spec to omit.
    return http.post$(
      { ...options, resource },
      omit(data, [idKey as any]),
      spec,
    )
  }

  async function create(
    data: Omit<TypeOf<ObjC<Opt, Req>>, ID>,
    options: APIMethodArgs,
  ): Promise<TypeOf<ObjC<Opt, Req>>> {
    return create$(data, options).data
  }

  async function del$(
    id: TypeOf<ObjC<Opt, Req>>[ID],
    options?: APIMethodArgs,
  ): Promise<AxiosResponse<void>> {
    return http.del$(appendId({ ...options, resource }, id))
  }

  async function del(
    id: TypeOf<ObjC<Opt, Req>>[ID],
    options?: APIMethodArgs,
  ): Promise<void> {
    await del$(id, options)
  }

  function get$(
    id: TypeOf<ObjC<Opt, Req>>[ID],
    options: APIMethodArgs,
  ): {
    readonly data: Promise<TypeOf<ObjC<Opt, Req>>>
    readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
  } {
    return one$(appendId({ ...options, resource }, id))
  }

  async function get(
    id: TypeOf<ObjC<Opt, Req>>[ID],
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
    id: TypeOf<ObjC<Opt, Req>>[ID],
    data: TypeOf<ObjC<Opt, Req>>,
    options: APIMethodArgs,
  ): {
    readonly data: Promise<TypeOf<ObjC<Opt, Req>>>
    readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
  } {
    return http.put$(appendId({ ...options, resource }, id), data, spec)
  }

  async function replace(
    id: TypeOf<ObjC<Opt, Req>>[ID],
    data: TypeOf<ObjC<Opt, Req>>,
    options: APIMethodArgs,
  ): Promise<TypeOf<ObjC<Opt, Req>>> {
    return replace$(id, data, options).data
  }

  function update$(
    id: TypeOf<ObjC<Opt, Req>>[ID],
    data: Partial<TypeOf<ObjC<Opt, Req>>>,
    options: APIMethodArgs,
  ): {
    readonly data: Promise<TypeOf<ObjC<Opt, Req>>>
    readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
  } {
    return http.patch$(appendId({ ...options, resource }, id), data, spec)
  }

  async function update(
    id: TypeOf<ObjC<Opt, Req>>[ID],
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
    list$,
    select,
    select$,

    idKey,
    spec,
    resource,
    http,
  }
}
