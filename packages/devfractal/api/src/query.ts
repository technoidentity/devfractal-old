import * as t from 'io-ts'
import { stringify } from 'query-string'
import { cast, getProps, HasProps, opt } from 'technoidentity-utils'

// tslint:disable typedef

const Page = opt({ current: t.number, limit: t.number })
const Slice = opt({ start: t.number, end: t.number, limit: t.number })

// const Operators = opt({
//   gt: t.number,
//   lt: t.number,
//   gte: t.number,
//   lte: t.number,
//   ne: NumOrStr,
//   like: t.string,
// })

export interface Query<C> {
  readonly filter?: Partial<C>
  readonly range?: t.TypeOf<typeof Page> | t.TypeOf<typeof Slice>
  readonly asc?: ReadonlyArray<keyof C>
  readonly desc?: ReadonlyArray<keyof C>
  readonly fullText?: string
  //  readonly operators?: t.RecordC<t.KeyofC<C>, typeof Operators>
  readonly embed?: keyof C
}

function querySpec(codec: HasProps) {
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
  query: Query<t.TypeOf<typeof codec>>,
): string {
  cast(querySpec(codec), query)

  const { range } = query
  const page = Page.is(range)
    ? { _page: range.current, _limit: range.limit }
    : {}

  const slice = Slice.is(range)
    ? {
        _start: range.start,
        _end: range.end,
        _limit: range.limit,
      }
    : {}

  const { asc, desc } = query
  const _sort = (asc || []).concat(desc || [])

  const _order = (asc || [])
    .map(_ => 'asc')
    .concat((desc || []).map(_ => 'desc'))

  const { filter, fullText: q, embed } = query
  return stringify(
    { ...filter, ...page, ...slice, _sort, _order, q, embed },
    { arrayFormat: 'comma' },
  )
}

export function toQuery<C extends HasProps>(
  codec: C,
  query: Query<t.TypeOf<typeof codec>>,
): string {
  cast(querySpec(codec), query)

  const { asc, desc } = query

  const { filter, fullText: q, embed } = query
  return stringify(
    { ...filter, ...(query.range || {}), asc, desc, q, embed },
    { arrayFormat: 'comma' },
  )
}
