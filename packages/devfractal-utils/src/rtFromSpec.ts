import * as iots from 'io-ts'
import tcomb from 'tcomb'
import { buildObject } from './common'
import { Literal } from './tcombRefinements'

function rtFromObjectSpec<T extends iots.Props>(
  spec: iots.TypeC<T>,
  options: { readonly strict: boolean } = { strict: false },
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
  if (spec.name === 'Int') {
    return tcomb.Integer
  }

  if (spec instanceof iots.NumberType) {
    return tcomb.Number
  }

  if (spec instanceof iots.StringType) {
    return tcomb.String
  }

  if (spec instanceof iots.LiteralType) {
    return Literal(spec.value)
  }

  if (spec instanceof iots.BooleanType) {
    return tcomb.Boolean
  }

  if (spec.name === 'Date') {
    return tcomb.Date
  }

  if (spec instanceof iots.KeyofType) {
    return tcomb.enums(spec.keys)
  }

  if (spec instanceof iots.FunctionType) {
    return tcomb.Function
  }

  // literal type?

  if (
    spec instanceof iots.NullType ||
    spec instanceof iots.UndefinedType ||
    spec instanceof iots.VoidType
  ) {
    return tcomb.Nil
  }

  if (spec instanceof iots.AnyType) {
    return tcomb.Any
  }

  if (spec instanceof iots.InterfaceType) {
    return rtFromObjectSpec(spec)
  }

  if (spec instanceof iots.PartialType) {
    return tcomb.struct(
      buildObject(spec.props, p => tcomb.maybe(rtFromSpec(p))),
      { name: spec.name },
    )
  }

  if (spec instanceof iots.ReadonlyType) {
    return rtFromSpec(spec.type)
  }

  if (spec instanceof iots.ExactType) {
    return rtFromObjectSpec(spec.type, { strict: true })
  }

  if (spec instanceof iots.RefinementType) {
    return tcomb.refinement(rtFromSpec(spec.type), spec.predicate)
  }

  if (spec instanceof iots.StrictType) {
    return rtFromObjectSpec(spec.props, { strict: true })
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

  if (spec instanceof iots.IntersectionType) {
    return tcomb.intersection(spec.types.map(rtFromSpec))
  }

  if (spec instanceof iots.UnionType) {
    return tcomb.union(spec.types.map(rtFromSpec))
  }

  if (spec instanceof iots.TupleType) {
    return tcomb.tuple(spec.types.map(rtFromSpec))
  }

  throw new Error(`Unsupported ${spec.name}`)
}
