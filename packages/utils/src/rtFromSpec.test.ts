import * as t from 'io-ts'
import { date } from 'io-ts-types/lib/date'
import { DateFromISOString } from 'io-ts-types/lib/DateFromISOString'
import { rtFromSpec } from './rtFromSpec'

it('rtFromSpec', () => {
  expect(
    rtFromSpec(
      t.type({
        fizz: t.type({ x: t.number, y: t.number }),
        buzz: t.array(t.boolean),
      }),
    ).displayName,
  ).toMatchInlineSnapshot(
    `"{ fizz: { x: number, y: number }, buzz: Array<boolean> }"`,
  )

  expect(
    rtFromSpec(
      t.type({
        fizz: t.partial({ x: t.string, y: t.boolean, z: date }),
        buzz: t.array(t.Int),
      }),
    ).displayName,
  ).toMatchInlineSnapshot(
    `"{ fizz: Partial<{ x: string, y: boolean, z: Date }>, buzz: Array<Int> }"`,
  )

  expect(
    rtFromSpec(
      t.type({
        intersection: t.intersection([
          t.type({ x: t.number }),
          t.type({ y: t.number }),
        ]),
        union: t.union([t.Int, t.string]),
        tuple: t.tuple([t.Int, t.string]),
        date,
        isoDate: DateFromISOString,
        enum: t.keyof({ foo: 0, bar: 0 }),
        array: t.readonlyArray(t.boolean),
        undefined: t.undefined,
        null: t.null,
        strict: t.strict({ x: t.number, y: t.Int }),
        type: t.type({
          fizz: t.array(t.exact(t.type({ buzz: t.boolean }))),
        }),
      }),
    ).displayName,
  ).toMatchInlineSnapshot(
    `"{ intersection: ({ x: number } & { y: number }), union: (Int | string), tuple: [Int, string], date: Date, isoDate: DateFromISOString, enum: \\"foo\\" | \\"bar\\", array: ReadonlyArray<boolean>, undefined: undefined, null: null, strict: {| x: number, y: Int |}, type: { fizz: Array<{| buzz: boolean |}> } }"`,
  )
})
