import {
  ArrayType,
  BooleanType,
  InterfaceType,
  KeyofType,
  Mixed,
  NumberType,
  Props,
  readonly,
  ReadonlyArrayType,
  ReadonlyC,
  ReadonlyType,
  StringType,
  TypeC,
  TypeOf,
} from 'io-ts'
import { DateType } from 'io-ts-types'
import tcomb from 'tcomb'
import { nop, warning } from '../lib'
import { buildObject, keys } from './common'

export function emptyFromPrimitiveValue(v: unknown): any {
  if (tcomb.Number.is(v)) {
    return 0
  }
  if (tcomb.String.is(v)) {
    return ''
  }
  if (tcomb.Boolean.is(v)) {
    return false
  }
  if (tcomb.Nil.is(v)) {
    return v
  }
  if (tcomb.Date.is(v)) {
    return new Date()
  }
  if (tcomb.Function.is(v)) {
    return nop
  }
  warning(false, `Unsupported value ${v}`)
}

export function emptyFromObjectValue<T extends Object>(value: T): T {
  return buildObject(value, (_, v) => emptyFromPrimitiveValue(v))
}

export const emptyFromValue: <T>(value: T) => T = value => {
  if (tcomb.Array.is(value)) {
    // may be if array contains object and such, use empty one those?
    return []
  }
  if (tcomb.Object.is(value)) {
    return emptyFromObjectValue(value)
  }
  return emptyFromPrimitiveValue(value)
}

export function emptyPrimitive<T extends Mixed>(
  typeValue: T,
): TypeOf<typeof typeValue> {
  if (typeValue.name === 'Int' || typeValue instanceof NumberType) {
    return 0
  }
  if (typeValue instanceof StringType) {
    return ''
  }
  if (typeValue instanceof BooleanType) {
    return false
  }
  if (typeValue instanceof DateType) {
    return new Date()
  }
  if (typeValue instanceof KeyofType) {
    return Object.keys(typeValue.keys)
  }
  throw new Error(`Unsupported type: ${typeValue.name}`)
}

export function emptyFromType<T extends Props>(
  typeValue: ReadonlyC<TypeC<T>>,
  id?: keyof T,
): TypeOf<typeof typeValue> {
  const props: T = typeValue.type.props
  const draft: any = {}
  keys(props).forEach(prop => {
    if (prop !== id) {
      draft[prop] = empty(props[prop])
    }
  })
  return draft
}

export function empty<T extends Mixed>(
  typeValue: T,
  id?: T extends Props ? keyof T : any,
): TypeOf<typeof typeValue> {
  if (typeValue instanceof ReadonlyType) {
    return emptyFromType(typeValue, id)
  }
  if (typeValue instanceof InterfaceType) {
    return emptyFromType(readonly(typeValue), id)
  }
  if (
    typeValue instanceof ReadonlyArrayType ||
    typeValue instanceof ArrayType
  ) {
    return []
  }
  return emptyPrimitive(typeValue)
}

// console.log(
//   emptyFromType(
//     t.readonly(
//       t.type({
//         x: t.number,
//         d: date,
//         e: t.keyof({ foo: 0, bar: 0 }),
//         a: t.readonlyArray(t.string),
//         o: t.readonly(t.type({ x: t.number, y: t.number })),
//         o2: t.readonly(
//           t.type({
//             fizz: t.readonly(t.type({ buzz: t.boolean })),
//           }),
//         ),
//       }),
//     ),
//   ),
// )
