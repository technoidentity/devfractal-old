import * as t from 'tcomb'
import { emptyFromRT as empty } from './emptyFromRT'

// tslint:disable typedef

describe('empty from rt', () => {
  test('primitive values', () => {
    expect(empty(t.Number)).toBe(0)
    expect(empty(t.Any)).toBe('')
    expect(empty(t.String)).toBe('')
    expect(empty(t.Boolean)).toBe(false)
    expect(empty(t.Date)).toEqual(expect.any(Date))
    expect(empty(t.RegExp)).toEqual(expect.any(RegExp))
    expect(empty(t.Nil)).toBeUndefined()
    expect(empty(t.Error)).toBeInstanceOf(Error)
    expect(empty(t.Object)).toEqual({})
    expect(empty(t.Integer)).toEqual(0)
  })

  test('enum', () => {
    expect(empty(t.enums({ red: 1, blue: 2, green: 3 }))).toEqual('red')
    expect(empty(t.enums.of('red blue green'))).toEqual('red')
  })

  test('array', () => {
    expect(empty(t.list(t.Number))).toEqual([])
    expect(empty(t.Array)).toEqual([])
  })

  test('object', () => {
    const T = t.struct({ x: t.String, y: t.Number })
    const v = empty(T)
    expect(v).toBeInstanceOf(T)
    expect(v).toEqual({ x: '', y: 0 })

    expect(empty(t.dict(t.Number, t.String))).toEqual({})

    expect(empty(t.interface({ x: t.String, y: t.Number }))).toEqual({
      x: '',
      y: 0,
    })
  })

  test('intersection', () => {
    expect(
      empty(
        t.intersection([
          t.interface({ x: t.Number }),
          t.interface({ y: t.String }),
        ]),
      ),
    ).toEqual({
      x: 0,
      y: '',
    })
  })

  test('union', () => {
    expect(
      empty(
        t.union([t.interface({ x: t.Number }), t.interface({ y: t.String })]),
      ),
    ).toEqual({
      x: 0,
    })
  })

  test('maybe', () => {
    expect(empty(t.maybe(t.Number))).toEqual(0)
  })

  test('tuple', () => {
    expect(empty(t.tuple([t.Boolean, t.Number]))).toEqual([false, 0])
  })

  test('nested object and array', () => {
    expect(
      empty(
        t.struct({
          enum: t.enums({ foo: 0, bar: 1 }),
          array: t.Array,
          list: t.list(t.Any),
          any: t.Any,
          function: t.Function,
          regexp: t.RegExp,
          error: t.Error,
          object: t.Object,
          date: t.Date,
          dict: t.dict(t.Number, t.String),
          interface: t.interface({ a: t.Boolean, b: t.Nil }),
          union: t.union([t.Number, t.String]),
          tuple: t.tuple([t.Number, t.String]),
          maybe: t.maybe(t.Number),
          intersection: t.intersection([
            t.interface({ x: t.Integer }),
            t.interface({ y: t.String, z: t.Number }),
          ]),
        }),
      ),
    ).toMatchInlineSnapshot(
      { date: expect.any(Date) },
      `
    Object {
      "any": "",
      "array": Array [],
      "date": Any<Date>,
      "dict": Object {},
      "enum": "foo",
      "error": [Error: empty error],
      "function": [Function],
      "interface": Object {
        "a": false,
      },
      "intersection": Object {
        "x": 0,
        "y": "",
        "z": 0,
      },
      "list": Array [],
      "maybe": 0,
      "object": Object {},
      "regexp": /\\(\\?:\\)/,
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
