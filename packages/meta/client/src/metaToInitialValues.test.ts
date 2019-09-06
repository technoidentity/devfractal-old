import { ArrayMT, EnumMT, Mixed, MT, PrimitiveMT } from 'meta-core'
import { metaToInitialValues } from './metaToInitialValues'

const noEx: PrimitiveMT = { kind: 'number' }
const strEx: PrimitiveMT = { kind: 'string' }
const boolEx: PrimitiveMT = { kind: 'boolean' }
const dateEx: PrimitiveMT = { kind: 'date' }

test('intialValues from number meta', () => {
  expect(metaToInitialValues(noEx)).toEqual(0)
})

test('initialValues from string meta', () => {
  expect(metaToInitialValues(strEx)).toEqual('')
})

test('initialValues from bool meta', () => {
  expect(metaToInitialValues(boolEx)).toBeFalsy()
})

test.skip('initialValues from date meta', () => {
  // https://codewithhugo.com/mocking-the-current-date-in-jest-tests/
  jest

    // tslint:disable-next-line: ban-ts-ignore
    // @ts-ignore
    .spyOn(global.Date, 'constructor')
    .mockImplementationOnce(() => new Date('2019-06-19T00:07:19.309Z'))
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
  const objEx: MT = {
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

  expect(metaToInitialValues(customerMeta)).toEqual({
    name: '',
    type: 'manager',
    addresses: [],
  })
})
