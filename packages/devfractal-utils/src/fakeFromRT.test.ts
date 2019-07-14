import * as t from 'tcomb'
import { defaultOptions } from './fake'
import { fakeFromRT as fake } from './fakeFromRT'

describe('fakeFromRT', () => {
  test('primitive values', () => {
    expect(fake(t.Number)).toEqual(expect.any(Number))
    expect(fake(t.String)).toEqual(expect.any(String))
    expect(fake(t.Boolean)).toEqual(expect.any(Boolean))
    expect(fake(t.Date)).toEqual(expect.any(Date))
    expect(fake(t.enums({ red: 1, blue: 2, green: 3 }))).toMatch(
      /red|blue|green/,
    )
    expect(Number.isInteger(fake(t.Integer))).toBe(true)
  })

  test('array', () => {
    expect(fake(t.list(t.Number))).toEqual(expect.any(Array))
    expect(fake(t.Array)).toEqual(expect.any(Array))
  })

  test('array with options', () => {
    expect(
      fake(t.list(t.Number), {
        ...defaultOptions,
        array: { minLength: 1, maxLength: 6 },
      }),
    ).toEqual(expect.arrayContaining([expect.any(Number)]))
  })

  test('object', () => {
    expect(fake(t.interface({ x: t.String, y: t.Number }))).toEqual(
      expect.objectContaining({
        x: expect.any(String),
        y: expect.any(Number),
      }),
    )
    expect(fake(t.interface({ x: t.String, y: t.Number }))).toEqual(
      expect.objectContaining({
        x: expect.any(String),
        y: expect.any(Number),
      }),
    )
  })

  test('nested object and array', () => {
    expect(
      fake(
        t.interface({
          d: t.Date,
          e: t.enums({ foo: 0, bar: 0 }),
          a: t.list(t.String),
          o: t.struct({ x: t.Number, y: t.Number }),
          o2: t.interface({
            fizz: t.list(t.interface({ buzz: t.Boolean })),
          }),
        }),
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
})
