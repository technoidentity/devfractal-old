import tcomb from 'tcomb'
import {
  AnyArrayType,
  ArrayType,
  BooleanType,
  ExactType,
  InterfaceType,
  IntersectionType,
  KeyofType,
  LiteralType,
  Mixed,
  NullType,
  NumberType,
  PartialType,
  Props,
  ReadonlyArrayType,
  ReadonlyType,
  RefinementType,
  StringType,
  TupleType,
  TypeC,
  UndefinedType,
  UnionType,
  UnknownType,
  VoidType,
} from 'technoidentity-spec'
import { buildObject } from './common'
import { Literal } from './tcombRefinements'

function rtFromObjectSpec<T extends Props>(
  spec: TypeC<T>,
  options: { readonly strict: boolean } = { strict: false },
): tcomb.Struct<T> {
  return tcomb.struct(buildObject(spec.props, rtFromSpec), {
    name: spec.name,
    strict: options.strict,
  })
}

export function rtFromSpec(
  spec: Mixed,
):
  | tcomb.Irreducible<any>
  | tcomb.Enums
  | tcomb.Struct<any>
  | tcomb.Tuple<any>
  | tcomb.Maybe<any> {
  if (spec.name === 'Int') {
    return tcomb.Integer
  }

  if (spec instanceof NumberType) {
    return tcomb.Number
  }

  if (spec instanceof StringType) {
    return tcomb.String
  }

  if (spec instanceof LiteralType) {
    return Literal(spec.value)
  }

  if (spec instanceof BooleanType) {
    return tcomb.Boolean
  }

  if (spec.name === 'Date') {
    return tcomb.Date
  }

  if (spec.name === 'DateFromISOString') {
    return tcomb.Date
  }

  if (spec instanceof KeyofType) {
    return tcomb.enums(spec.keys)
  }

  // TODO: literal type?

  if (
    spec instanceof NullType ||
    spec instanceof UndefinedType ||
    spec instanceof VoidType
  ) {
    return tcomb.Nil
  }

  if (spec instanceof UnknownType) {
    return tcomb.Any // this looks wrong, but is it?
  }

  if (spec instanceof InterfaceType) {
    return rtFromObjectSpec(spec)
  }

  if (spec instanceof PartialType) {
    return tcomb.struct(
      buildObject(spec.props, p => tcomb.maybe(rtFromSpec(p))),
      { name: spec.name },
    )
  }

  if (spec instanceof ReadonlyType) {
    return rtFromSpec(spec.type)
  }

  if (spec instanceof ExactType) {
    return rtFromObjectSpec(spec.type, { strict: true })
  }

  if (spec instanceof RefinementType) {
    return tcomb.refinement(rtFromSpec(spec.type), spec.predicate)
  }

  if (spec instanceof ArrayType || spec instanceof ReadonlyArrayType) {
    return tcomb.list(rtFromSpec(spec.type))
  }

  if (spec instanceof AnyArrayType) {
    return tcomb.list(tcomb.Any)
  }

  if (spec instanceof IntersectionType) {
    return tcomb.intersection(spec.types.map(rtFromSpec))
  }

  if (spec instanceof UnionType) {
    return tcomb.union(spec.types.map(rtFromSpec))
  }

  if (spec instanceof TupleType) {
    return tcomb.tuple(spec.types.map(rtFromSpec))
  }

  throw new Error(`Unsupported ${spec.name}`)
}
