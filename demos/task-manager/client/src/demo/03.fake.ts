import {
  array,
  boolean,
  keyof,
  number,
  readonly,
  readonlyArray,
  string,
  type,
} from 'io-ts'
import { date } from 'io-ts-types'
import { defaultOptions, fake } from 'technoidentity-utils'

console.log(
  fake(
    readonly(
      type({
        d: date,
        e: keyof({ foo: 0, bar: 0 }),
        a: readonlyArray(string),
        o: type({ x: number, y: number }),
        o2: readonly(
          type({
            fizz: array(readonly(type({ buzz: boolean }))),
          }),
        ),
      }),
    ),
    {
      ...defaultOptions,
      array: { minLength: 1, maxLength: 6 },
    },
  ),
)