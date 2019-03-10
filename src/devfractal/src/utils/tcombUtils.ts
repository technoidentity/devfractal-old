import * as iots from 'io-ts'
import { DateType } from 'io-ts-types'
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

const tcombFromArrayValue: <T extends ReadonlyArray<any>>(
  value: T,
) => any = value =>
  value[0] !== undefined ? tcomb.list(tcombFromValue(value[0])) : tcomb.Array

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

const tcombFromPrimitiveRT: (value: iots.Mixed) => any = value => {
  if (value.name === 'Int') {
    return tcomb.Integer
  }
  if (value instanceof iots.NumberType) {
    return tcomb.Number
  }
  if (value instanceof iots.StringType) {
    return tcomb.String
  }
  // @TODO: create refinement type for iots.LiteralType?
  if (value instanceof iots.BooleanType) {
    return tcomb.Boolean
  }
  if (value instanceof iots.FunctionType) {
    return tcomb.Function
  }
  if (value instanceof DateType) {
    return tcomb.Date
  }
  if (value instanceof iots.KeyofType) {
    return tcomb.enums.of(Object.keys(value.keys))
  }
  if (value instanceof iots.NullType || value instanceof iots.UndefinedType) {
    return tcomb.Nil
  }

  throw new Error(`Unsupported ${value.name}`)
}

const tcombFromObjectRT: <T extends iots.Props>(
  rt: iots.TypeC<T>,
) => tcomb.Struct<T> = rt => {
  const draft: any = {}
  const props = rt.props
  for (const prop of Object.keys(props)) {
    draft[prop] = tcombFromRT(props[prop])
  }
  return tcomb.struct(draft, rt.name)
}

// tslint:disable readonly-array
export const tcombFromRT: (value: iots.Mixed) => any = value => {
  if (
    value instanceof iots.ArrayType ||
    value instanceof iots.ReadonlyArrayType
  ) {
    return tcomb.list(tcombFromRT(value.type))
  }
  if (value instanceof iots.ReadonlyType) {
    return tcombFromRT(value.type)
  }
  if (value instanceof iots.InterfaceType) {
    return tcombFromObjectRT(value)
  }
  if (value instanceof iots.TupleType) {
    // @TODO: definitely wrong!
    return tcomb.tuple(tcombFromRT(value.types))
  }
  if (value instanceof iots.PartialType) {
    // @TODO: almost definitely wrong!
    return tcomb.maybe(tcombFromRT(value.props))
  }
  if (value instanceof iots.StrictType) {
    // @TODO: may be wrong?
    return tcomb.struct(tcombFromRT(value.props), {
      name: value.name,
      strict: true,
    }) // wrong?
  }
  return tcombFromPrimitiveRT(value)
}

// const io = iots.type({
//   fizz: iots.type({ x: iots.number, y: iots.number }),
//   buzz: iots.array(iots.boolean),
// })
// const io = iots.type({
//   fizz: iots.type({ x: iots.string, y: iots.boolean, z: date }),
//   buzz: iots.array(iots.Int),
// })

// const io = iots.type({
//   d: date,
//   e: iots.keyof({ foo: 0, bar: 0 }),
//   a: iots.array(iots.string),
//   o: iots.type({ x: iots.number, y: iots.Int }),
//   o2: iots.type({
//     fizz: iots.array(iots.type({ buzz: iots.boolean })),
//   }),
// })

// const value = fake(io)
// const tc = tcombFromRT(io)
// console.log(tc(value))
