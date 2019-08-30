import * as t from 'technoidentity-spec'
import { date } from 'technoidentity-spec'
import { schemaFromRT } from './iotsToMongoose'

test('io-ts type to mongoose schema', () => {
  expect(
    schemaFromRT(
      t.type({
        fizz: t.type({ x: t.number, y: t.number }),
        buzz: t.array(t.boolean),
      }),
    ),
  ).toMatchInlineSnapshot(`
    Object {
      "buzz": Array [
        Object {
          "type": [Function],
        },
      ],
      "fizz": Object {
        "x": Object {
          "type": [Function],
        },
        "y": Object {
          "type": [Function],
        },
      },
    }
  `)

  expect(
    schemaFromRT(
      t.type({
        fizz: t.type({ x: t.string, y: t.boolean, z: date }),
        buzz: t.array(t.Int),
      }),
    ),
  ).toMatchInlineSnapshot(`
    Object {
      "buzz": Array [
        Object {
          "type": [Function],
        },
      ],
      "fizz": Object {
        "x": Object {
          "type": [Function],
        },
        "y": Object {
          "type": [Function],
        },
        "z": Object {
          "type": [Function],
        },
      },
    }
  `)

  expect(
    schemaFromRT(
      t.type({
        d: date,
        e: t.keyof({ foo: 0, bar: 0 }),
        a: t.array(t.string),
        o: t.type({ x: t.number, y: t.Int }),
        o2: t.type({
          fizz: t.array(t.type({ buzz: t.boolean })),
        }),
      }),
    ),
  ).toMatchInlineSnapshot(`
    Object {
      "a": Array [
        Object {
          "type": [Function],
        },
      ],
      "d": Object {
        "type": [Function],
      },
      "e": Object {
        "enum": Array [
          "foo",
          "bar",
        ],
        "type": [Function],
      },
      "o": Object {
        "x": Object {
          "type": [Function],
        },
        "y": Object {
          "type": [Function],
        },
      },
      "o2": Object {
        "fizz": Array [
          Object {
            "buzz": Object {
              "type": [Function],
            },
          },
        ],
      },
    }
  `)
})
