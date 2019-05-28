import tcomb from 'tcomb'
import { buildObject } from './common'

// tslint:disable no-use-before-declare

export function tcombFromPrimitiveValue(
  value: unknown,
):
  | tcomb.Irreducible<number>
  | tcomb.Irreducible<string>
  | tcomb.Irreducible<boolean>
  | tcomb.Irreducible<RegExp>
  | tcomb.Irreducible<Function>
  | tcomb.Irreducible<void | null>
  | tcomb.Irreducible<Error> {
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

export function tcombFromArrayValue<V, T extends ReadonlyArray<V>>(
  value: T,
): tcomb.List<ReadonlyArray<tcomb.Type<any>>> | tcomb.List<any> {
  return value[0] !== undefined
    ? tcomb.list(tcombFromValue(value[0]))
    : tcomb.list(tcomb.Any)
}

export function tcombFromObjectValue<T extends Object>(
  value: T,
): tcomb.Struct<T> {
  return tcomb.struct(buildObject(value, (_, v) => tcombFromValue(v)))
}

export function tcombFromValue<T>(
  value: T,
):
  | tcomb.Struct<T>
  | ReturnType<typeof tcombFromArrayValue>
  | ReturnType<typeof tcombFromPrimitiveValue> {
  if (tcomb.Array.is(value)) {
    return tcombFromArrayValue(value)
  }
  if (tcomb.Object.is(value)) {
    return tcombFromObjectValue(value)
  }
  return tcombFromPrimitiveValue(value)
}
