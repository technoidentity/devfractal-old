import { stringify } from 'query-string'
import {
  AnyObj,
  cast,
  getProps,
  keyof,
  number,
  opt,
  partial,
  readonlyArray,
  req,
  string,
  TypeOf,
  union,
} from 'technoidentity-utils'

// tslint:disable typedef

export const Page = req({ current: number, limit: number })
const SliceStartEnd = req({ start: number, end: number })
const SliceStartLimit = req({ start: number, limit: number })
export const Slice = union([SliceStartEnd, SliceStartLimit])

// const Operators = opt({
//   gt: Int,
//   lt: Int,
//   gte: Int,
//   lte: Int,
//   ne: union([Int, string]),
//   like: string,
// })

export interface APIQuery<C> {
  readonly filter?: Partial<C>
  readonly range?: TypeOf<typeof Page> | TypeOf<typeof Slice>
  readonly asc?: ReadonlyArray<keyof C>
  readonly desc?: ReadonlyArray<keyof C>
  readonly fullText?: string
  // readonly operators?: TypeOf<typeof Operators>
  readonly like?: Partial<C>
  readonly embed?: keyof C
}

function apiQuerySpec(codec: AnyObj) {
  const props = getProps(codec)

  return opt({
    filter: partial(props),
    range: union([Page, Slice]),
    asc: readonlyArray(keyof(props)),
    desc: readonlyArray(keyof(props)),
    fullText: string,
    like: partial(props),
    // operators: record(keys(codec), Operators),
    embed: keyof(props),
  })
}

export function toJSONServerQuery<C extends AnyObj>(
  codec: C,
  query: APIQuery<TypeOf<typeof codec>>,
): string {
  cast(apiQuerySpec(codec), query)

  const range = Page.is(query.range)
    ? { _page: query.range.current, _limit: query.range.limit }
    : SliceStartEnd.is(query.range)
    ? {
        _start: query.range.start,
        _end: query.range.end,
      }
    : SliceStartLimit.is(query.range)
    ? { _start: query.range.start, _limit: query.range.limit }
    : {}

  const { asc, desc } = query
  const _sort = (asc || []).concat(desc || [])

  const _order = (asc || [])
    .map(_ => 'asc')
    .concat((desc || []).map(_ => 'desc'))

  const { like = {} } = query

  const likes = Object.keys(like || {}).reduce<any>((acc, k) => {
    // tslint:disable-next-line: no-object-mutation
    acc[`like_${k}`] = like[k]
    return acc
  }, {})

  const { filter, fullText: q, embed } = query
  return stringify(
    { ...likes, ...filter, ...range, _sort, _order, q, embed },
    { arrayFormat: 'comma' },
  )
}

export function toAPIQuery<C extends AnyObj>(
  spec: C,
  query: APIQuery<TypeOf<typeof spec>>,
): string {
  cast(apiQuerySpec(spec), query)

  const { asc, desc } = query

  const { filter, fullText: q, embed } = query
  return stringify(
    { ...filter, ...(query.range || {}), asc, desc, q, embed },
    { arrayFormat: 'comma' },
  )
}
