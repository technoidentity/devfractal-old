import {
  array,
  boolean,
  exact,
  Int,
  intersection,
  keyof,
  literal,
  nullType,
  number,
  partial,
  readonly,
  readonlyArray,
  strict,
  string,
  tuple,
  type,
  union,
} from 'io-ts'
import { date } from 'io-ts-types/lib/date'
import { empty } from './emptyFromType'

test('primitive values', () => {
  expect(empty(number)).toBe(0)
  expect(empty(Int)).toBe(0)
  expect(empty(string)).toBe('')
  expect(empty(boolean)).toBe(false)
  expect(empty(date)).toEqual(expect.any(Date))
  expect(empty(keyof({ red: 1, blue: 2, green: 3 }))).toEqual('red')
})

test('array', () => {
  expect(empty(array(number))).toEqual([])
  expect(empty(readonlyArray(number))).toEqual([])
})

test('object', () => {
  expect(empty(type({ x: string, y: number }))).toEqual({
    x: '',
    y: 0,
  })
  expect(empty(readonly(type({ x: string, y: number })))).toEqual({
    x: '',
    y: 0,
  })
})

test('nested object and array', () => {
  expect(
    empty(
      readonly(
        partial({
          a: readonlyArray(boolean),
          b: boolean,
          d: date,
          e: keyof({ foo: 1, bar: 1 }),
          ex: readonly(exact(type({ a: number, b: string }))),
          i: Int,
          o: readonly(
            strict({
              buzz: tuple([number, string]),
              fizz: readonlyArray(readonly(type({ buzz: boolean }))),
              fizzBuzz: intersection([
                type({ x: number }),
                strict({ y: literal('hello'), z: nullType }),
              ]),
            }),
          ),
          s: string,
          u: union([number, string]),
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
      "e": "foo",
      "ex": Object {
        "a": 0,
        "b": "",
      },
      "i": 0,
      "o": Object {
        "buzz": Array [
          0,
          "",
        ],
        "fizz": Array [],
        "fizzBuzz": Object {
          "x": 0,
          "y": "hello",
          "z": null,
        },
      },
      "s": "",
      "u": 0,
    }
  `,
  )
})
