import { Type, validate } from 'tcomb-validation'
import { ArrayMT, EnumMT, MT, PrimitiveMT } from './meta'
import { metaToTcomb } from './metaToTcomb'

const noEx: PrimitiveMT = { kind: 'number' }
const strEx: PrimitiveMT = { kind: 'string' }
const boolEx: PrimitiveMT = { kind: 'boolean' }
const dateEx: PrimitiveMT = { kind: 'date' }

function isValid<T>(type: Type<T>, value: any): boolean {
  return validate(value, type).isValid()
}
test('number meta', () => {
  expect(isValid(metaToTcomb(noEx), 100)).toBeTruthy()
  expect(isValid(metaToTcomb(noEx), '100')).toBeFalsy()
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
  expect(isValid(metaToTcomb(noREx), 15)).toBeTruthy()
  expect(isValid(metaToTcomb(noREx), 5)).toBeFalsy()
  expect(isValid(metaToTcomb(noREx), 25)).toBeFalsy()
})

test('str meta', () => {
  expect(isValid(metaToTcomb(strEx), '100')).toBeTruthy()
  expect(isValid(metaToTcomb(strEx), 100)).toBeFalsy()
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

  expect(isValid(metaToTcomb(strREx), 'foobar@gmail.com')).toBeTruthy()
  expect(isValid(metaToTcomb(strREx), 'foobaR@gmail.com')).toBeFalsy()
  expect(isValid(metaToTcomb(strREx), 'f@g.com')).toBeFalsy()
  expect(
    isValid(metaToTcomb(strREx), 'foooooooooooooooooooooooooooooo@gmai.com'),
  ).toBeFalsy()
})

test('bool meta', () => {
  expect(isValid(metaToTcomb(boolEx), true)).toBeTruthy()
  expect(isValid(metaToTcomb(boolEx), false)).toBeTruthy()
  expect(isValid(metaToTcomb(boolEx), 100)).toBeFalsy()
})

test('date meta', () => {
  expect(isValid(metaToTcomb(dateEx), new Date())).toBeTruthy()
  expect(isValid(metaToTcomb(dateEx), '2000-12-2')).toBeFalsy()
})

test('enum meta', () => {
  const enumEx: EnumMT = {
    kind: 'enum',
    name: 'color',
    values: ['red', 'green', 'blue'],
  }
  expect(isValid(metaToTcomb(enumEx), 100)).toBeFalsy()
  expect(isValid(metaToTcomb(enumEx), 'red')).toBeTruthy()
  expect(isValid(metaToTcomb(enumEx), 'green')).toBeTruthy()
  expect(isValid(metaToTcomb(enumEx), 'blue')).toBeTruthy()
  expect(isValid(metaToTcomb(enumEx), 'GREEN')).toBeFalsy()
})

test('array meta', () => {
  const arrNoEx: ArrayMT = { kind: 'array', of: noEx }
  expect(isValid(metaToTcomb(arrNoEx), [])).toBeTruthy()
  expect(isValid(metaToTcomb(arrNoEx), [10, 20])).toBeTruthy()
  expect(isValid(metaToTcomb(arrNoEx), ['10', '20'])).toBeFalsy()
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
  expect(isValid(metaToTcomb(arrNoREx), [10, 20])).toBeTruthy()
  expect(
    isValid(metaToTcomb(arrNoREx), [10, 20, 30, 40, 50, 60, 70]),
  ).toBeFalsy()
  expect(isValid(metaToTcomb(arrNoREx), [])).toBeFalsy()
})

test('array with differently typed elements', () => {
  const arrStrEx: ArrayMT = { kind: 'array', of: strEx }
  expect(isValid(metaToTcomb(arrStrEx), [])).toBeTruthy()
  expect(isValid(metaToTcomb(arrStrEx), [10, 20])).toBeFalsy()
  expect(isValid(metaToTcomb(arrStrEx), ['10', '20'])).toBeTruthy()

  const arrBoolEx: ArrayMT = { kind: 'array', of: boolEx }
  expect(isValid(metaToTcomb(arrBoolEx), [])).toBeTruthy()
  expect(isValid(metaToTcomb(arrBoolEx), [true, false])).toBeTruthy()
  expect(isValid(metaToTcomb(arrBoolEx), ['10', '20'])).toBeFalsy()

  const arrDateEx: ArrayMT = { kind: 'array', of: dateEx }
  expect(isValid(metaToTcomb(arrDateEx), [])).toBeTruthy()
  expect(isValid(metaToTcomb(arrDateEx), [new Date(), new Date()])).toBeTruthy()
  expect(isValid(metaToTcomb(arrDateEx), ['10', '20'])).toBeFalsy()
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
    isValid(metaToTcomb(objEx), { name: 'iPhone', price: 700, inStock: true }),
  ).toBeTruthy()
  expect(
    isValid(metaToTcomb(objEx), { name: 'iPhone', price: 700, inStock: 10 }),
  ).toBeFalsy()
  expect(
    isValid(metaToTcomb(objEx), { name: 'iPhone', price: '700', inStock: 10 }),
  ).toBeFalsy()
  expect(
    isValid(metaToTcomb(objEx), { name: 100, price: '700', inStock: 10 }),
  ).toBeFalsy()
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

  expect(isValid(metaToTcomb(customerMeta), customer)).toBeTruthy()
})
