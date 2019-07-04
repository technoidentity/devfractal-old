import tcomb from 'tcomb'
import { warning } from './assertions'
import { buildObject } from './common'

function emptyFromPrimitiveValue(v: unknown): any {
  if (tcomb.Number.is(v)) {
    return 0
  }

  if (tcomb.String.is(v)) {
    return ''
  }

  if (tcomb.Boolean.is(v)) {
    return false
  }

  if (tcomb.Nil.is(v)) {
    return v
  }

  if (tcomb.Date.is(v)) {
    return new Date()
  }

  warning(false, `Unsupported value ${v}`)
}

function emptyFromObjectValue<T extends Object>(value: T): T {
  return buildObject(value, (_, v) => emptyFromPrimitiveValue(v))
}

export const emptyFromValue: <T>(value: T) => T = value => {
  if (tcomb.Array.is(value)) {
    return []
  }

  if (tcomb.Object.is(value)) {
    return emptyFromObjectValue(value)
  }

  return emptyFromPrimitiveValue(value)
}
