import * as t from 'io-ts'
import { stringify } from 'query-string'
import { cast, opt } from 'technoidentity-utils'

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

export type ManyQuerySpec<C extends t.Props> = t.ReadonlyC<
  t.PartialC<{
    readonly filter: t.PartialC<C>
    // tslint:disable-next-line: readonly-array
    readonly range: t.UnionC<[typeof Page, typeof Slice]>
    readonly asc: t.ReadonlyArrayC<t.KeyofC<C>>
    readonly desc: t.ReadonlyArrayC<t.KeyofC<C>>
    readonly fullText: t.StringC
    // readonly operators: t.RecordC<t.KeyofC<C>, typeof Operators>
    readonly embed: t.KeyofC<C>
  }>
>

export function manyQuery<C extends t.Props>(props: C): ManyQuerySpec<C> {
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

export type ManyQuery<C extends t.Props> = t.TypeOf<ManyQuerySpec<C>>

export function toJSONServerQuery<C extends t.Props>(
  codec: ManyQuerySpec<C>,
  query: ManyQuery<C>,
): string {
  cast(codec, query)

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
