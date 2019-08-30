import {
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
} from 'technoidentity-spec'
import { date } from 'technoidentity-spec'
import { empty } from 'technoidentity-utils'

console.log(
  empty(
    readonly(
      type({
        i: number,
        s: string,
        b: boolean,
        d: date,
        a: readonlyArray(boolean),
        e: keyof({
          foo: 1,
          bar: 1,
        }),
        t: tuple([string, number]),
        in: intersection([string, number]),
        u: union([string, number]),
        o: readonly(
          type({
            fizz: readonlyArray(readonly(type({ buzz: boolean }))),
          }),
        ),
      }),
    ),
  ),
)
