import { number, TypeOf } from 'technoidentity-spec'
import { fn } from './fn'
import { cast, props } from './iotsUtils'

// tslint:disable typedef no-empty

test('fn', () => {
  const Point = props(
    { distance: fn<() => number>() },
    { x: number, y: number },
  )

  type Point = TypeOf<typeof Point>

  expect(() => cast(Point, { x: 1, y: 2 })).not.toThrowError()
  expect(() => cast(Point, { x: 1, y: 2, distance: 3 })).toThrowError()
  expect(() =>
    cast(Point, { x: 1, y: 2, distance: () => {} }),
  ).not.toThrowError()
})
