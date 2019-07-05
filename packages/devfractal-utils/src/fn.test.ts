import { number, TypeOf } from 'io-ts'
import { fn } from './fn'
import { props, typeInvariant } from './iotsUtils'

// tslint:disable typedef no-empty

test('fn', () => {
  const Point = props(
    { distance: fn<() => number>() },
    { x: number, y: number },
  )

  type Point = TypeOf<typeof Point>

  expect(() => typeInvariant(Point, { x: 1, y: 2 })).not.toThrowError()
  expect(() => typeInvariant(Point, { x: 1, y: 2, distance: 3 })).toThrowError()
  expect(() =>
    typeInvariant(Point, { x: 1, y: 2, distance: () => {} }),
  ).not.toThrowError()
})
