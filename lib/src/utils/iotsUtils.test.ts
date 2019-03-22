import {
  boolean,
  keyof,
  number,
  readonly,
  readonlyArray,
  string,
  type,
} from 'io-ts'
import { emptyFromType } from './internal'

test('emptyFromType', () => {
  expect(
    emptyFromType(
      readonly(
        type({
          i: number,
          s: string,
          b: boolean,
          // d: date,
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
  ).toMatchInlineSnapshot(`
Object {
  "a": Array [],
  "b": false,
  "e": "foo",
  "i": 0,
  "o": Object {
    "fizz": Array [],
  },
  "s": "",
}
`)
})
