// import { AxiosInstance, AxiosResponse } from 'axios'
// import { produce } from 'immer'
// import {
//   DbC,
//   DbTypeOf,
//   IDProps,
//   Int,
//   isRight,
//   ObjInputOf,
//   Props,
//   readonlyArray,
//   RefProps,
//   toDbOpt,
//   TypeOf,
//   UnknownArray,
// } from 'technoidentity-utils'
// import { APIQuery, toAPIQuery as toQueryFn } from './dbQuery'
// import { http as httpAPI, MethodArgs, RequestConfig } from './http'

// type APIMethodArgs = Omit<MethodArgs, 'resource'>
// export interface API<
//   ID extends IDProps,
//   Opt extends Props,
//   Req extends Props,
//   Ref extends RefProps
// > {
//   readonly http: ReturnType<typeof httpAPI>
//   readonly spec: DbC<ID, Opt, Req, Ref>

//   readonly resource: string

//   many(
//     options?: APIMethodArgs,
//   ): Promise<ReadonlyArray<TypeOf<DbC<ID, Opt, Req, Ref>>>>

//   one(options?: APIMethodArgs): Promise<TypeOf<DbC<ID, Opt, Req, Ref>>>

//   create(
//     data: DbC<{}, Opt, Req, Ref>,
//     options?: APIMethodArgs,
//   ): Promise<TypeOf<DbC<ID, Opt, Req, Ref>>>

//   get(id: ID, options?: APIMethodArgs): Promise<TypeOf<DbC<ID, Opt, Req, Ref>>>

//   list(
//     query: APIQuery<TypeOf<DbC<ID, Opt, Req, Ref>>>,
//     options?: Omit<APIMethodArgs, 'query'>,
//   ): Promise<ReadonlyArray<TypeOf<DbC<ID, Opt, Req, Ref>>>>

//   listWithCount(
//     query: APIQuery<TypeOf<DbC<ID, Opt, Req, Ref>>>,
//     options?: Omit<APIMethodArgs, 'query'>,
//   ): Promise<{
//     readonly list: ReadonlyArray<TypeOf<DbC<ID, Opt, Req, Ref>>>
//     readonly totalCount?: number
//   }>

//   // select<K extends keyof TypeOf<DbC<ID, Opt, Req, Ref>>>(
//   //   query: Omit<APIQuery<TypeOf<DbC<ID, Opt, Req, Ref>>>, 'select'>,
//   //   select: readonly K[],
//   //   options?: Omit<APIMethodArgs, 'query'>,
//   // ): Promise<
//   //   ReadonlyArray<
//   //     TypeOf<
//   //       DbC<Pick<ID, Opt, Extract<keyof Opt, K>>, Pick<Req, Extract<keyof Req, K>>>
//   //     >
//   //   >
//   // >

//   replace(
//     id: ID,
//     data: TypeOf<DbC<ID, Opt, Req, Ref>>,
//     options?: APIMethodArgs,
//   ): Promise<TypeOf<DbC<ID, Opt, Req, Ref>>>

//   update(
//     id: ID,
//     data: Partial<TypeOf<DbC<ID, Opt, Req, Ref>>>,
//     options?: APIMethodArgs,
//   ): Promise<TypeOf<DbC<ID, Opt, Req, Ref>>>

//   del(id: ID, options?: APIMethodArgs): Promise<void>

//   many$(
//     options?: APIMethodArgs,
//   ): {
//     readonly data: Promise<ReadonlyArray<TypeOf<DbC<ID, Opt, Req, Ref>>>>
//     readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
//   }

//   one$(
//     options?: APIMethodArgs,
//   ): {
//     readonly data: Promise<TypeOf<DbC<ID, Opt, Req, Ref>>>
//     readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
//   }

//   create$(
//     data: DbC<{}, Opt, Req, Ref>,
//     options?: APIMethodArgs,
//   ): {
//     readonly data: Promise<TypeOf<DbC<ID, Opt, Req, Ref>>>
//     readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
//   }

//   get$(
//     id: ID,
//     options?: APIMethodArgs,
//   ): {
//     readonly data: Promise<TypeOf<DbC<ID, Opt, Req, Ref>>>
//     readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
//   }

//   list$(
//     query: APIQuery<TypeOf<DbC<ID, Opt, Req, Ref>>>,
//     options?: Omit<APIMethodArgs, 'query'>,
//   ): {
//     readonly data: Promise<ReadonlyArray<TypeOf<DbC<ID, Opt, Req, Ref>>>>
//     readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
//   }

//   // select$<K extends keyof TypeOf<DbC<ID, Opt, Req, Ref>>>(
//   //   query: Omit<APIQuery<TypeOf<DbC<ID, Opt, Req, Ref>>>, 'select'>,
//   //   select: readonly K[],
//   //   options?: Omit<APIMethodArgs, 'query'>,
//   // ): {
//   //   readonly data: Promise<
//   //     ReadonlyArray<
//   //       TypeOf<
//   //         DbC<
//   //           Pick<Opt, Extract<keyof Opt, K>>,
//   //           Pick<Req, Extract<keyof Req, K>>
//   //         >
//   //       >
//   //     >
//   //   >
//   //   readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
//   // }

//   replace$(
//     id: ID,
//     data: TypeOf<DbC<ID, Opt, Req, Ref>>,
//     options?: APIMethodArgs,
//   ): {
//     readonly data: Promise<TypeOf<DbC<ID, Opt, Req, Ref>>>
//     readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
//   }

//   update$(
//     id: ID,
//     data: Partial<TypeOf<DbC<ID, Opt, Req, Ref>>>,
//     options?: APIMethodArgs,
//   ): {
//     readonly data: Promise<TypeOf<DbC<ID, Opt, Req, Ref>>>
//     readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
//   }

//   del$(
//     id: ID,
//     options?: APIMethodArgs,
//   ): Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
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

// export function dbRest<
//   ID extends IDProps,
//   Opt extends Props,
//   Req extends Props,
//   Ref extends RefProps
// >(
//   spec: DbC<ID, Opt, Req, Ref>,
//   resource: string,
//   options: RequestConfig | AxiosInstance,
//   toQuery: (
//     spec: DbC<ID, Opt, Req, Ref>,
//     query: APIQuery<DbTypeOf<ID, Opt, Req, Ref>>,
//   ) => string = toQueryFn,
//   idPath: (id: ID) => string,
// ): API<ID, Opt, Req, Ref> {
//   const http: ReturnType<typeof httpAPI> = httpAPI(options)

//   function many$(
//     options: APIMethodArgs,
//   ): {
//     readonly data: Promise<ReadonlyArray<TypeOf<DbC<ID, Opt, Req, Ref>>>>
//     readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
//   } {
//     return http.get$({ ...options, resource }, readonlyArray(spec))
//   }

//   async function many(
//     options: APIMethodArgs,
//   ): Promise<ReadonlyArray<TypeOf<DbC<ID, Opt, Req, Ref>>>> {
//     return many$(options).data
//   }

//   function one$(
//     options: APIMethodArgs,
//   ): {
//     readonly data: Promise<DbTypeOf<ID, Opt, Req, Ref>>
//     readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
//   } {
//     return http.get$({ ...options, resource }, spec)
//   }

//   async function one(
//     options: APIMethodArgs,
//   ): Promise<DbTypeOf<ID, Opt, Req, Ref>> {
//     return one$(options).data
//   }

//   function create$(
//     data: DbC<{}, Opt, Req, Ref>,
//     options: APIMethodArgs,
//   ): {
//     readonly data: Promise<TypeOf<DbC<ID, Opt, Req, Ref>>>
//     readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
//   } {
//     return http.post$({ ...options, resource }, data, spec)
//   }

//   async function create(
//     data: DbC<{}, Opt, Req, Ref>,
//     options: APIMethodArgs,
//   ): Promise<TypeOf<DbC<ID, Opt, Req, Ref>>> {
//     return create$(data, options).data
//   }

//   async function del$(
//     id: ID,
//     options?: APIMethodArgs,
//   ): Promise<AxiosResponse<void>> {
//     return http.del$(appendId({ ...options, resource }, idPath(id)))
//   }

//   async function del(id: ID, options?: APIMethodArgs): Promise<void> {
//     await del$(id, options)
//   }

//   function get$(
//     id: ID,
//     options: APIMethodArgs,
//   ): {
//     readonly data: Promise<TypeOf<DbC<ID, Opt, Req, Ref>>>
//     readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
//   } {
//     return one$(appendId({ ...options, resource }, idPath(id)))
//   }

//   async function get(
//     id: ID,
//     options: APIMethodArgs,
//   ): Promise<TypeOf<DbC<ID, Opt, Req, Ref>>> {
//     return get$(id, options).data
//   }

//   function list$(
//     query: APIQuery<TypeOf<DbC<ID, Opt, Req, Ref>>>,
//     options?: Omit<APIMethodArgs, 'query'>,
//   ): {
//     readonly data: Promise<ReadonlyArray<TypeOf<DbC<ID, Opt, Req, Ref>>>>
//     readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
//   } {
//     return many$({ query: toQuery(spec, query), ...options })
//   }

//   async function list(
//     query: APIQuery<TypeOf<DbC<ID, Opt, Req, Ref>>>,
//     options?: Omit<APIMethodArgs, 'query'>,
//   ): Promise<ReadonlyArray<TypeOf<DbC<ID, Opt, Req, Ref>>>> {
//     return list$(query, options).data
//   }

//   async function listWithCount(
//     query: APIQuery<TypeOf<DbC<ID, Opt, Req, Ref>>>,
//     options?: Omit<APIMethodArgs, 'query'>,
//   ): Promise<{
//     list: ReadonlyArray<TypeOf<DbC<ID, Opt, Req, Ref>>>
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

//   // function select$<K extends keyof TypeOf<DbC<ID, Opt, Req, Ref>>>(
//   //   query: Omit<APIQuery<TypeOf<DbC<ID, Opt, Req, Ref>>>, 'select'>,
//   //   select: readonly K[],
//   //   options?: Omit<APIMethodArgs, 'query'>,
//   //   // @TODO: LOL at type
//   // ): {
//   //   readonly data: Promise<
//   //     ReadonlyArray<
//   //       TypeOf<
//   //         DbC<
//   //           Pick<Opt, Extract<keyof Opt, K>>,
//   //           Pick<Req, Extract<keyof Req, K>>
//   //         >
//   //       >
//   //     >
//   //   >
//   //   readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
//   // } {
//   //   return http.get$(
//   //     { query: toQuery(spec, { ...query, select }), ...options, resource },
//   //     readonlyArray(dbPick(spec, select)),
//   //   )
//   // }

//   // async function select<K extends keyof TypeOf<DbC<ID, Opt, Req, Ref>>>(
//   //   query: Omit<APIQuery<TypeOf<DbC<ID, Opt, Req, Ref>>>, 'select'>,
//   //   select: readonly K[],
//   //   options?: Omit<APIMethodArgs, 'query'>,
//   //   // @TODO: LOL at type
//   // ): Promise<
//   //   ReadonlyArray<
//   //     TypeOf<
//   //       DbC<Pick<Opt, Extract<keyof Opt, K>>, Pick<Req, Extract<keyof Req, K>>>
//   //     >
//   //   >
//   // > {
//   //   return select$(query, select, options).data
//   // }

//   function replace$(
//     id: ID,
//     data: TypeOf<DbC<ID, Opt, Req, Ref>>,
//     options: APIMethodArgs,
//   ): {
//     readonly data: Promise<TypeOf<DbC<ID, Opt, Req, Ref>>>
//     readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
//   } {
//     return http.put$(appendId({ ...options, resource }, idPath(id)), data, spec)
//   }

//   async function replace(
//     id: ID,
//     data: TypeOf<DbC<ID, Opt, Req, Ref>>,
//     options: APIMethodArgs,
//   ): Promise<TypeOf<DbC<ID, Opt, Req, Ref>>> {
//     return replace$(id, data, options).data
//   }

//   function update$(
//     id: ID,
//     data: Partial<TypeOf<DbC<ID, Opt, Req, Ref>>>,
//     options: APIMethodArgs,
//   ): {
//     readonly data: Promise<TypeOf<DbC<ID, Opt, Req, Ref>>>
//     readonly response: Promise<AxiosResponse<ObjInputOf<Opt, Req>>>
//   } {
//     return http.patch$(
//       appendId({ ...options, resource }, idPath(id)),
//       data,
//       toDbOpt(spec),
//     )
//   }

//   async function update(
//     id: ID,
//     data: Partial<TypeOf<DbC<ID, Opt, Req, Ref>>>,
//     options: APIMethodArgs,
//   ): Promise<TypeOf<DbC<ID, Opt, Req, Ref>>> {
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

//     // select,
//     // select$,

//     spec,
//     resource,
//     http,
//   }
// }
