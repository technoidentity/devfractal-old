import { ArrayMT, EnumMT, MT, ObjectMT, PrimitiveMT } from './index'
import { isValid as validate } from './validate'

const noEx: PrimitiveMT = { kind: 'number' }
const strEx: PrimitiveMT = { kind: 'string' }
const boolEx: PrimitiveMT = { kind: 'boolean' }
const dateEx: PrimitiveMT = { kind: 'date' }

test('number meta', () => {
  expect(validate(noEx, 100)).toBeTruthy()
  expect(validate(noEx, '100')).toBeFalsy()
})

test('number with refinements', () => {
  const noREx: PrimitiveMT = {
    kind: 'number',
    refinements: [
      { kind: 'integer' },
      { kind: 'min', value: 10 },
      { kind: 'max', value: 20 },
    ],
  }
  expect(validate(noREx, 15)).toBeTruthy()
  expect(validate(noREx, 5)).toBeFalsy()
  expect(validate(noREx, 25)).toBeFalsy()
})

test('str meta', () => {
  expect(validate(strEx, '100')).toBeTruthy()
  expect(validate(strEx, 100)).toBeFalsy()
})

test('str meta with refinements', () => {
  const strREx: PrimitiveMT = {
    kind: 'string',
    refinements: [
      { kind: 'email' },
      { kind: 'lowercase' },
      { kind: 'minStringLength', value: 10 },
      { kind: 'maxStringLength', value: 20 },
    ],
  }
  expect(validate(strREx, 'foobar@gmail.com')).toBeTruthy()
  expect(validate(strREx, 'foobaR@gmail.com')).toBeFalsy()
  expect(validate(strREx, 'f@g.com')).toBeFalsy()
  expect(
    validate(strREx, 'foooooooooooooooooooooooooooooo@gmai.com'),
  ).toBeFalsy()
})

test('bool meta', () => {
  expect(validate(boolEx, true)).toBeTruthy()
  expect(validate(boolEx, false)).toBeTruthy()
  expect(validate(boolEx, 100)).toBeFalsy()
})

test('date meta', () => {
  expect(validate(dateEx, new Date())).toBeTruthy()
  expect(validate(dateEx, '2000-12-2')).toBeFalsy()
})

test('enum meta', () => {
  const enumEx: EnumMT = {
    kind: 'enum',
    name: 'color',
    values: ['red', 'green', 'blue'],
  }
  expect(validate(enumEx, 100)).toBeFalsy()
  expect(validate(enumEx, 'red')).toBeTruthy()
  expect(validate(enumEx, 'green')).toBeTruthy()
  expect(validate(enumEx, 'blue')).toBeTruthy()
  expect(validate(enumEx, 'GREEN')).toBeFalsy()
})

test('array meta', () => {
  const arrNoEx: ArrayMT = { kind: 'array', of: noEx }
  expect(validate(arrNoEx, [])).toBeTruthy()
  expect(validate(arrNoEx, [10, 20])).toBeTruthy()
  expect(validate(arrNoEx, ['10', '20'])).toBeFalsy()
})

test('array meta with refinements', () => {
  const arrNoREx: ArrayMT = {
    kind: 'array',
    of: noEx,
    refinements: [
      { kind: 'maxArrayLength', value: 6 },
      { kind: 'minArrayLength', value: 2 },
    ],
  }
  expect(validate(arrNoREx, [10, 20])).toBeTruthy()
  expect(validate(arrNoREx, [10, 20, 30, 40, 50, 60, 70])).toBeFalsy()
  expect(validate(arrNoREx, [])).toBeFalsy()
})

test('array with differently typed elements', () => {
  const arrStrEx: ArrayMT = { kind: 'array', of: strEx }
  expect(validate(arrStrEx, [])).toBeTruthy()
  expect(validate(arrStrEx, [10, 20])).toBeFalsy()
  expect(validate(arrStrEx, ['10', '20'])).toBeTruthy()

  const arrBoolEx: ArrayMT = { kind: 'array', of: boolEx }
  expect(validate(arrBoolEx, [])).toBeTruthy()
  expect(validate(arrBoolEx, [true, false])).toBeTruthy()
  expect(validate(arrBoolEx, ['10', '20'])).toBeFalsy()

  const arrDateEx: ArrayMT = { kind: 'array', of: dateEx }
  expect(validate(arrDateEx, [])).toBeTruthy()
  expect(validate(arrDateEx, [new Date(), new Date()])).toBeTruthy()
  expect(validate(arrDateEx, ['10', '20'])).toBeFalsy()
})

test('object meta', () => {
  const objEx: ObjectMT = {
    kind: 'object',
    properties: {
      name: strEx,
      price: noEx,
      inStock: boolEx,
    },
  }
  expect(
    validate(objEx, { name: 'iPhone', price: 700, inStock: true }),
  ).toBeTruthy()
  expect(
    validate(objEx, { name: 'iPhone', price: 700, inStock: 10 }),
  ).toBeFalsy()
  expect(
    validate(objEx, { name: 'iPhone', price: '700', inStock: 10 }),
  ).toBeFalsy()
  expect(validate(objEx, { name: 100, price: '700', inStock: 10 })).toBeFalsy()
})

test('complex meta', () => {
  const customerMeta: MT = {
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

  expect(validate(customerMeta, customer)).toBeTruthy()
})
