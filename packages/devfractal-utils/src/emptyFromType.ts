import {
  AnyArrayType,
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

function emptyFromPrimitive<T extends Mixed>(typeValue: T): TypeOf<T> {
  if (typeValue.name === 'Int' || typeValue instanceof NumberType) {
    return 0
  }
  if (typeValue instanceof StringType) {
    return ''
  }
  if (typeValue instanceof BooleanType) {
    return false
  }
  if (typeValue.name === 'Date') {
    return new Date()
  }
  if (typeValue instanceof KeyofType) {
    return Object.keys(typeValue.keys)[0]
  }
  if (typeValue instanceof FunctionType) {
    return nop
  }
  if (typeValue instanceof LiteralType) {
    return typeValue.value
  }
  if (typeValue instanceof NullType) {
    // tslint:disable-next-line: no-null-keyword
    return null
  }
  if (typeValue instanceof UndefinedType || typeValue instanceof VoidType) {
    return undefined
  }

  throw new Error(`Unsupported type: ${typeValue.name}`)
}

function emptyFromObject<T extends Props>(
  typeValue: TypeC<T>,
): TypeOf<TypeC<T>> {
  return buildObject(typeValue.props, empty)
}

export function empty<T extends Mixed>(typeValue: T): TypeOf<T> {
  if (
    typeValue instanceof ExactType ||
    typeValue instanceof ReadonlyType ||
    typeValue instanceof RefinementType
  ) {
    return empty(typeValue.type)
  }

  if (typeValue instanceof InterfaceType) {
    return emptyFromObject(typeValue)
  }

  if (
    typeValue instanceof ReadonlyArrayType ||
    typeValue instanceof ArrayType ||
    typeValue instanceof AnyArrayType
  ) {
    return []
  }

  if (typeValue instanceof IntersectionType) {
    return typeValue.types
      .map(empty)
      .reduce((acc: any, x: any) => ({ ...acc, ...x }))
  }

  if (typeValue instanceof UnionType) {
    return empty(typeValue.types[0])
  }

  if (typeValue instanceof PartialType) {
    return buildObject(typeValue.props, empty)
  }
  // if (typeValue instanceof TaggedUnionType) {
  //   return typeValue.types
  //     .map(empty)
  //     .reduce((acc: any, x: any) => ({ ...acc, ...x }))
  // }
  if (typeValue instanceof TupleType) {
    return typeValue.types.map(empty)
  }
  return emptyFromPrimitive(typeValue)
}
