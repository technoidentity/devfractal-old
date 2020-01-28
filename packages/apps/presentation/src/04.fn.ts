import { number, TypeOf } from '@stp/utils'
import { cast, fn, obj } from '@stp/utils'

// tslint:disable no-empty

const Point = obj({ distance: fn<() => number>() }, { x: number, y: number })

type Point = TypeOf<typeof Point>

console.log(() => cast(Point, { x: 1, y: 2 }))

console.log(() => cast(Point, { x: 1, y: 2, distance: () => {} }))
