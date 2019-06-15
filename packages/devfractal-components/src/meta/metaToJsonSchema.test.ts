import ajv from 'ajv'
import {
  ArrayMT,
  EnumMT,
  metaToJsonSchema,
  Mixed,
  ObjectMT,
  PrimitiveMT,
  PropertyMT,
} from './index'

const noEx: PrimitiveMT = { kind: 'number' }
const strEx: PrimitiveMT = { kind: 'string' }
const boolEx: PrimitiveMT = { kind: 'boolean' }
const dateEx: PrimitiveMT = { kind: 'date' }

test('json schema from number meta', () => {
  expect(ajv().validate(metaToJsonSchema(noEx), 100)).toBeTruthy()
  expect(ajv().validate(metaToJsonSchema(noEx), '100')).toBeFalsy()
})

test('json schema from number with refinements', () => {
  const noREx: PrimitiveMT = {
    kind: 'number',
    refinements: {
      integer: true,
      min: 10,
      max: 20,
    },
  }
  expect(ajv().validate(metaToJsonSchema(noREx), 15)).toBeTruthy()
  expect(ajv().validate(metaToJsonSchema(noREx), 5)).toBeFalsy()
  expect(ajv().validate(metaToJsonSchema(noREx), 25)).toBeFalsy()
  expect(ajv().validate(metaToJsonSchema(noREx), 10)).toBeTruthy()
  expect(ajv().validate(metaToJsonSchema(noREx), 20)).toBeTruthy()
  expect(ajv().validate(metaToJsonSchema(noREx), 15.01)).toBeFalsy()
})

test('json schema from str meta', () => {
  expect(ajv().validate(metaToJsonSchema(strEx), '100')).toBeTruthy()
  expect(ajv().validate(metaToJsonSchema(strEx), 100)).toBeFalsy()
})

test('json schema from str meta with refinements', () => {
  const strREx: PrimitiveMT = {
    kind: 'string',
    refinements: {
      email: true,
      lowercase: true,
      minStringLength: 10,
      maxStringLength: 20,
    },
  }
  expect(
    ajv().validate(metaToJsonSchema(strREx), 'foobar@gmail.com'),
  ).toBeTruthy()
  expect(ajv().validate(metaToJsonSchema(strREx), 'f@g.com')).toBeFalsy()
  expect(
    ajv().validate(metaToJsonSchema(strREx), 'foooooooooooooooooooo@g.com'),
  ).toBeFalsy()
})

test('json schema from bool meta', () => {
  expect(ajv().validate(metaToJsonSchema(boolEx), true)).toBeTruthy()
  expect(ajv().validate(metaToJsonSchema(boolEx), false)).toBeTruthy()
  expect(ajv().validate(metaToJsonSchema(boolEx), '100')).toBeFalsy()
})

test('json schema from date meta', () => {
  expect(ajv().validate(metaToJsonSchema(dateEx), new Date())).toBeFalsy()
  expect(ajv().validate(metaToJsonSchema(dateEx), '2000-12-02')).toBeTruthy()
})

test('json schema from enum meta', () => {
  const enumEx: EnumMT = {
    kind: 'enum',
    name: 'color',
    values: ['red', 'green', 'blue'],
  }
  expect(ajv().validate(metaToJsonSchema(enumEx), 100)).toBeFalsy()
  expect(ajv().validate(metaToJsonSchema(enumEx), 'red')).toBeTruthy()
  expect(ajv().validate(metaToJsonSchema(enumEx), 'green')).toBeTruthy()
  expect(ajv().validate(metaToJsonSchema(enumEx), 'blue')).toBeTruthy()
  expect(ajv().validate(metaToJsonSchema(enumEx), 'GREEN')).toBeFalsy()
})

test('json schema from array meta', () => {
  const arrNoEx: ArrayMT = { kind: 'array', of: noEx }
  expect(ajv().validate(metaToJsonSchema(arrNoEx), [])).toBeTruthy()
  expect(ajv().validate(metaToJsonSchema(arrNoEx), [10, 20])).toBeTruthy()
  expect(ajv().validate(metaToJsonSchema(arrNoEx), ['10', '20'])).toBeFalsy()
})

test('json schema from array meta with refinements', () => {
  const arrNoREx: ArrayMT = {
    kind: 'array',
    of: noEx,
    refinements: {
      maxArrayLength: 6,
      minArrayLength: 2,
    },
  }
  expect(ajv().validate(metaToJsonSchema(arrNoREx), [10, 20])).toBeTruthy()
  expect(
    ajv().validate(metaToJsonSchema(arrNoREx), [10, 20, 30, 40, 50, 60, 70]),
  ).toBeFalsy()
  expect(ajv().validate(metaToJsonSchema(arrNoREx), [])).toBeFalsy()
})

test('json schema from array with differently typed elements', () => {
  const arrStrEx: ArrayMT = { kind: 'array', of: strEx }
  expect(ajv().validate(metaToJsonSchema(arrStrEx), [])).toBeTruthy()
  expect(ajv().validate(metaToJsonSchema(arrStrEx), [10, 20])).toBeFalsy()
  expect(ajv().validate(metaToJsonSchema(arrStrEx), ['10', '20'])).toBeTruthy()

  const arrBoolEx: ArrayMT = { kind: 'array', of: boolEx }
  expect(ajv().validate(metaToJsonSchema(arrBoolEx), [])).toBeTruthy()
  expect(
    ajv().validate(metaToJsonSchema(arrBoolEx), [true, false]),
  ).toBeTruthy()
  expect(ajv().validate(metaToJsonSchema(arrBoolEx), ['10', '20'])).toBeFalsy()

  const arrDateEx: ArrayMT = { kind: 'array', of: dateEx }
  expect(ajv().validate(metaToJsonSchema(arrDateEx), [])).toBeTruthy()
  expect(
    ajv().validate(metaToJsonSchema(arrDateEx), ['2000-12-02', '2011-01-31']),
  ).toBeTruthy()
  expect(ajv().validate(metaToJsonSchema(arrDateEx), ['10', '20'])).toBeFalsy()
})

test('json schema from object meta', () => {
  const strOptEx: PropertyMT = { kind: 'string', optional: true }
  const objEx: ObjectMT = {
    kind: 'object',
    properties: {
      name: strEx,
      price: noEx,
      inStock: boolEx,
      description: strOptEx,
    },
  }
  expect(
    ajv().validate(metaToJsonSchema(objEx), {
      name: 'iPhone',
      price: 700,
      inStock: true,
      description: 'iPhone 8 plus',
    }),
  ).toBeTruthy()
  expect(
    ajv().validate(metaToJsonSchema(objEx), {
      name: 'iPhone',
      price: 700,
      inStock: true,
    }),
  ).toBeTruthy()
  expect(
    ajv().validate(metaToJsonSchema(objEx), {
      name: 'iPhone',
      price: 700,
      inStock: 10,
    }),
  ).toBeFalsy()
  expect(
    ajv().validate(metaToJsonSchema(objEx), {
      name: 'iPhone',
      price: '700',
      inStock: 10,
    }),
  ).toBeFalsy()
  expect(
    ajv().validate(metaToJsonSchema(objEx), {
      name: 100,
      price: '700',
      inStock: 10,
    }),
  ).toBeFalsy()
  expect(
    ajv().validate(metaToJsonSchema(objEx), {
      name: 'iPhone',
      price: 700,
    }),
  ).toBeFalsy()
})

test('json schema from complex meta', () => {
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

  expect(ajv().validate(metaToJsonSchema(customerMeta), customer)).toBeTruthy()
})
