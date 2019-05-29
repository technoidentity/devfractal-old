import ajv from 'ajv'
import { metaToJsonSchema, PrimitiveMT } from './index'

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
