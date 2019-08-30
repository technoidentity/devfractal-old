import { number, TypeOf } from 'technoidentity-spec'
import { cast, fn, props } from 'technoidentity-utils'

// tslint:disable no-empty

const Point = props({ distance: fn<() => number>() }, { x: number, y: number })

type Point = TypeOf<typeof Point>

console.log(() => cast(Point, { x: 1, y: 2 }))

console.log(() => cast(Point, { x: 1, y: 2, distance: () => {} }))
