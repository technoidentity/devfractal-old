import {
  array,
  boolean,
  date,
  DateFromISOString,
  exact,
  Int,
  intersection,
  keyof,
  number,
  partial,
  readonlyArray,
  strict,
  string,
  tuple,
  type,
  undefined,
  union,
} from 'technoidentity-spec'
import { rtFromSpec } from './rtFromSpec'

it('rtFromSpec', () => {
  expect(
    rtFromSpec(
      type({
        fizz: type({ x: number, y: number }),
        buzz: array(boolean),
      }),
    ).displayName,
  ).toMatchInlineSnapshot(
    `"{ fizz: { x: number, y: number }, buzz: Array<boolean> }"`,
  )

  expect(
    rtFromSpec(
      type({
        fizz: partial({ x: string, y: boolean, z: date }),
        buzz: array(Int),
      }),
    ).displayName,
  ).toMatchInlineSnapshot(
    `"{ fizz: Partial<{ x: string, y: boolean, z: Date }>, buzz: Array<Int> }"`,
  )

  expect(
    rtFromSpec(
      type({
        intersection: intersection([type({ x: number }), type({ y: number })]),
        union: union([Int, string]),
        tuple: tuple([Int, string]),
        date,
        isoDate: DateFromISOString,
        enum: keyof({ foo: 0, bar: 0 }),
        array: readonlyArray(boolean),
        un: undefined,
        strict: strict({ x: number, y: Int }),
        type: type({
          fizz: array(exact(type({ buzz: boolean }))),
        }),
      }),
    ).displayName,
  ).toMatchInlineSnapshot(
    `"{ intersection: ({ x: number } & { y: number }), union: (Int | string), tuple: [Int, string], date: Date, isoDate: DateFromISOString, enum: \\"foo\\" | \\"bar\\", array: ReadonlyArray<boolean>, un: undefined, strict: {| x: number, y: Int |}, type: { fizz: Array<{| buzz: boolean |}> } }"`,
  )
})
