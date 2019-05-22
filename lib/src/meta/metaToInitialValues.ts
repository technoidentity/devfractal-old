import { buildObject } from '../lib'
import { Mixed } from './index'

// tslint:disable typedef switch-default

export const metaToInitialValues: (meta: Mixed) => any = meta => {
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
      return buildObject(meta.properties, metaToInitialValues)
  }
}
