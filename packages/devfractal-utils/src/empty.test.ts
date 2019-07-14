import {
  any,
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
import { empty } from './empty'

// tslint:disable no-null-keyword typedef

describe('empty from spec', () => {
  test('primitive values', () => {
    expect(empty(number)).toBe(0)
    expect(empty(Int)).toBe(0)
    expect(empty(string)).toBe('')
    expect(empty(boolean)).toBe(false)
    expect(empty(date)).toEqual(expect.any(Date))
  })

  test('enum', () => {
    expect(empty(keyof({ red: 1, blue: 2, green: 3 }))).toEqual('red')
  })

  test('array', () => {
    expect(empty(array(number))).toEqual([])
    expect(empty(readonlyArray(number))).toEqual([])
  })

  test('union', () => {
    expect(empty(union([string, boolean]))).toEqual('')
    expect(empty(union([boolean, string]))).toEqual(false)
  })

  test('tuple', () => {
    expect(
      empty(tuple([string, boolean, type({ x: number, y: Int })])),
    ).toEqual(['', false, { x: 0, y: 0 }])
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

    expect(empty(partial({ int: Int, number }))).toEqual({ int: 0, number: 0 })
    expect(empty(strict({ int: Int, number }))).toEqual({ int: 0, number: 0 })
    expect(empty(exact(type({ int: Int, number })))).toEqual({
      int: 0,
      number: 0,
    })
  })

  test('intersection', () => {
    expect(
      empty(
        intersection([
          type({ x: number }),
          strict({ y: literal('hello'), z: nullType }),
        ]),
      ),
    ).toEqual({ x: 0, y: 'hello', z: null })
  })

  test('nested object and array', () => {
    expect(
      empty(
        readonly(
          partial({
            int: Int,
            number,
            string,
            boolean,
            date,
            any,
            array: readonlyArray(boolean),
            enum: keyof({ foo: 1, bar: 1 }),
            exact: exact(type({ a: number, b: string })),
            readonly: readonly(type({ x: number })),
            readonlyArray: readonlyArray(type({ x: number })),
            interface: readonly(
              strict({
                fizz: readonlyArray(readonly(type({ buzz: boolean }))),
                buzz: array(type({ buzz: boolean })),
              }),
            ),
            intersection: intersection([
              type({ x: number }),
              strict({ y: literal('hello'), z: nullType }),
            ]),
            union: union([number, string]),
            tuple: tuple([number, string]),
          }),
        ),
      ),
    ).toMatchInlineSnapshot(
      { date: expect.any(Date) },
      `
    Object {
      "any": "",
      "array": Array [],
      "boolean": false,
      "date": Any<Date>,
      "enum": "foo",
      "exact": Object {
        "a": 0,
        "b": "",
      },
      "int": 0,
      "interface": Object {
        "buzz": Array [],
        "fizz": Array [],
      },
      "intersection": Object {
        "x": 0,
        "y": "hello",
        "z": null,
      },
      "number": 0,
      "readonly": Object {
        "x": 0,
      },
      "readonlyArray": Array [],
      "string": "",
      "tuple": Array [
        0,
        "",
      ],
      "union": 0,
    }
  `,
    )
  })
})
