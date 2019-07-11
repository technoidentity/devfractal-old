import {
  ArrayType,
  BooleanType,
  InterfaceType,
  KeyofType,
  Mixed,
  NumberType,
  Props,
  ReadonlyArrayType,
  ReadonlyType,
  StringType,
  TypeC,
  TypeOf,
} from 'io-ts'

import { buildObject } from './common'

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
  throw new Error(`Unsupported type: ${typeValue.name}`)
}

function emptyFromObject<T extends Props>(
  typeValue: TypeC<T>,
): TypeOf<TypeC<T>> {
  return buildObject(typeValue.props, emptyFromType)
}

export function emptyFromType<T extends Mixed>(typeValue: T): TypeOf<T> {
  if (typeValue instanceof ReadonlyType) {
    return emptyFromObject(typeValue.type)
  }
  if (typeValue instanceof InterfaceType) {
    return emptyFromObject(typeValue)
  }
  if (
    typeValue instanceof ReadonlyArrayType ||
    typeValue instanceof ArrayType
  ) {
    return []
  }
  return emptyFromPrimitive(typeValue)
}
