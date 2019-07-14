import * as t from 'io-ts'
import { date } from 'io-ts-types/lib/date'
import { warn } from './assertions'
import { buildObject, today } from './common'

function emptyFromPrimitiveValue(v: unknown): any {
  if (t.number.is(v)) {
    return 0
  }

  if (t.string.is(v)) {
    return ''
  }

  if (t.boolean.is(v)) {
    return false
  }

  if (t.undefined.is(v) || t.null.is(v)) {
    return v
  }

  if (date.is(v)) {
    return today()
  }

  warn(false, `Unsupported value ${v}`)
}

function emptyFromObjectValue<T extends Object>(value: T): T {
  return buildObject(value, emptyFromValue) as T
}

export const emptyFromValue: <T>(value: T) => T = value => {
  if (t.Array.is(value)) {
    return []
  }

  if (t.object.is(value)) {
    return emptyFromObjectValue(value)
  }

  return emptyFromPrimitiveValue(value)
}
