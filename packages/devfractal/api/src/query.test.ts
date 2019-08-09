import * as t from 'io-ts'
import { opt, props } from 'technoidentity-utils'
import { Query, toJSONServerQuery, toQuery } from './query'

// tslint:disable typedef

const User = props(
  {
    id: t.number,
    name: t.string,
  },
  {
    age: t.number,
    address: opt({ street: t.string, city: t.string }),
  },
)

type User = t.TypeOf<typeof User>

describe('query', () => {
  const query: Query<User> = {
    filter: { name: 'foo', age: 20 },
    asc: ['name'],
    desc: ['age'],
    fullText: 'p',
    range: { current: 0, limit: 10 },
    embed: 'address',
  }

  const query2: Query<User> = {
    asc: ['name', 'age'],
    range: { start: 0, end: 10 },
  }

  it('toJSONServerQuery', () => {
    expect(toJSONServerQuery(User, query)).toMatchInlineSnapshot(
      `"_limit=10&_order=asc,desc&_page=0&_sort=name,age&age=20&embed=address&name=foo&q=p"`,
    )

    expect(toJSONServerQuery(User, query2)).toMatchInlineSnapshot(
      `"_end=10&_order=asc,asc&_sort=name,age&_start=0"`,
    )
  })

  it('toQuery', () => {
    expect(toQuery(User, query)).toMatchInlineSnapshot(
      `"age=20&asc=name&current=0&desc=age&embed=address&limit=10&name=foo&q=p"`,
    )

    expect(toQuery(User, query2)).toMatchInlineSnapshot(
      `"asc=name,age&end=10&start=0"`,
    )
  })
})
