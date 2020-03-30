// import { stringify } from 'query-string'
// import {
//   AnyDb,
//   cast,
//   DbC,
//   IDProps,
//   keyof,
//   number,
//   opt,
//   partial,
//   Props,
//   readonlyArray,
//   RefProps,
//   req,
//   string,
//   TypeOf,
//   union,
// } from 'srtp-utils'

// // tslint:disable typedef

// export const Page = req({ current: number, limit: number })
// const SliceStartEnd = req({ start: number, end: number })
// const SliceStartLimit = req({ start: number, limit: number })
// export const Slice = union([SliceStartEnd, SliceStartLimit])

// // const Operators = opt({
// //   gt: Int,
// //   lt: Int,
// //   gte: Int,
// //   lte: Int,
// //   ne: union([Int, string]),
// //   like: string,
// // })

// export interface APIQuery<C> {
//   readonly select?: ReadonlyArray<keyof C>
//   readonly filter?: Partial<C>
//   readonly range?: TypeOf<typeof Page> | TypeOf<typeof Slice>
//   readonly asc?: ReadonlyArray<keyof C>
//   readonly desc?: ReadonlyArray<keyof C>
//   readonly fullText?: string
//   readonly like?: Partial<C>
//   // @TODO: Ref io-ts type must be implemented
//   readonly embed?: ReadonlyArray<keyof C>
//   // readonly operators?: TypeOf<typeof Operators>
// }

// function apiQuerySpec(codec: AnyDb) {
//   const props = codec.props

//   return opt({
//     select: readonlyArray(keyof(props)),
//     filter: partial(props),
//     range: union([Page, Slice]),
//     asc: readonlyArray(keyof(props)),
//     desc: readonlyArray(keyof(props)),
//     fullText: string,
//     like: partial(props),
//     // operators: record(keys(codec), Operators),
//     embed: readonlyArray(keyof(props)),
//   })
// }

// function likeQuery(like?: object): object {
//   const obj = like || {}
//   return Object.keys(obj).reduce<any>((acc, k) => {
//     // tslint:disable-next-line: no-object-mutation
//     acc[`${k}_like`] = obj[k]
//     return acc
//   }, {})
// }

// export function toJSONServerQuery<
//   ID extends IDProps,
//   Opt extends Props,
//   Req extends Props,
//   Ref extends RefProps
// >(
//   codec: DbC<ID, Opt, Req, Ref>,
//   query: APIQuery<TypeOf<typeof codec>>,
// ): string {
//   cast(apiQuerySpec(codec), query)

//   const range = Page.is(query.range)
//     ? { _page: query.range.current, _limit: query.range.limit }
//     : SliceStartEnd.is(query.range)
//     ? {
//         _start: query.range.start,
//         _end: query.range.end,
//       }
//     : SliceStartLimit.is(query.range)
//     ? { _start: query.range.start, _limit: query.range.limit }
//     : {}

//   const { asc, desc } = query
//   const _sort = (asc || []).concat(desc || [])

//   const _order = (asc || [])
//     .map(_ => 'asc')
//     .concat((desc || []).map(_ => 'desc'))

//   const { filter, fullText: q, embed: _embed } = query
//   return stringify(
//     {
//       ...likeQuery(query.like),
//       ...filter,
//       ...range,
//       _sort,
//       _order,
//       q,
//       _embed,
//     },
//     { arrayFormat: 'comma' },
//   )
// }

// export function toAPIQuery<
//   ID extends IDProps,
//   Opt extends Props,
//   Req extends Props,
//   Ref extends RefProps
// >(spec: DbC<ID, Opt, Req, Ref>, query: APIQuery<TypeOf<typeof spec>>): string {
//   cast(apiQuerySpec(spec), query)

//   const { asc, desc } = query

//   const { filter, fullText: q, embed, select } = query

//   return stringify(
//     {
//       ...filter,
//       ...(query.range || {}),
//       select,
//       asc,
//       desc,
//       q,
//       embed,
//       ...likeQuery(query.like),
//     },
//     { arrayFormat: 'bracket' },
//   )
// }
