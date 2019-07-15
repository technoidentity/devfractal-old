import { number, TypeOf } from 'io-ts'
import { fn, props, specInvariant } from 'technoidentity-utils'

// tslint:disable no-empty

const Point = props({ distance: fn<() => number>() }, { x: number, y: number })

type Point = TypeOf<typeof Point>

console.log(() => specInvariant(Point, { x: 1, y: 2 }))

console.log(() => specInvariant(Point, { x: 1, y: 2, distance: () => {} }))
