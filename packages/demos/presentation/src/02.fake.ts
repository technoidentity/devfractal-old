import {
  array,
  boolean,
  intersection,
  keyof,
  number,
  readonly,
  readonlyArray,
  string,
  tuple,
  type,
  union,
} from 'io-ts'
import { date } from 'io-ts-types/lib/date'
import { fake } from 'technoidentity-dev-utils'

console.log(
  fake(
    readonly(
      type({
        d: date,
        e: keyof({ foo: 0, bar: 0 }),
        a: readonlyArray(string),
        o: type({ x: number, y: number }),
        t: tuple([string, number]),
        i: intersection([string, number]),
        u: union([string, number]),
        o2: readonly(
          type({
            fizz: array(readonly(type({ buzz: boolean }))),
          }),
        ),
      }),
    ),
  ),
)
