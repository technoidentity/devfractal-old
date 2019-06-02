import {
  boolean,
  keyof,
  number,
  readonly,
  readonlyArray,
  string,
  type,
} from 'io-ts'
import { date } from 'io-ts-types'
import { empty } from '../lib'

test('emptyFromType', () => {
  expect(
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
          o: readonly(
            type({
              fizz: readonlyArray(readonly(type({ buzz: boolean }))),
            }),
          ),
        }),
      ),
    ),
  ).toMatchInlineSnapshot(
    { d: expect.any(Date) },
    `
    Object {
      "a": Array [],
      "b": false,
      "d": Any<Date>,
      "e": Array [
        "foo",
        "bar",
      ],
      "i": 0,
      "o": Object {
        "fizz": Array [],
      },
      "s": "",
    }
  `,
  )
})
