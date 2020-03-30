// import { AxiosInstance, AxiosResponse } from 'axios'
// import { produce } from 'immer'
// import {
//   Int,
//   isRight,
//   omit,
//   Props,
//   PropsC,
//   PropsInputOf,
//   propsPick,
//   PropsTypeOf,
//   readonlyArray,
//   TypeOf,
//   UnknownArray,
// } from 'srtp-utils'
// import { http as httpAPI, MethodArgs, RequestConfig } from './http'
// import { APIQuery, toAPIQuery as toQueryFn } from './query'

// type APIMethodArgs = Omit<MethodArgs, 'resource'>
// export interface API<P extends Props, ID extends keyof PropsTypeOf<P>> {
//   readonly http: ReturnType<typeof httpAPI>
//   readonly spec: PropsC<P>
//   readonly idKey: ID
//   readonly resource: string

//   many(options?: APIMethodArgs): Promise<ReadonlyArray<TypeOf<PropsC<P>>>>

//   one(options?: APIMethodArgs): Promise<TypeOf<PropsC<P>>>

//   create(
//     data: Omit<TypeOf<PropsC<P>>, ID>,
//     options?: APIMethodArgs,
//   ): Promise<TypeOf<PropsC<P>>>

//   get(
//     id: TypeOf<PropsC<P>>[ID],
//     options?: APIMethodArgs,
//   ): Promise<TypeOf<PropsC<P>>>

//   list(
//     query: APIQuery<TypeOf<PropsC<P>>>,
//     options?: Omit<APIMethodArgs, 'query'>,
//   ): Promise<ReadonlyArray<TypeOf<PropsC<P>>>>

//   listWithCount(
//     query: APIQuery<TypeOf<PropsC<P>>>,
//     options?: Omit<APIMethodArgs, 'query'>,
//   ): Promise<{
//     readonly list: ReadonlyArray<TypeOf<PropsC<P>>>
//     readonly totalCount?: number
//   }>

//   select<K extends keyof TypeOf<PropsC<P>>>(
//     query: Omit<APIQuery<TypeOf<PropsC<P>>>, 'select'>,
//     select: readonly K[],
//     options?: Omit<APIMethodArgs, 'query'>,
//   ): Promise<ReadonlyArray<TypeOf<PropsC<Pick<P, K>>>>>

//   replace(
//     id: TypeOf<PropsC<P>>[ID],
//     data: TypeOf<PropsC<P>>,
//     options?: APIMethodArgs,
//   ): Promise<TypeOf<PropsC<P>>>

//   update(
//     id: TypeOf<PropsC<P>>[ID],
//     data: Partial<TypeOf<PropsC<P>>>,
//     options?: APIMethodArgs,
//   ): Promise<TypeOf<PropsC<P>>>

//   del(id: TypeOf<PropsC<P>>[ID], options?: APIMethodArgs): Promise<void>

//   many$(
//     options?: APIMethodArgs,
//   ): {
//     readonly data: Promise<ReadonlyArray<TypeOf<PropsC<P>>>>
//     readonly response: Promise<AxiosResponse<PropsInputOf<P>>>
//   }

//   one$(
//     options?: APIMethodArgs,
//   ): {
//     readonly data: Promise<TypeOf<PropsC<P>>>
//     readonly response: Promise<AxiosResponse<PropsInputOf<P>>>
//   }

//   create$(
//     data: Omit<TypeOf<PropsC<P>>, ID>,
//     options?: APIMethodArgs,
//   ): {
//     readonly data: Promise<TypeOf<PropsC<P>>>
//     readonly response: Promise<AxiosResponse<PropsInputOf<P>>>
//   }

//   get$(
//     id: TypeOf<PropsC<P>>[ID],
//     options?: APIMethodArgs,
//   ): {
//     readonly data: Promise<TypeOf<PropsC<P>>>
//     readonly response: Promise<AxiosResponse<PropsInputOf<P>>>
//   }

//   list$(
//     query: APIQuery<TypeOf<PropsC<P>>>,
//     options?: Omit<APIMethodArgs, 'query'>,
//   ): {
//     readonly data: Promise<ReadonlyArray<TypeOf<PropsC<P>>>>
//     readonly response: Promise<AxiosResponse<PropsInputOf<P>>>
//   }

//   select$<K extends keyof TypeOf<PropsC<P>>>(
//     query: Omit<APIQuery<TypeOf<PropsC<P>>>, 'select'>,
//     select: readonly K[],
//     options?: Omit<APIMethodArgs, 'query'>,
//   ): {
//     readonly data: Promise<ReadonlyArray<TypeOf<PropsC<Pick<P, K>>>>>
//     readonly response: Promise<AxiosResponse<PropsInputOf<P>>>
//   }

//   replace$(
//     id: TypeOf<PropsC<P>>[ID],
//     data: TypeOf<PropsC<P>>,
//     options?: APIMethodArgs,
//   ): {
//     readonly data: Promise<TypeOf<PropsC<P>>>
//     readonly response: Promise<AxiosResponse<PropsInputOf<P>>>
//   }

//   update$(
//     id: TypeOf<PropsC<P>>[ID],
//     data: Partial<TypeOf<PropsC<P>>>,
//     options?: APIMethodArgs,
//   ): {
//     readonly data: Promise<TypeOf<PropsC<P>>>
//     readonly response: Promise<AxiosResponse<PropsInputOf<P>>>
//   }

//   del$(
//     id: TypeOf<PropsC<P>>[ID],
//     options?: APIMethodArgs,
//   ): Promise<AxiosResponse<PropsInputOf<P>>>
// }

// function appendId(options: MethodArgs, id: string): MethodArgs {
//   return produce(options, draft => {
//     if (draft.path === undefined) {
//       draft.path = id
//     } else if (UnknownArray.is(draft.path)) {
//       draft.path.unshift(id)
//     } else {
//       draft.path = [id, draft.path]
//     }
//   })
// }

// export function rest<P extends Props, ID extends keyof PropsTypeOf<P>>(
//   spec: PropsC<P>,
//   idKey: ID,
//   resource: string,
//   options: RequestConfig | AxiosInstance,
//   toQuery: (
//     spec: PropsC<P>,
//     query: APIQuery<TypeOf<PropsC<P>>>,
//   ) => string = toQueryFn,
// ): API<P, ID> {
//   const http: ReturnType<typeof httpAPI> = httpAPI(options)

//   function many$(
//     options: APIMethodArgs,
//   ): {
//     readonly data: Promise<ReadonlyArray<TypeOf<PropsC<P>>>>
//     readonly response: Promise<AxiosResponse<PropsInputOf<P>>>
//   } {
//     return http.get$({ ...options, resource }, readonlyArray(spec))
//   }

//   async function many(
//     options: APIMethodArgs,
//   ): Promise<ReadonlyArray<TypeOf<PropsC<P>>>> {
//     return many$(options).data
//   }

//   function one$(
//     options: APIMethodArgs,
//   ): {
//     readonly data: Promise<PropsTypeOf<P>>
//     readonly response: Promise<AxiosResponse<PropsInputOf<P>>>
//   } {
//     return http.get$({ ...options, resource }, spec)
//   }

//   async function one(options: APIMethodArgs): Promise<PropsTypeOf<P>> {
//     return one$(options).data
//   }

//   function create$(
//     data: Omit<TypeOf<PropsC<P>>, ID>,
//     options: APIMethodArgs,
//   ): {
//     readonly data: Promise<TypeOf<PropsC<P>>>
//     readonly response: Promise<AxiosResponse<PropsInputOf<P>>>
//   } {
//     // @TODO: Hopefully in future, either we won't omit, or use spec to omit.
//     return http.post$(
//       { ...options, resource },
//       omit(data, [idKey as any]),
//       spec,
//     )
//   }

//   async function create(
//     data: Omit<TypeOf<PropsC<P>>, ID>,
//     options: APIMethodArgs,
//   ): Promise<TypeOf<PropsC<P>>> {
//     return create$(data, options).data
//   }

//   async function del$(
//     id: TypeOf<PropsC<P>>[ID],
//     options?: APIMethodArgs,
//   ): Promise<AxiosResponse<void>> {
//     return http.del$(appendId({ ...options, resource }, id))
//   }

//   async function del(
//     id: TypeOf<PropsC<P>>[ID],
//     options?: APIMethodArgs,
//   ): Promise<void> {
//     await del$(id, options)
//   }

//   function get$(
//     id: TypeOf<PropsC<P>>[ID],
//     options: APIMethodArgs,
//   ): {
//     readonly data: Promise<TypeOf<PropsC<P>>>
//     readonly response: Promise<AxiosResponse<PropsInputOf<P>>>
//   } {
//     return one$(appendId({ ...options, resource }, id))
//   }

//   async function get(
//     id: TypeOf<PropsC<P>>[ID],
//     options: APIMethodArgs,
//   ): Promise<TypeOf<PropsC<P>>> {
//     return get$(id, options).data
//   }

//   function list$(
//     query: APIQuery<TypeOf<PropsC<P>>>,
//     options?: Omit<APIMethodArgs, 'query'>,
//   ): {
//     readonly data: Promise<ReadonlyArray<TypeOf<PropsC<P>>>>
//     readonly response: Promise<AxiosResponse<PropsInputOf<P>>>
//   } {
//     return many$({ query: toQuery(spec, query), ...options })
//   }

//   async function list(
//     query: APIQuery<TypeOf<PropsC<P>>>,
//     options?: Omit<APIMethodArgs, 'query'>,
//   ): Promise<ReadonlyArray<TypeOf<PropsC<P>>>> {
//     return list$(query, options).data
//   }

//   async function listWithCount(
//     query: APIQuery<TypeOf<PropsC<P>>>,
//     options?: Omit<APIMethodArgs, 'query'>,
//   ): Promise<{
//     list: ReadonlyArray<TypeOf<PropsC<P>>>
//     totalCount?: number
//   }> {
//     // tslint:disable typedef
//     const result = list$(query, options)
//     const decoded = Int.decode((await result.response).headers['x-total-count'])
//     // tslint:enable typedef

//     return {
//       list: await result.data,
//       totalCount: isRight(decoded) ? decoded.right : undefined,
//     }
//   }

//   function select$<K extends keyof TypeOf<PropsC<P>>>(
//     query: Omit<APIQuery<TypeOf<PropsC<P>>>, 'select'>,
//     select: readonly K[],
//     options?: Omit<APIMethodArgs, 'query'>,
//   ): {
//     readonly data: Promise<ReadonlyArray<TypeOf<PropsC<Pick<P, K>>>>>
//     readonly response: Promise<AxiosResponse<PropsInputOf<P>>>
//   } {
//     return http.get$(
//       { query: toQuery(spec, { ...query, select }), ...options, resource },
//       readonlyArray(propsPick(spec, select)),
//     )
//   }

//   async function select<K extends keyof TypeOf<PropsC<P>>>(
//     query: Omit<APIQuery<TypeOf<PropsC<P>>>, 'select'>,
//     select: readonly K[],
//     options?: Omit<APIMethodArgs, 'query'>,
//   ): Promise<ReadonlyArray<TypeOf<PropsC<Pick<P, K>>>>> {
//     return select$(query, select, options).data
//   }

//   function replace$(
//     id: TypeOf<PropsC<P>>[ID],
//     data: TypeOf<PropsC<P>>,
//     options: APIMethodArgs,
//   ): {
//     readonly data: Promise<TypeOf<PropsC<P>>>
//     readonly response: Promise<AxiosResponse<PropsInputOf<P>>>
//   } {
//     return http.put$(appendId({ ...options, resource }, id), data, spec)
//   }

//   async function replace(
//     id: TypeOf<PropsC<P>>[ID],
//     data: TypeOf<PropsC<P>>,
//     options: APIMethodArgs,
//   ): Promise<TypeOf<PropsC<P>>> {
//     return replace$(id, data, options).data
//   }

//   function update$(
//     id: TypeOf<PropsC<P>>[ID],
//     data: Partial<TypeOf<PropsC<P>>>,
//     options: APIMethodArgs,
//   ): {
//     readonly data: Promise<TypeOf<PropsC<P>>>
//     readonly response: Promise<AxiosResponse<PropsInputOf<P>>>
//   } {
//     return http.patch$(appendId({ ...options, resource }, id), data, spec)
//   }

//   async function update(
//     id: TypeOf<PropsC<P>>[ID],
//     data: Partial<TypeOf<PropsC<P>>>,
//     options: APIMethodArgs,
//   ): Promise<TypeOf<PropsC<P>>> {
//     return update$(id, data, options).data
//   }

//   return {
//     one,
//     one$,

//     many,
//     many$,

//     replace,
//     replace$,

//     update,
//     update$,

//     create,
//     create$,

//     del,
//     del$,

//     get,
//     get$,

//     list,
//     listWithCount,
//     list$,

//     select,
//     select$,

//     idKey,
//     spec,
//     resource,
//     http,
//   }
// }
