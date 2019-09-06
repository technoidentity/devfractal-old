import {
  array,
  boolean,
  Int,
  keyof,
  number,
  partial,
  readonly,
  readonlyArray,
  string,
  type,
} from 'technoidentity-spec'
import { date } from 'technoidentity-spec'
import { DateFromISOString } from 'technoidentity-spec'
import { defaultOptions, fake } from './fake'

describe('fake from spec', () => {
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
            int: Int,
            date,
            isoDate: DateFromISOString,
            enum: keyof({ foo: 0, bar: 0 }),
            array: readonlyArray(string),
            object: partial({ x: number, y: number }),
            ro: readonly(
              type({
                fizz: array(readonly(partial({ buzz: boolean }))),
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
        int: expect.any(Number),
        date: expect.any(Date),
        isoDate: expect.any(Date),
        enum: expect.stringMatching(/foo|bar/),
        array: expect.arrayContaining([expect.any(String)]),
        object: expect.objectContaining({
          x: expect.any(Number),
          y: expect.any(Number),
        }),
        ro: expect.objectContaining({
          fizz: expect.arrayContaining([
            expect.objectContaining({ buzz: expect.any(Boolean) }),
          ]),
        }),
      }),
    )
  })
})
