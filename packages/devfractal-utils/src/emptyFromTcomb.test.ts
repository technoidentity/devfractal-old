import * as t from 'tcomb'
import { emptyFromTcomb as empty } from './emptyFromTcomb'

test('primitive values', () => {
  expect(empty(t.Number)).toBe(0)
  expect(empty(t.Integer)).toBe(0)
  expect(empty(t.String)).toBe('')
  expect(empty(t.Boolean)).toBe(false)
  expect(empty(t.Date)).toEqual(expect.any(Date))
  expect(empty(t.enums({ red: 1, blue: 2, green: 3 }))).toEqual('red')
})

test('array', () => {
  expect(empty(t.list(t.Number))).toEqual([])
  expect(empty(t.Array)).toEqual([])
})

test('object', () => {
  expect(empty(t.interface({ x: t.String, y: t.Number }))).toEqual({
    x: '',
    y: 0,
  })
  expect(empty(t.interface({ x: t.String, y: t.Number }))).toEqual({
    x: '',
    y: 0,
  })
})

test('nested object and array', () => {
  expect(
    empty(
      t.interface({
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
          t.struct({ x: t.Integer }),
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
      "tuple": 0,
      "union": 0,
    }
  `,
  )
})
