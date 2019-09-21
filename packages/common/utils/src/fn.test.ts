import { number, TypeOf } from 'io-ts'
import { fn } from './fn'
import { cast } from './iotsUtils'
import { obj } from './obj'
// tslint:disable typedef no-empty

test('fn', () => {
  const Point = obj({ distance: fn<() => number>() }, { x: number, y: number })

  type Point = TypeOf<typeof Point>

  expect(() => cast(Point, { x: 1, y: 2 })).not.toThrowError()
  expect(() => cast(Point, { x: 1, y: 2, distance: 3 })).toThrowError()
  expect(() =>
    cast(Point, { x: 1, y: 2, distance: () => {} }),
  ).not.toThrowError()
})
