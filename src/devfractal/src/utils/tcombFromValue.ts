import tcomb from 'tcomb'

// tslint:disable no-use-before-declare

const tcombFromPrimitiveValue: (
  value: unknown,
) => tcomb.Irreducible<any> = value => {
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

// This better typing of no use in practice!
const tcombFromArrayValue: <V, T extends ReadonlyArray<V>>(
  value: T,
) => tcomb.List<tcomb.Type<V>> = value =>
  value[0] !== undefined
    ? tcomb.list(tcombFromValue(value[0]))
    : tcomb.list(tcomb.Any)

const tcombFromObjectValue: <T extends object>(
  value: T,
) => tcomb.Struct<T> = value => {
  const draft: any = {}
  for (const k of Object.keys(value)) {
    draft[k] = tcombFromValue(value[k])
  }
  return tcomb.struct(draft)
}

export const tcombFromValue: (value: unknown) => any = value => {
  if (tcomb.Array.is(value)) {
    return tcombFromArrayValue(value)
  }
  if (tcomb.Object.is(value)) {
    return tcombFromObjectValue(value)
  }
  return tcombFromPrimitiveValue(value)
}
