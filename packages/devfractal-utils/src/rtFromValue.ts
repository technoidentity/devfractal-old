import tcomb from 'tcomb'
import { keys } from './common'

const rtFromPrimitiveValue: (
  value: unknown,
) =>
  | tcomb.Irreducible<number>
  | tcomb.Irreducible<string>
  | tcomb.Irreducible<boolean>
  | tcomb.Irreducible<RegExp>
  | tcomb.Irreducible<Function>
  | tcomb.Irreducible<void | null>
  | tcomb.Irreducible<Error> = value => {
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

const rtFromArrayValue: <V, T extends ReadonlyArray<V>>(
  value: T,
) => tcomb.List<ReadonlyArray<tcomb.Type<any>>> | tcomb.List<any> = value =>
  value[0] !== undefined
    ? tcomb.list(rtFromValue(value[0]))
    : tcomb.list(tcomb.Any)

const rtFromObjectValue: <T extends Object & object>(
  value: T,
) => tcomb.Struct<T> = value => {
  const draft: any = {}
  for (const k of keys(value)) {
    draft[k] = rtFromValue(value[k])
  }
  return tcomb.struct(draft)
}

export const rtFromValue: <T>(
  value: T,
) =>
  | tcomb.Struct<T>
  | ReturnType<typeof rtFromArrayValue>
  | ReturnType<typeof rtFromPrimitiveValue> = value => {
  if (tcomb.Array.is(value)) {
    return rtFromArrayValue(value)
  }
  if (tcomb.Object.is(value)) {
    return rtFromObjectValue(value)
  }
  return rtFromPrimitiveValue(value)
}
