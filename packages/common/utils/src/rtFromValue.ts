import tcomb from 'tcomb'
import { buildObject } from './common'

function rtFromPrimitiveValue(value: unknown): tcomb.Irreducible<any> {
  if (tcomb.Integer.is(value)) {
    return tcomb.Integer
  }
  if (tcomb.Number.is(value)) {
    return tcomb.Number
  }
  if (tcomb.String.is(value)) {
    return tcomb.String
  }
  if (tcomb.Boolean.is(value)) {
    return tcomb.Boolean
  }
  if (tcomb.RegExp.is(value)) {
    return tcomb.RegExp
  }
  if (tcomb.Function.is(value)) {
    return tcomb.Function
  }
  if (tcomb.Error.is(value)) {
    return tcomb.Error
  }
  if (tcomb.Nil.is(value)) {
    return tcomb.Nil
  }

  throw new Error(`Unsupported #{value}`)
}

function rtFromArrayValue<V, T extends ReadonlyArray<V>>(
  value: T,
): tcomb.List<ReadonlyArray<tcomb.Type<any>>> | tcomb.List<any> {
  return value[0] !== undefined
    ? tcomb.list(rtFromValue(value[0]))
    : tcomb.list(tcomb.Any)
}

function rtFromObjectValue<T extends {}>(value: T): tcomb.Struct<T> {
  return tcomb.struct(buildObject(value, rtFromValue))
}

export function rtFromValue<T>(value: T): tcomb.Type<any> {
  if (tcomb.Array.is(value)) {
    return rtFromArrayValue(value)
  }

  if (tcomb.Object.is(value)) {
    return rtFromObjectValue(value)
  }

  return rtFromPrimitiveValue(value)
}
