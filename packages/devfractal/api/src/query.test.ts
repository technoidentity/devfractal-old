import * as t from 'io-ts'
import { opt, req } from 'technoidentity-utils'
import { manyQuery, ManyQuerySpec, toJSONServerQuery } from './query'

// tslint:disable typedef

export interface ManyQuery<C extends t.Props>
  extends t.TypeOf<ManyQuerySpec<C>> {}

it('toJSONServerQuery', () => {
  const User = req({
    name: t.string,
    age: t.number,
    address: opt({ street: t.string, city: t.string }),
  })

  const userQuery: ManyQuerySpec<typeof User.type.props> = manyQuery(
    User.type.props,
  )

  const query: ManyQuery<typeof User.type.props> = {
    filter: { name: 'foo', age: 20 },
    asc: ['name'],
    desc: ['age'],
    fullText: 'p',
    range: { current: 0, limit: 10 },
    embed: 'address',
  }

  expect(toJSONServerQuery(userQuery, query)).toMatchInlineSnapshot(
    `"_limit=10&_order=asc,desc&_page=0&_sort=name,age&age=20&embed=address&name=foo&q=p"`,
  )

  const query2: ManyQuery<typeof User.type.props> = {
    asc: ['name', 'age'],
    range: { start: 0, end: 10 },
  }

  expect(toJSONServerQuery(userQuery, query2)).toMatchInlineSnapshot(
    `"_end=10&_order=asc,asc&_sort=name,age&_start=0"`,
  )
})
