import {
  AnyArrayType,
  AnyType,
  ArrayType,
  BooleanType,
  ExactType,
  FunctionType,
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
  TypeOf,
  UndefinedType,
  UnionType,
  VoidType,
} from 'io-ts'
import { buildObject, nop } from './common'

function emptyFromPrimitive<T extends Mixed>(spec: T): TypeOf<T> {
  if (spec.name === 'Int' || spec instanceof NumberType) {
    return 0
  }
  if (spec instanceof StringType) {
    return ''
  }
  if (spec instanceof BooleanType) {
    return false
  }
  if (spec.name === 'Date') {
    return new Date()
  }
  if (spec instanceof KeyofType) {
    return Object.keys(spec.keys)[0]
  }
  if (spec instanceof FunctionType) {
    return nop
  }
  if (spec instanceof LiteralType) {
    return spec.value
  }
  if (spec instanceof NullType) {
    // tslint:disable-next-line: no-null-keyword
    return null
  }
  if (spec instanceof UndefinedType || spec instanceof VoidType) {
    return undefined
  }

  throw new Error(`Unsupported type: ${spec.name}`)
}

function emptyFromObject<T extends Props>(spec: TypeC<T>): TypeOf<TypeC<T>> {
  return buildObject(spec.props, empty)
}

export function empty<T extends Mixed>(spec: T): TypeOf<T> {
  if (spec instanceof AnyType) {
    return ''
  }

  if (
    spec instanceof ExactType ||
    spec instanceof ReadonlyType ||
    spec instanceof RefinementType
  ) {
    return empty(spec.type)
  }

  if (spec instanceof ExactType) {
    return emptyFromObject(spec.type)
  }

  if (spec instanceof InterfaceType) {
    return emptyFromObject(spec)
  }

  if (
    spec instanceof ReadonlyArrayType ||
    spec instanceof ArrayType ||
    spec instanceof AnyArrayType
  ) {
    return []
  }

  if (spec instanceof IntersectionType) {
    return spec.types
      .map(empty)
      .reduce((acc: any, x: any) => ({ ...acc, ...x }))
  }

  if (spec instanceof UnionType) {
    return empty(spec.types[0])
  }

  if (spec instanceof PartialType) {
    return buildObject(spec.props, empty)
  }
  // if (spec instanceof TaggedUnionType) {
  //   return spec.types
  //     .map(empty)
  //     .reduce((acc: any, x: any) => ({ ...acc, ...x }))
  // }
  if (spec instanceof TupleType) {
    return spec.types.map(empty)
  }
  return emptyFromPrimitive(spec)
}
