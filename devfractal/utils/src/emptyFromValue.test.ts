import { today } from './common'
import { emptyFromValue } from './emptyFromValue'

// tslint:disable no-null-keyword

it('emptyFromValue', () => {
  expect(
    emptyFromValue({
      number: 0.5,
      integer: 10,
      string: 'hello',
      boolean: true,
      date: today(),
      null: null,
      array: [1, 3, 4],
      anyArray: [1, 'hello', false],
      object: { x: 1, y: 2, z: { x: 'hello', y: ['world', 'universe'] } },
    }),
  ).toMatchInlineSnapshot(`
    Object {
      "anyArray": Array [],
      "array": Array [],
      "boolean": false,
      "date": Object {},
      "integer": 0,
      "null": null,
      "number": 0,
      "object": Object {
        "x": 0,
        "y": 0,
        "z": Object {
          "x": "",
          "y": Array [],
        },
      },
      "string": "",
    }
  `)
})
