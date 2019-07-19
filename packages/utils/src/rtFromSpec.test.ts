import * as iots from 'io-ts'
import { date } from 'io-ts-types/lib/date'
import { rtFromSpec } from './rtFromSpec'

it.skip('rtFromSpec', () => {
  expect(
    rtFromSpec(
      iots.type({
        fizz: iots.type({ x: iots.number, y: iots.number }),
        buzz: iots.array(iots.boolean),
      }),
    ),
  ).toMatchInlineSnapshot(`[Function]`)

  expect(
    rtFromSpec(
      iots.type({
        fizz: iots.partial({ x: iots.string, y: iots.boolean, z: date }),
        buzz: iots.array(iots.Int),
      }),
    ),
  ).toMatchInlineSnapshot(`[Function]`)

  expect(
    rtFromSpec(
      iots.type({
        intersection: iots.intersection([
          iots.type({ x: iots.number }),
          iots.type({ y: iots.number }),
        ]),
        union: iots.union([iots.Int, iots.string]),
        tuple: iots.tuple([iots.Int, iots.string]),
        date,
        enum: iots.keyof({ foo: 0, bar: 0 }),
        array: iots.readonlyArray(iots.boolean),
        undefined: iots.undefined,
        null: iots.null,
        strict: iots.strict({ x: iots.number, y: iots.Int }),
        type: iots.type({
          fizz: iots.array(iots.exact(iots.type({ buzz: iots.boolean }))),
        }),
      }),
    ),
  ).toMatchInlineSnapshot(`[Function]`)
})
