import { fake } from 'technoidentity-dev-utils'
import {
  array,
  boolean,
  date,
  keyof,
  number,
  readonly,
  readonlyArray,
  string,
  tuple,
  type,
  union,
} from 'technoidentity-utils'

console.log(
  fake(
    readonly(
      type({
        d: date,
        e: keyof({ foo: 0, bar: 0 }),
        a: readonlyArray(string),
        o: type({ x: number, y: number }),
        t: tuple([string, number]),
        // i: intersection([string, number]),
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
