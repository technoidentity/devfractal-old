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
import { date } from 'io-ts-types'
import { empty } from '../lib'

test('primitive values', () => {
  expect(empty(number)).toBe(0)
  expect(empty(Int)).toBe(0)
  expect(empty(string)).toBe('')
  expect(empty(boolean)).toBe(false)
  expect(empty(date)).toEqual(expect.any(Date))
  expect(empty(keyof({ red: 1, blue: 2, green: 3 }))).toEqual([
    'red',
    'blue',
    'green',
  ])
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
