import { MT } from 'meta'
import { buildObject } from 'utils'

// tslint:disable typedef switch-default

export const metaToInitialValues: (meta: MT) => any = meta => {
  switch (meta.kind) {
    case 'number':
      return 0

    case 'string':
      return ''

    case 'boolean':
      return false

    case 'date':
      return new Date()

    case 'enum':
      return meta.values[0]

    case 'array':
      return []

    case 'object':
      return buildObject(meta.properties, key =>
        metaToInitialValues(meta.properties[key]),
      )
  }
}
