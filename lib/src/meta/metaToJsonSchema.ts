import { JSONSchema7Definition } from 'json-schema'
import { Mixed } from './types'

export function metaToJsonSchema(meta: Mixed): JSONSchema7Definition {
  switch (meta.kind) {
    case 'number':
      return { type: 'number' }
  }
  return true
}
