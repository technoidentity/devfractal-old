import { number, TypeOf } from 'io-ts'
import { fn, props, typeInvariant } from 'technoidentity-utils'

const Point = props({ distance: fn<() => number>() }, { x: number, y: number })

type Point = TypeOf<typeof Point>

console.log(() => typeInvariant(Point, { x: 1, y: 2 }))
console.log(() => typeInvariant(Point, { x: 1, y: 2, distance: 3 }))
// tslint:disable-next-line: no-empty
console.log(() => typeInvariant(Point, { x: 1, y: 2, distance: () => {} }))
