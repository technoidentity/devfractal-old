import * as iots from 'io-ts'
import { DateType } from 'io-ts-types'
import tcomb from 'tcomb'

// tslint:disable no-use-before-declare

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
  options?: { readonly strict?: boolean },
) => tcomb.Struct<T> = (rt, options = { strict: true }) => {
  const draft: any = {}

  for (const prop of Object.keys(rt.props)) {
    draft[prop] = tcombFromRT(rt.props[prop])
  }
  return tcomb.struct(draft, { name: rt.name, strict: options.strict })
}

export const tcombFromRT: (value: iots.Mixed) => any = value => {
  if (value instanceof iots.ReadonlyType) {
    return tcombFromRT(value.type)
  }
  if (
    value instanceof iots.ArrayType ||
    value instanceof iots.ReadonlyArrayType
  ) {
    return tcomb.list(tcombFromRT(value.type))
  }

  if (value instanceof iots.InterfaceType) {
    return tcombFromObjectRT(value)
  }
  // if (value instanceof iots.PartialType) {
  //   return tcombFromObjectRT(value, { strict: false })
  // }
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
