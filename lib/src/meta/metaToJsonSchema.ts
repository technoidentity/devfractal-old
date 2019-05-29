import { JSONSchema7, JSONSchema7Definition } from 'json-schema'
import { Mixed, NumberRefinements, StringRefinements } from './types'

// tslint:disable no-object-mutation

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

function toJsonSchemaStringRefinements(r: StringRefinements): JSONSchema7 {
  const schema: JSONSchema7 = {}

  if (r.email) {
    schema.format = 'email'
  }
  if (r.url) {
    schema.format = 'uri'
  }
  if (r.maxStringLength) {
    schema.maxLength = r.maxStringLength
  }
  if (r.minStringLength) {
    schema.minLength = r.minStringLength
  }
  if (r.length) {
    schema.maxLength = r.length
  }

  return schema
}

export function metaToJsonSchema(meta: Mixed): JSONSchema7Definition {
  switch (meta.kind) {
    case 'number':
      return meta.refinements
        ? { type: 'number', ...toJsonSchemaNumberRefinements(meta.refinements) }
        : { type: 'number' }

    case 'string':
      return meta.refinements
        ? { type: 'string', ...toJsonSchemaStringRefinements(meta.refinements) }
        : { type: 'string' }

    case 'boolean':
      return { type: 'boolean' }
  }
  return true
}
