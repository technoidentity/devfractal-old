import { ArrayMT, EnumMT, MT, ObjectMT, PrimitiveMT } from './types'
import { isValid } from './validate'

const noEx: PrimitiveMT = { kind: 'number' }
const strEx: PrimitiveMT = { kind: 'string' }
const boolEx: PrimitiveMT = { kind: 'boolean' }
const dateEx: PrimitiveMT = { kind: 'date' }

test('number meta', () => {
  expect(isValid(noEx, 100)).toBeTruthy()
  expect(isValid(noEx, '100')).toBeFalsy()
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
  expect(isValid(noREx, 15)).toBeTruthy()
  expect(isValid(noREx, 5)).toBeFalsy()
  expect(isValid(noREx, 25)).toBeFalsy()
})

test('str meta', () => {
  expect(isValid(strEx, '100')).toBeTruthy()
  expect(isValid(strEx, 100)).toBeFalsy()
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
  expect(isValid(strREx, 'foobar@gmail.com')).toBeTruthy()
  expect(isValid(strREx, 'foobaR@gmail.com')).toBeFalsy()
  expect(isValid(strREx, 'f@g.com')).toBeFalsy()
  expect(
    isValid(strREx, 'foooooooooooooooooooooooooooooo@gmai.com'),
  ).toBeFalsy()
})

test('bool meta', () => {
  expect(isValid(boolEx, true)).toBeTruthy()
  expect(isValid(boolEx, false)).toBeTruthy()
  expect(isValid(boolEx, 100)).toBeFalsy()
})

test('date meta', () => {
  expect(isValid(dateEx, new Date())).toBeTruthy()
  expect(isValid(dateEx, '2000-12-2')).toBeFalsy()
})

test('enum meta', () => {
  const enumEx: EnumMT = {
    kind: 'enum',
    name: 'color',
    values: ['red', 'green', 'blue'],
  }
  expect(isValid(enumEx, 100)).toBeFalsy()
  expect(isValid(enumEx, 'red')).toBeTruthy()
  expect(isValid(enumEx, 'green')).toBeTruthy()
  expect(isValid(enumEx, 'blue')).toBeTruthy()
  expect(isValid(enumEx, 'GREEN')).toBeFalsy()
})

test('array meta', () => {
  const arrNoEx: ArrayMT = { kind: 'array', of: noEx }
  expect(isValid(arrNoEx, [])).toBeTruthy()
  expect(isValid(arrNoEx, [10, 20])).toBeTruthy()
  expect(isValid(arrNoEx, ['10', '20'])).toBeFalsy()
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
  expect(isValid(arrNoREx, [10, 20])).toBeTruthy()
  expect(isValid(arrNoREx, [10, 20, 30, 40, 50, 60, 70])).toBeFalsy()
  expect(isValid(arrNoREx, [])).toBeFalsy()
})

test('array with differently typed elements', () => {
  const arrStrEx: ArrayMT = { kind: 'array', of: strEx }
  expect(isValid(arrStrEx, [])).toBeTruthy()
  expect(isValid(arrStrEx, [10, 20])).toBeFalsy()
  expect(isValid(arrStrEx, ['10', '20'])).toBeTruthy()

  const arrBoolEx: ArrayMT = { kind: 'array', of: boolEx }
  expect(isValid(arrBoolEx, [])).toBeTruthy()
  expect(isValid(arrBoolEx, [true, false])).toBeTruthy()
  expect(isValid(arrBoolEx, ['10', '20'])).toBeFalsy()

  const arrDateEx: ArrayMT = { kind: 'array', of: dateEx }
  expect(isValid(arrDateEx, [])).toBeTruthy()
  expect(isValid(arrDateEx, [new Date(), new Date()])).toBeTruthy()
  expect(isValid(arrDateEx, ['10', '20'])).toBeFalsy()
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
    isValid(objEx, { name: 'iPhone', price: 700, inStock: true }),
  ).toBeTruthy()
  expect(
    isValid(objEx, { name: 'iPhone', price: 700, inStock: 10 }),
  ).toBeFalsy()
  expect(
    isValid(objEx, { name: 'iPhone', price: '700', inStock: 10 }),
  ).toBeFalsy()
  expect(isValid(objEx, { name: 100, price: '700', inStock: 10 })).toBeFalsy()
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

  expect(isValid(customerMeta, customer)).toBeTruthy()
})
