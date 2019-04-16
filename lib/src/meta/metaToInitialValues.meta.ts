import {
  ArrayMT,
  EnumMT,
  metaToInitialValues,
  MT,
  ObjectMT,
  SimpleMT,
} from './index'

const noEx: SimpleMT = { kind: 'number' }
const strEx: SimpleMT = { kind: 'string' }
const boolEx: SimpleMT = { kind: 'boolean' }
const dateEx: SimpleMT = { kind: 'date' }

test('intialValues from number meta', () => {
  expect(metaToInitialValues(noEx)).toEqual(0)
})

test('initialValues from string meta', () => {
  expect(metaToInitialValues(strEx)).toEqual('')
})

test('initialValues from bool meta', () => {
  expect(metaToInitialValues(boolEx)).toBeFalsy()
})

test('initialValues from date meta', () => {
  expect(metaToInitialValues(dateEx)).toEqual(new Date())
})

test('initialValues from enum meta', () => {
  const enumEx: EnumMT = {
    kind: 'enum',
    name: 'color',
    values: ['red', 'green', 'blue'],
  }
  expect(metaToInitialValues(enumEx)).toEqual('red')
})

test('initialValues from array meta', () => {
  const arrNoEx: ArrayMT = { kind: 'array', of: noEx }
  expect(metaToInitialValues(arrNoEx)).toEqual([])
})

test('initialValues from object meta', () => {
  const objEx: ObjectMT = {
    kind: 'object',
    properties: {
      name: strEx,
      price: noEx,
      inStock: boolEx,
    },
  }
  expect(metaToInitialValues(objEx)).toEqual({
    name: '',
    price: 0,
    inStock: false,
  })
})

test('initialValues from complex meta', () => {
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

  expect(metaToInitialValues(customerMeta)).toEqual({
    name: '',
    type: '',
    addresses: [],
  })
})