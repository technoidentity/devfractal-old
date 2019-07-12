import {
  boolean,
  keyof,
  number,
  readonly,
  readonlyArray,
  string,
  type,
} from 'io-ts'
import { date } from 'io-ts-types/lib/date'
import { emptyFromType } from 'technoidentity-utils'

console.log(
  emptyFromType(
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
        o: readonly(
          type({
            fizz: readonlyArray(readonly(type({ buzz: boolean }))),
          }),
        ),
      }),
    ),
  ),
)
