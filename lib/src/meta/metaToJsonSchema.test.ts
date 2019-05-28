import ajv from 'ajv'
import { metaToJsonSchema, PrimitiveMT } from './index'

const noEx: PrimitiveMT = { kind: 'number' }
const strEx: PrimitiveMT = { kind: 'string' }
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
