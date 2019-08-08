import * as t from 'io-ts'
import { opt, req } from 'technoidentity-utils'
import { Query, toJSONServerQuery } from './query'

// tslint:disable typedef

it('toJSONServerQuery', () => {
  const User = req({
    name: t.string,
    age: t.number,
    address: opt({ street: t.string, city: t.string }),
  })

  type User = t.TypeOf<typeof User>

  const query: Query<User> = {
    filter: { name: 'foo', age: 20 },
    asc: ['name'],
    desc: ['age'],
    fullText: 'p',
    range: { current: 0, limit: 10 },
    embed: 'address',
  }

  expect(toJSONServerQuery(User, query)).toMatchInlineSnapshot(
    `"_limit=10&_order=asc,desc&_page=0&_sort=name,age&age=20&embed=address&name=foo&q=p"`,
  )

  const query2: Query<User> = {
    asc: ['name', 'age'],
    range: { start: 0, end: 10 },
  }

  expect(toJSONServerQuery(User, query2)).toMatchInlineSnapshot(
    `"_end=10&_order=asc,asc&_sort=name,age&_start=0"`,
  )
})
