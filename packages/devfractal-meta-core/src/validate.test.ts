import { ArrayMT, EnumMT, Mixed, MT, PrimitiveMT } from './meta'
import { validate } from './validate'

const noEx: PrimitiveMT = { kind: 'number' }
const strEx: PrimitiveMT = { kind: 'string' }
const boolEx: PrimitiveMT = { kind: 'boolean' }
const dateEx: PrimitiveMT = { kind: 'date' }

test('number meta', () => {
  expect(validate(noEx, 100)).toMatchInlineSnapshot(`undefined`)
  expect(validate(noEx, '100')).toMatchInlineSnapshot(`
                            Object {
                              "errors": Array [
                                "should be a number",
                              ],
                              "kind": "number",
                            }
              `)
})

test('number with refinements', () => {
  const noREx: PrimitiveMT = {
    kind: 'number',
    refinements: {
      integer: true,
      min: 10,
      max: 20,
    },
  }

  expect(validate(noREx, 15)).toMatchInlineSnapshot(`undefined`)
  expect(validate(noREx, 5)).toMatchInlineSnapshot(`
                            Object {
                              "errors": Array [
                                "should not be smaller than 10",
                              ],
                              "kind": "number",
                            }
              `)
  expect(validate(noREx, 25)).toMatchInlineSnapshot(`
                            Object {
                              "errors": Array [
                                "should not be larger than 20",
                              ],
                              "kind": "number",
                            }
              `)
})

test('str meta', () => {
  expect(validate(strEx, '100')).toMatchInlineSnapshot(`undefined`)
  expect(validate(strEx, 100)).toMatchInlineSnapshot(`
                    Object {
                      "errors": Array [
                        "should be a string",
                      ],
                      "kind": "string",
                    }
          `)
})

test('str meta with refinements', () => {
  const strREx: PrimitiveMT = {
    kind: 'string',
    refinements: {
      base: 'email',
      case: 'lower',
      strLength: {
        min: 10,
        max: 20,
      },
    },
  }

  expect(validate(strREx, 'foobar@gmail.com')).toMatchInlineSnapshot(
    `undefined`,
  )
  expect(validate(strREx, 'foobaR@gmail.com')).toMatchInlineSnapshot(`
                    Object {
                      "errors": Array [
                        "should be lower case ",
                      ],
                      "kind": "string",
                    }
          `)
  expect(validate(strREx, 'f@g.com')).toMatchInlineSnapshot(`
                    Object {
                      "errors": Array [
                        "should have minimum length of 10",
                      ],
                      "kind": "string",
                    }
          `)
  expect(validate(strREx, 'foooooooooooooooooooooooooooooo@gmai.com'))
    .toMatchInlineSnapshot(`
                    Object {
                      "errors": Array [
                        "should have maximum length of 20",
                      ],
                      "kind": "string",
                    }
          `)
})

test('bool meta', () => {
  expect(validate(boolEx, true)).toMatchInlineSnapshot(`undefined`)
  expect(validate(boolEx, false)).toMatchInlineSnapshot(`undefined`)
  expect(validate(boolEx, 100)).toMatchInlineSnapshot(`
                    Object {
                      "errors": Array [
                        "should be boolean",
                      ],
                      "kind": "boolean",
                    }
          `)
})

test('date meta', () => {
  expect(validate(dateEx, new Date())).toMatchInlineSnapshot(`undefined`)
  expect(validate(dateEx, '2000-12-2')).toMatchInlineSnapshot(`
                    Object {
                      "errors": Array [
                        "should be a date",
                      ],
                      "kind": "date",
                    }
          `)
})

test('enum meta', () => {
  const enumEx: EnumMT = {
    kind: 'enum',
    name: 'color',
    values: ['red', 'green', 'blue'],
  }
  expect(validate(enumEx, 100)).toMatchInlineSnapshot(`
                    Object {
                      "errors": Array [
                        "should be one of [
                      \\"red\\",
                      \\"green\\",
                      \\"blue\\"
                    ]",
                      ],
                      "kind": "enum",
                    }
          `)
  expect(validate(enumEx, 'red')).toMatchInlineSnapshot(`undefined`)
  expect(validate(enumEx, 'green')).toMatchInlineSnapshot(`undefined`)
  expect(validate(enumEx, 'blue')).toMatchInlineSnapshot(`undefined`)
  expect(validate(enumEx, 'GREEN')).toMatchInlineSnapshot(`
                    Object {
                      "errors": Array [
                        "should be one of [
                      \\"red\\",
                      \\"green\\",
                      \\"blue\\"
                    ]",
                      ],
                      "kind": "enum",
                    }
          `)
})

test('array meta', () => {
  const arrNoEx: ArrayMT = { kind: 'array', of: noEx }
  expect(validate(arrNoEx, [])).toMatchInlineSnapshot(`undefined`)
  expect(validate(arrNoEx, [10, 20])).toMatchInlineSnapshot(`undefined`)
  expect(validate(arrNoEx, ['10', '20'])).toMatchInlineSnapshot(`
                Object {
                  "elements": Array [
                    Object {
                      "errors": Array [
                        "should be a number",
                      ],
                      "kind": "number",
                    },
                    Object {
                      "errors": Array [
                        "should be a number",
                      ],
                      "kind": "number",
                    },
                  ],
                  "errors": Array [],
                  "kind": "array",
                }
        `)
})

test('array meta with refinements', () => {
  const arrNoREx: ArrayMT = {
    kind: 'array',
    of: noEx,
    refinements: {
      maxArrayLength: 6,
      minArrayLength: 2,
    },
  }
  expect(validate(arrNoREx, [10, 20])).toMatchInlineSnapshot(`undefined`)
  expect(validate(arrNoREx, [10, 20, 30, 40, 50, 60, 70]))
    .toMatchInlineSnapshot(`
                    Object {
                      "elements": undefined,
                      "errors": Array [
                        "should have max length of 6",
                      ],
                      "kind": "array",
                    }
          `)
  expect(validate(arrNoREx, [])).toMatchInlineSnapshot(`
                    Object {
                      "elements": undefined,
                      "errors": Array [
                        "should have min length of 2",
                      ],
                      "kind": "array",
                    }
          `)
})

test('array with differently typed elements', () => {
  const arrStrEx: ArrayMT = { kind: 'array', of: strEx }
  expect(validate(arrStrEx, [])).toMatchInlineSnapshot(`undefined`)
  expect(validate(arrStrEx, [10, 20])).toMatchInlineSnapshot(`
            Object {
              "elements": Array [
                Object {
                  "errors": Array [
                    "should be a string",
                  ],
                  "kind": "string",
                },
                Object {
                  "errors": Array [
                    "should be a string",
                  ],
                  "kind": "string",
                },
              ],
              "errors": Array [],
              "kind": "array",
            }
      `)
  expect(validate(arrStrEx, ['10', '20'])).toMatchInlineSnapshot(`undefined`)

  const arrBoolEx: ArrayMT = { kind: 'array', of: boolEx }
  expect(validate(arrBoolEx, [])).toMatchInlineSnapshot(`undefined`)
  expect(validate(arrBoolEx, [true, false])).toMatchInlineSnapshot(`undefined`)
  expect(validate(arrBoolEx, ['10', '20'])).toMatchInlineSnapshot(`
        Object {
          "elements": Array [
            Object {
              "errors": Array [
                "should be boolean",
              ],
              "kind": "boolean",
            },
            Object {
              "errors": Array [
                "should be boolean",
              ],
              "kind": "boolean",
            },
          ],
          "errors": Array [],
          "kind": "array",
        }
    `)

  const arrDateEx: ArrayMT = { kind: 'array', of: dateEx }
  expect(validate(arrDateEx, [])).toMatchInlineSnapshot(`undefined`)
  expect(validate(arrDateEx, [new Date(), new Date()])).toMatchInlineSnapshot(
    `undefined`,
  )
  expect(validate(arrDateEx, ['10', '20'])).toMatchInlineSnapshot(`
    Object {
      "elements": Array [
        Object {
          "errors": Array [
            "should be a date",
          ],
          "kind": "date",
        },
        Object {
          "errors": Array [
            "should be a date",
          ],
          "kind": "date",
        },
      ],
      "errors": Array [],
      "kind": "array",
    }
  `)
})

test('object meta', () => {
  const objEx: MT = {
    kind: 'object',
    properties: {
      name: strEx,
      price: noEx,
      inStock: boolEx,
    },
  }
  expect(
    validate(objEx, { name: 'iPhone', price: 700, inStock: true }),
  ).toMatchInlineSnapshot(`undefined`)
  expect(validate(objEx, { name: 'iPhone', price: 700, inStock: 10 }))
    .toMatchInlineSnapshot(`
                    Object {
                      "kind": "object",
                      "properties": Object {
                        "inStock": Object {
                          "errors": Array [
                            "should be boolean",
                          ],
                          "kind": "boolean",
                        },
                      },
                    }
          `)
  expect(validate(objEx, { name: 'iPhone', price: '700', inStock: 10 }))
    .toMatchInlineSnapshot(`
                    Object {
                      "kind": "object",
                      "properties": Object {
                        "inStock": Object {
                          "errors": Array [
                            "should be boolean",
                          ],
                          "kind": "boolean",
                        },
                        "price": Object {
                          "errors": Array [
                            "should be a number",
                          ],
                          "kind": "number",
                        },
                      },
                    }
          `)
  expect(validate(objEx, { name: 100, price: '700', inStock: 10 }))
    .toMatchInlineSnapshot(`
                    Object {
                      "kind": "object",
                      "properties": Object {
                        "inStock": Object {
                          "errors": Array [
                            "should be boolean",
                          ],
                          "kind": "boolean",
                        },
                        "name": Object {
                          "errors": Array [
                            "should be a string",
                          ],
                          "kind": "string",
                        },
                        "price": Object {
                          "errors": Array [
                            "should be a number",
                          ],
                          "kind": "number",
                        },
                      },
                    }
          `)
})

test('complex meta', () => {
  const customerMeta: Mixed = {
    kind: 'object',
    properties: {
      name: strEx,
      type: {
        kind: 'enum',
        name: 'CustomerType',
        values: ['manager', 'programmer', 'team-leader'],
      },
      addresses: {
        kind: 'array',
        of: {
          kind: 'object',
          properties: {
            city: strEx,
            zip: noEx,
            country: strEx,
          },
        },
      },
    },
  }

  // tslint:disable-next-line:typedef
  const customer = {
    name: 'foobar',
    type: 'team-leader',
    addresses: [
      { city: 'hyderabad', zip: 500018, country: 'india' },
      { city: 'chennai', zip: 500038, country: 'india' },
    ],
  }

  expect(validate(customerMeta, customer)).toMatchInlineSnapshot(`undefined`)
})

// tslint:disable-next-line: no-empty
