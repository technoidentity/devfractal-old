import { req } from './iotsUtils'
import { number, TypeOf } from 'io-ts'
import { typeWarning } from '../dist'
import { fn } from './fn'

export * from './assertions'
export * from './checked'
export * from './coercions'
export * from './common'
export * from './empty'
export * from './fake'
export * from './fn'
export * from './iotsUtils'
export * from './stringUtils'
export * from './tcombFromRT'
export * from './tcombFromValue'
export * from './tcombRefinements'
export * from './types'

console.log('hello')

const Point = req({
  x: number,
  y: number,
  distance: fn(),
})

type Point = TypeOf<typeof Point>

// tslint:disable-next-line: no-empty
console.log(typeWarning(Point, { x: 1, y: 2, distance: (a: number) => {} }))
