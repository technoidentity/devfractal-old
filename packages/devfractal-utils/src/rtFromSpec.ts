import * as iots from 'io-ts'
import tcomb from 'tcomb'
import { keys } from './common'

const rtFromPrimitiveSpec: (
  value: iots.Mixed,
) =>
  | tcomb.Irreducible<number>
  | tcomb.Irreducible<string>
  | tcomb.Irreducible<boolean>
  | tcomb.Irreducible<Function>
  | tcomb.Irreducible<Date>
  | tcomb.Irreducible<void | null>
  | tcomb.Enums = value => {
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
  if (value.name === 'Date') {
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

const rtFromObjectSpec: <T extends iots.Props>(
  rt: iots.TypeC<T>,
  options?: { readonly strict?: boolean },
) => tcomb.Struct<T> = (rt, options = { strict: true }) => {
  const draft: any = {}

  for (const prop of keys(rt.props)) {
    draft[prop] = rtFromSpec(rt.props[prop])
  }
  return tcomb.struct(draft, { name: rt.name, strict: options.strict })
}

export const rtFromSpec: (
  value: iots.Mixed,
) =>
  | ReturnType<typeof rtFromObjectSpec>
  | ReturnType<typeof rtFromPrimitiveSpec>
  | tcomb.Tuple<any>
  | tcomb.Maybe<any>
  | tcomb.Struct<any> = value => {
  if (value instanceof iots.ReadonlyType) {
    return rtFromSpec(value.type)
  }
  if (
    value instanceof iots.ArrayType ||
    value instanceof iots.ReadonlyArrayType
  ) {
    return tcomb.list(rtFromSpec(value.type))
  }

  if (value instanceof iots.InterfaceType) {
    return rtFromObjectSpec(value)
  }
  // if (value instanceof iots.PartialType) {
  //   return tcombFromObjectRT(value, { strict: false })
  // }
  if (value instanceof iots.TupleType) {
    // @TODO: definitely wrong!
    return tcomb.tuple(value.types.map(rtFromSpec))
  }
  if (value instanceof iots.PartialType) {
    // @TODO: almost definitely wrong!
    return tcomb.maybe(value.props.map(rtFromSpec))
  }
  if (value instanceof iots.StrictType) {
    // @TODO: may be wrong?
    return tcomb.struct(value.props.map(rtFromSpec), {
      name: value.name,
      strict: true,
    }) // wrong?
  }
  return rtFromPrimitiveSpec(value)
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
