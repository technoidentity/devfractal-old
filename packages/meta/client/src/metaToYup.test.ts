import { ArrayMT, EnumMT, Mixed, MT, PrimitiveMT } from 'meta-core'
import { Schema } from 'yup'
import { metaToYup } from './metaToYup'

const noEx: PrimitiveMT = { kind: 'number' }
const strEx: PrimitiveMT = { kind: 'string' }
const boolEx: PrimitiveMT = { kind: 'boolean' }
const dateEx: PrimitiveMT = { kind: 'date' }

const validate: (value: unknown, schema: Schema<any>) => boolean = (
  value,
  schema,
) => schema.isValidSync(value)

test('yup from number meta', () => {
  expect(validate(100, metaToYup(noEx))).toBeTruthy()
  expect(validate('100', metaToYup(noEx))).toBeFalsy()
})

test('yup from number with refinements', () => {
  const noREx: PrimitiveMT = {
    kind: 'number',
    refinements: {
      integer: true,
      min: 10,
      max: 20,
    },
  }
  expect(validate(15, metaToYup(noREx))).toBeTruthy()
  expect(validate(5, metaToYup(noREx))).toBeFalsy()
  expect(validate(25, metaToYup(noREx))).toBeFalsy()
})

test('str meta', () => {
  expect(validate('100', metaToYup(strEx))).toBeTruthy()
  expect(validate(100, metaToYup(strEx))).toBeFalsy()
})

test('yup from str meta with refinements', () => {
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
  expect(validate('foobar@gmail.com', metaToYup(strREx))).toBeTruthy()
  expect(validate('foobaR@gmail.com', metaToYup(strREx))).toBeFalsy()
  expect(validate('f@g.com', metaToYup(strREx))).toBeFalsy()
  expect(
    validate('foooooooooooooooooooooooooooooo@gmai.com', metaToYup(strREx)),
  ).toBeFalsy()
})

test('yup from bool meta', () => {
  expect(validate(true, metaToYup(boolEx))).toBeTruthy()
  expect(validate(false, metaToYup(boolEx))).toBeTruthy()
  expect(validate(100, metaToYup(boolEx))).toBeFalsy()
})

test('yup from date meta', () => {
  expect(validate(new Date(), metaToYup(dateEx))).toBeTruthy()
  expect(validate('2000-12-2', metaToYup(dateEx))).toBeFalsy()
})

test('yup from enum meta', () => {
  const enumEx: EnumMT = {
    kind: 'enum',
    name: 'color',
    values: ['red', 'green', 'blue'],
  }
  expect(validate(100, metaToYup(enumEx))).toBeFalsy()
  expect(validate('red', metaToYup(enumEx))).toBeTruthy()
  expect(validate('green', metaToYup(enumEx))).toBeTruthy()
  expect(validate('blue', metaToYup(enumEx))).toBeTruthy()
  expect(validate('GREEN', metaToYup(enumEx))).toBeFalsy()
})

test('yup from array meta', () => {
  const arrNoEx: ArrayMT = { kind: 'array', of: noEx }
  expect(validate([], metaToYup(arrNoEx))).toBeTruthy()
  expect(validate([10, 20], metaToYup(arrNoEx))).toBeTruthy()
  expect(validate(['10', '20'], metaToYup(arrNoEx))).toBeFalsy()
})

test('yup from array meta with refinements', () => {
  const arrNoREx: ArrayMT = {
    kind: 'array',
    of: noEx,
    refinements: {
      maxArrayLength: 6,
      minArrayLength: 2,
    },
  }
  expect(validate([10, 20], metaToYup(arrNoREx))).toBeTruthy()
  expect(
    validate([10, 20, 30, 40, 50, 60, 70], metaToYup(arrNoREx)),
  ).toBeFalsy()
  expect(validate([], metaToYup(arrNoREx))).toBeFalsy()
})

test('yup from array with differently typed elements', () => {
  const arrStrEx: ArrayMT = { kind: 'array', of: strEx }
  expect(validate([], metaToYup(arrStrEx))).toBeTruthy()
  expect(validate([10, 20], metaToYup(arrStrEx))).toBeFalsy()
  expect(validate(['10', '20'], metaToYup(arrStrEx))).toBeTruthy()

  const arrBoolEx: ArrayMT = { kind: 'array', of: boolEx }
  expect(validate([], metaToYup(arrBoolEx))).toBeTruthy()
  expect(validate([true, false], metaToYup(arrBoolEx))).toBeTruthy()
  expect(validate(['10', '20'], metaToYup(arrBoolEx))).toBeFalsy()

  const arrDateEx: ArrayMT = { kind: 'array', of: dateEx }
  expect(validate([], metaToYup(arrDateEx))).toBeTruthy()
  expect(validate([new Date(), new Date()], metaToYup(arrDateEx))).toBeTruthy()
  expect(validate(['10', '20'], metaToYup(arrDateEx))).toBeFalsy()
})

test('yup from object meta', () => {
  const objEx: MT = {
    kind: 'object',
    properties: {
      name: strEx,
      price: noEx,
      inStock: boolEx,
    },
  }
  expect(
    validate({ name: 'iPhone', price: 700, inStock: true }, metaToYup(objEx)),
  ).toBeTruthy()
  expect(
    validate({ name: 'iPhone', price: 700, inStock: 10 }, metaToYup(objEx)),
  ).toBeFalsy()
  expect(
    validate({ name: 'iPhone', price: '700', inStock: 10 }, metaToYup(objEx)),
  ).toBeFalsy()
  expect(
    validate({ name: 100, price: '700', inStock: 10 }, metaToYup(objEx)),
  ).toBeFalsy()
})

test('yup from complex meta', () => {
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

  expect(validate(customer, metaToYup(customerMeta))).toBeTruthy()
})
