import { Mixed } from 'meta-core'
import { buildObject } from 'technoidentity-utils'

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
      return buildObject(meta.properties, (_, key) =>
        metaToInitialValues(meta.properties[key]),
      )
  }
}
