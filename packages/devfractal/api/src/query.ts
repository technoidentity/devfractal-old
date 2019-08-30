import { stringify } from 'query-string'
import * as t from 'technoidentity-spec'
import { union } from 'technoidentity-spec'
import { cast, getProps, HasProps, opt, req } from 'technoidentity-utils'

// tslint:disable typedef

export const Page = req({ current: t.number, limit: t.number })
const SliceStartEnd = req({ start: t.number, end: t.number })
const SliceStartLimit = req({ start: t.number, limit: t.number })
export const Slice = union([SliceStartEnd, SliceStartLimit])

// const Operators = opt({
//   gt: t.number,
//   lt: t.number,
//   gte: t.number,
//   lte: t.number,
//   ne: NumOrStr,
//   like: t.string,
// })

export interface APIQuery<C> {
  readonly filter?: Partial<C>
  readonly range?: t.TypeOf<typeof Page> | t.TypeOf<typeof Slice>
  readonly asc?: ReadonlyArray<keyof C>
  readonly desc?: ReadonlyArray<keyof C>
  readonly fullText?: string
  //  readonly operators?: t.RecordC<t.KeyofC<C>, typeof Operators>
  readonly embed?: keyof C
}

function apiQuerySpec(codec: HasProps) {
  const props = getProps(codec)

  return opt({
    filter: t.partial(props),
    range: t.union([Page, Slice]),
    asc: t.readonlyArray(t.keyof(props)),
    desc: t.readonlyArray(t.keyof(props)),
    fullText: t.string,
    // operators: t.record(keys(codec), Operators),
    embed: t.keyof(props),
  })
}

export function toJSONServerQuery<C extends HasProps>(
  codec: C,
  query: APIQuery<t.TypeOf<typeof codec>>,
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

  const { filter, fullText: q, embed } = query
  return stringify(
    { ...filter, ...range, _sort, _order, q, embed },
    { arrayFormat: 'comma' },
  )
}

export function toAPIQuery<C extends HasProps>(
  spec: C,
  query: APIQuery<t.TypeOf<typeof spec>>,
): string {
  cast(apiQuerySpec(spec), query)

  const { asc, desc } = query

  const { filter, fullText: q, embed } = query
  return stringify(
    { ...filter, ...(query.range || {}), asc, desc, q, embed },
    { arrayFormat: 'comma' },
  )
}
