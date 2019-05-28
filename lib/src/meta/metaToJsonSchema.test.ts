import ajv from 'ajv'
import { metaToJsonSchema, PrimitiveMT } from './index'

const noEx: PrimitiveMT = { kind: 'number' }

test('json schema from number meta', () => {
  expect(ajv().validate(metaToJsonSchema(noEx), 100)).toBeTruthy()
  expect(ajv().validate(metaToJsonSchema(noEx), '100')).toBeFalsy()
})
