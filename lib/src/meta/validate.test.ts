import { ArrayMT, EnumMT, MT, ObjectMT, PrimitiveMT } from './index'
import { isValid } from './validate'

const noEx: PrimitiveMT = { kind: 'number' }
const strEx: PrimitiveMT = { kind: 'string' }
const boolEx: PrimitiveMT = { kind: 'boolean' }
const dateEx: PrimitiveMT = { kind: 'date' }

test('number meta', () => {
  expect(isValid(noEx, 100)).toMatchSnapshot()
  expect(isValid(noEx, '100')).toMatchSnapshot()
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
  expect(isValid(noREx, 15)).toMatchSnapshot()
  expect(isValid(noREx, 5)).toMatchSnapshot()
  expect(isValid(noREx, 25)).toMatchSnapshot()
})

test('str meta', () => {
  expect(isValid(strEx, '100')).toMatchSnapshot()
  expect(isValid(strEx, 100)).toMatchSnapshot()
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
  expect(isValid(strREx, 'foobar@gmail.com')).toMatchSnapshot()
  expect(isValid(strREx, 'foobaR@gmail.com')).toMatchSnapshot()
  expect(isValid(strREx, 'f@g.com')).toMatchSnapshot()
  expect(
    isValid(strREx, 'foooooooooooooooooooooooooooooo@gmai.com'),
  ).toMatchSnapshot()
})

test('bool meta', () => {
  expect(isValid(boolEx, true)).toMatchSnapshot()
  expect(isValid(boolEx, false)).toMatchSnapshot()
  expect(isValid(boolEx, 100)).toMatchSnapshot()
})

test('date meta', () => {
  expect(isValid(dateEx, new Date())).toMatchSnapshot()
  expect(isValid(dateEx, '2000-12-2')).toMatchSnapshot()
})

test('enum meta', () => {
  const enumEx: EnumMT = {
    kind: 'enum',
    name: 'color',
    values: ['red', 'green', 'blue'],
  }
  expect(isValid(enumEx, 100)).toMatchSnapshot()
  expect(isValid(enumEx, 'red')).toMatchSnapshot()
  expect(isValid(enumEx, 'green')).toMatchSnapshot()
  expect(isValid(enumEx, 'blue')).toMatchSnapshot()
  expect(isValid(enumEx, 'GREEN')).toMatchSnapshot()
})

test('array meta', () => {
  const arrNoEx: ArrayMT = { kind: 'array', of: noEx }
  expect(isValid(arrNoEx, [])).toMatchSnapshot()
  expect(isValid(arrNoEx, [10, 20])).toMatchSnapshot()
  expect(isValid(arrNoEx, ['10', '20'])).toMatchSnapshot()
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
  expect(isValid(arrNoREx, [10, 20])).toMatchSnapshot()
  expect(isValid(arrNoREx, [10, 20, 30, 40, 50, 60, 70])).toMatchSnapshot()
  expect(isValid(arrNoREx, [])).toMatchSnapshot()
})

test('array with differently typed elements', () => {
  const arrStrEx: ArrayMT = { kind: 'array', of: strEx }
  expect(isValid(arrStrEx, [])).toMatchSnapshot()
  expect(isValid(arrStrEx, [10, 20])).toMatchSnapshot()
  expect(isValid(arrStrEx, ['10', '20'])).toMatchSnapshot()

  const arrBoolEx: ArrayMT = { kind: 'array', of: boolEx }
  expect(isValid(arrBoolEx, [])).toMatchSnapshot()
  expect(isValid(arrBoolEx, [true, false])).toMatchSnapshot()
  expect(isValid(arrBoolEx, ['10', '20'])).toMatchSnapshot()

  const arrDateEx: ArrayMT = { kind: 'array', of: dateEx }
  expect(isValid(arrDateEx, [])).toMatchSnapshot()
  expect(isValid(arrDateEx, [new Date(), new Date()])).toMatchSnapshot()
  expect(isValid(arrDateEx, ['10', '20'])).toMatchSnapshot()
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
  ).toMatchSnapshot()
  expect(
    isValid(objEx, { name: 'iPhone', price: 700, inStock: 10 }),
  ).toMatchSnapshot()
  expect(
    isValid(objEx, { name: 'iPhone', price: '700', inStock: 10 }),
  ).toMatchSnapshot()
  expect(
    isValid(objEx, { name: 100, price: '700', inStock: 10 }),
  ).toMatchSnapshot()
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

  expect(isValid(customerMeta, customer)).toMatchSnapshot()
})
