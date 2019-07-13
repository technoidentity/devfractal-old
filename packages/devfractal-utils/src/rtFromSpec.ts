import * as iots from 'io-ts'
import tcomb from 'tcomb'
import { buildObject } from './common'

function rtFromPrimitiveSpec(
  spec: iots.Mixed,
): tcomb.Irreducible<any> | tcomb.Enums {
  if (spec.name === 'Int') {
    return tcomb.Integer
  }

  if (spec instanceof iots.NumberType) {
    return tcomb.Number
  }

  if (spec instanceof iots.StringType) {
    return tcomb.String
  }

  // @TODO: create refinement type for iots.LiteralType?
  if (spec instanceof iots.BooleanType) {
    return tcomb.Boolean
  }

  if (spec instanceof iots.FunctionType) {
    return tcomb.Function
  }

  if (spec.name === 'Date') {
    return tcomb.Date
  }

  if (spec instanceof iots.KeyofType) {
    return tcomb.enums.of(Object.keys(spec.keys))
  }

  if (spec instanceof iots.NullType || spec instanceof iots.UndefinedType) {
    return tcomb.Nil
  }

  throw new Error(`Unsupported ${spec.name}`)
}

function rtFromObjectSpec<T extends iots.Props>(
  spec: iots.TypeC<T>,
  options: { readonly strict?: boolean } = { strict: true },
): tcomb.Struct<T> {
  return tcomb.struct(buildObject(spec.props, rtFromSpec), {
    name: spec.name,
    strict: options.strict,
  })
}

export function rtFromSpec(
  spec: iots.Mixed,
):
  | tcomb.Irreducible<any>
  | tcomb.Enums
  | tcomb.Struct<any>
  | tcomb.Tuple<any>
  | tcomb.Maybe<any> {
  if (
    spec instanceof iots.ReadonlyType ||
    spec instanceof iots.ExactType ||
    spec instanceof iots.RefinementType
  ) {
    return rtFromSpec(spec.type)
  }

  if (
    spec instanceof iots.ArrayType ||
    spec instanceof iots.ReadonlyArrayType
  ) {
    return tcomb.list(rtFromSpec(spec.type))
  }

  if (spec instanceof iots.AnyArrayType) {
    return tcomb.list(tcomb.Any)
  }

  if (spec instanceof iots.InterfaceType) {
    return rtFromObjectSpec(spec)
  }

  if (spec instanceof iots.IntersectionType) {
    return spec.types
      .map(rtFromObjectSpec)
      .reduce((acc: any, x: any) => ({ ...acc, ...x }))
  }

  if (spec instanceof iots.UnionType) {
    return rtFromSpec(spec.types[0])
  }

  if (spec instanceof iots.KeyofType) {
    return tcomb.enums(spec.keys)
  }

  if (spec instanceof iots.TupleType) {
    return tcomb.tuple(spec.types.map(rtFromSpec))
  }

  if (spec instanceof iots.PartialType) {
    return tcomb.struct(
      buildObject(spec.props, p => tcomb.maybe(rtFromSpec(p))),
      { name: spec.name },
    )
  }

  if (spec instanceof iots.StrictType) {
    return rtFromObjectSpec(spec.props, { strict: true })
  }

  return rtFromPrimitiveSpec(spec)
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
