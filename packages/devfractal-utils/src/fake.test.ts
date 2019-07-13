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
import { defaultOptions, fake } from './fake'

test('primitive values', () => {
  expect(fake(number)).toEqual(expect.any(Number))
  expect(fake(string)).toEqual(expect.any(String))
  expect(fake(boolean)).toEqual(expect.any(Boolean))
  expect(fake(date)).toEqual(expect.any(Date))
  expect(fake(keyof({ red: 1, blue: 2, green: 3 }))).toMatch(/red|blue|green/)
  expect(Number.isInteger(fake(Int))).toBeTruthy()
})

test('array', () => {
  expect(fake(array(number))).toEqual(expect.any(Array))
  expect(fake(readonlyArray(number))).toEqual(expect.any(Array))
})

test('array with options', () => {
  expect(
    fake(array(number), {
      ...defaultOptions,
      array: { minLength: 1, maxLength: 6 },
    }),
  ).toEqual(expect.arrayContaining([expect.any(Number)]))
  expect(
    fake(readonlyArray(number), {
      ...defaultOptions,
      array: { minLength: 1, maxLength: 6 },
    }),
  ).toEqual(expect.arrayContaining([expect.any(Number)]))
  expect(
    fake(readonlyArray(number), {
      ...defaultOptions,
      array: { minLength: 1, maxLength: 1 },
    }),
  ).toHaveLength(1)
})

test('object', () => {
  expect(fake(type({ x: string, y: number }))).toEqual(
    expect.objectContaining({
      x: expect.any(String),
      y: expect.any(Number),
    }),
  )
  expect(fake(readonly(type({ x: string, y: number })))).toEqual(
    expect.objectContaining({
      x: expect.any(String),
      y: expect.any(Number),
    }),
  )
})

test('nested object and array', () => {
  expect(
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
  ).toEqual(
    expect.objectContaining({
      d: expect.any(Date),
      e: expect.stringMatching(/foo|bar/),
      a: expect.arrayContaining([expect.any(String)]),
      o: expect.objectContaining({
        x: expect.any(Number),
        y: expect.any(Number),
      }),
      o2: expect.objectContaining({
        fizz: expect.arrayContaining([
          expect.objectContaining({ buzz: expect.any(Boolean) }),
        ]),
      }),
    }),
  )
})
