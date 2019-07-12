import {
  array,
  boolean,
  Int,
  keyof,
  number,
  readonly,
  readonlyArray,
  string,
  type,
} from 'io-ts'
import { date } from 'io-ts-types/lib/date'
import { emptyFromType } from './emptyFromType'

test('primitive values', () => {
  expect(emptyFromType(number)).toBe(0)
  expect(emptyFromType(Int)).toBe(0)
  expect(emptyFromType(string)).toBe('')
  expect(emptyFromType(boolean)).toBe(false)
  expect(emptyFromType(date)).toEqual(expect.any(Date))
  expect(emptyFromType(keyof({ red: 1, blue: 2, green: 3 }))).toEqual('red')
})

test('array', () => {
  expect(emptyFromType(array(number))).toEqual([])
  expect(emptyFromType(readonlyArray(number))).toEqual([])
})

test('object', () => {
  expect(emptyFromType(type({ x: string, y: number }))).toEqual({
    x: '',
    y: 0,
  })
  expect(emptyFromType(readonly(type({ x: string, y: number })))).toEqual({
    x: '',
    y: 0,
  })
})

test('nested object and array', () => {
  expect(
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
  ).toMatchInlineSnapshot(
    { d: expect.any(Date) },
    `
    Object {
      "a": Array [],
      "b": false,
      "d": Any<Date>,
      "e": "foo",
      "i": 0,
      "o": Object {
        "fizz": Array [],
      },
      "s": "",
    }
  `,
  )
})
