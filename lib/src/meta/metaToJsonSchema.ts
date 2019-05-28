import { JSONSchema7, JSONSchema7Definition } from 'json-schema'
import { Mixed, NumberRefinements } from './types'

function toJsonSchemaNumberRefinements(r: NumberRefinements): JSONSchema7 {
  const schema: JSONSchema7 = {}

  if (r.integer) {
    schema.type = 'integer'
  }
  if (r.positive) {
    schema.minimum = 0
  }
  if (r.negative) {
    schema.exclusiveMaximum = 0
  }
  if (r.max) {
    schema.maximum = r.max
  }
  if (r.min) {
    schema.minimum = r.min
  }

  return schema
}

export function metaToJsonSchema(meta: Mixed): JSONSchema7Definition {
  switch (meta.kind) {
    case 'number':
      return meta.refinements
        ? { type: 'number', ...toJsonSchemaNumberRefinements(meta.refinements) }
        : { type: 'number' }
  }
  return true
}
