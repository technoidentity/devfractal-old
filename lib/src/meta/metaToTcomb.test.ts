import { validate } from 'tcomb-validation'
import {
  ArrayMT,
  EnumMT,
  metaToTcomb,
  MT,
  ObjectMT,
  PrimitiveMT,
} from './index'

const noEx: PrimitiveMT = { kind: 'number' }
const strEx: PrimitiveMT = { kind: 'string' }
const boolEx: PrimitiveMT = { kind: 'boolean' }
const dateEx: PrimitiveMT = { kind: 'date' }

test('tcomb from number meta', () => {
  expect(validate(100, metaToTcomb(noEx)).isValid()).toBeTruthy()
  expect(validate('100', metaToTcomb(noEx)).isValid()).toBeFalsy()
})

test('tcomb from number with refinements', () => {
  const noREx: PrimitiveMT = {
    kind: 'number',
    refinements: [
      { kind: 'integer' },
      { kind: 'min', value: 10 },
      { kind: 'max', value: 20 },
    ],
  }
  expect(validate(15, metaToTcomb(noREx)).isValid()).toBeTruthy()
  expect(validate(5, metaToTcomb(noREx)).isValid()).toBeFalsy()
  expect(validate(25, metaToTcomb(noREx)).isValid()).toBeFalsy()
})

test('tcomb from str meta', () => {
  expect(validate('100', metaToTcomb(strEx)).isValid()).toBeTruthy()
  expect(validate(100, metaToTcomb(strEx)).isValid()).toBeFalsy()
})

test('tcomb from str meta with refinements', () => {
  const strREx: PrimitiveMT = {
    kind: 'string',
    refinements: [
      { kind: 'email' },
      { kind: 'lowercase' },
      { kind: 'minLength', value: 10 },
      { kind: 'maxLength', value: 20 },
    ],
  }
  expect(
    validate('foobar@gmail.com', metaToTcomb(strREx)).isValid(),
  ).toBeTruthy()
  expect(
    validate('foobaR@gmail.com', metaToTcomb(strREx)).isValid(),
  ).toBeFalsy()
  expect(validate('f@g.com', metaToTcomb(strREx)).isValid()).toBeFalsy()
  expect(
    validate(
      'foooooooooooooooooooooooooooooo@gmai.com',
      metaToTcomb(strREx),
    ).isValid(),
  ).toBeFalsy()
})

test('tcomb from bool meta', () => {
  expect(validate(true, metaToTcomb(boolEx)).isValid()).toBeTruthy()
  expect(validate(false, metaToTcomb(boolEx)).isValid()).toBeTruthy()
  expect(validate(100, metaToTcomb(boolEx)).isValid()).toBeFalsy()
})

test('tcomb from date meta', () => {
  expect(validate(new Date(), metaToTcomb(dateEx)).isValid()).toBeTruthy()
  expect(validate('2000-12-2', metaToTcomb(dateEx)).isValid()).toBeFalsy()
})

test('tcomb from enum meta', () => {
  const enumEx: EnumMT = {
    kind: 'enum',
    name: 'color',
    values: ['red', 'green', 'blue'],
  }
  expect(validate(100, metaToTcomb(enumEx)).isValid()).toBeFalsy()
  expect(validate('red', metaToTcomb(enumEx)).isValid()).toBeTruthy()
  expect(validate('green', metaToTcomb(enumEx)).isValid()).toBeTruthy()
  expect(validate('blue', metaToTcomb(enumEx)).isValid()).toBeTruthy()
  expect(validate('GREEN', metaToTcomb(enumEx)).isValid()).toBeFalsy()
})

test('tcomb from array meta', () => {
  const arrNoEx: ArrayMT = { kind: 'array', of: noEx }
  expect(validate([], metaToTcomb(arrNoEx)).isValid()).toBeTruthy()
  expect(validate([10, 20], metaToTcomb(arrNoEx)).isValid()).toBeTruthy()
  expect(validate(['10', '20'], metaToTcomb(arrNoEx)).isValid()).toBeFalsy()
})

test('tcomb from array meta with refinements', () => {
  const arrNoREx: ArrayMT = {
    kind: 'array',
    of: noEx,
    refinements: [
      { kind: 'maxLength', value: 6 },
      { kind: 'minLength', value: 2 },
    ],
  }
  expect(validate([10, 20], metaToTcomb(arrNoREx)).isValid()).toBeTruthy()
  expect(
    validate([10, 20, 30, 40, 50, 60, 70], metaToTcomb(arrNoREx)).isValid(),
  ).toBeFalsy()
  expect(validate([], metaToTcomb(arrNoREx)).isValid()).toBeFalsy()
})

test('tcomb from array with differently typed elements', () => {
  const arrStrEx: ArrayMT = { kind: 'array', of: strEx }
  expect(validate([], metaToTcomb(arrStrEx)).isValid()).toBeTruthy()
  expect(validate([10, 20], metaToTcomb(arrStrEx)).isValid()).toBeFalsy()
  expect(validate(['10', '20'], metaToTcomb(arrStrEx)).isValid()).toBeTruthy()

  const arrBoolEx: ArrayMT = { kind: 'array', of: boolEx }
  expect(validate([], metaToTcomb(arrBoolEx)).isValid()).toBeTruthy()
  expect(validate([true, false], metaToTcomb(arrBoolEx)).isValid()).toBeTruthy()
  expect(validate(['10', '20'], metaToTcomb(arrBoolEx)).isValid()).toBeFalsy()

  const arrDateEx: ArrayMT = { kind: 'array', of: dateEx }
  expect(validate([], metaToTcomb(arrDateEx)).isValid()).toBeTruthy()
  expect(
    validate([new Date(), new Date()], metaToTcomb(arrDateEx)).isValid(),
  ).toBeTruthy()
  expect(validate(['10', '20'], metaToTcomb(arrDateEx)).isValid()).toBeFalsy()
})

test('tcomb from object meta', () => {
  const objEx: ObjectMT = {
    kind: 'object',
    properties: {
      name: strEx,
      price: noEx,
      inStock: boolEx,
    },
  }
  expect(
    validate(
      { name: 'iPhone', price: 700, inStock: true },
      metaToTcomb(objEx),
    ).isValid(),
  ).toBeTruthy()
  expect(
    validate(
      { name: 'iPhone', price: 700, inStock: 10 },
      metaToTcomb(objEx),
    ).isValid(),
  ).toBeFalsy()
  expect(
    validate(
      { name: 'iPhone', price: '700', inStock: 10 },
      metaToTcomb(objEx),
    ).isValid(),
  ).toBeFalsy()
  expect(
    validate(
      { name: 100, price: '700', inStock: 10 },
      metaToTcomb(objEx),
    ).isValid(),
  ).toBeFalsy()
})

test('tcomb from complex meta', () => {
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
            zip: noEx, // Just an example, so zip as noFalsyne
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

  expect(validate(customer, metaToTcomb(customerMeta)).isValid()).toBeTruthy()
})
