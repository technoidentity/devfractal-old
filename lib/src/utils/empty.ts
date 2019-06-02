import {
  ArrayType,
  BooleanType,
  InterfaceType,
  KeyofType,
  Mixed,
  NumberType,
  Props,
  ReadonlyArrayType,
  ReadonlyC,
  ReadonlyType,
  StringType,
  TypeC,
  TypeOf,
} from 'io-ts'
import { DateType } from 'io-ts-types'
import tcomb from 'tcomb'
import { invariant, nop, warning } from '../lib'
import { buildObject } from './common'

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

export function empty<T extends Props>(
  typeValue: ReadonlyC<TypeC<T>>,
  id?: keyof T,
): TypeOf<typeof typeValue> {
  const props: T = typeValue.type.props
  const draft: any = {}

  Object.keys(props).forEach(prop => {
    if (prop !== id) {
      if (props[prop] instanceof NumberType || props[prop].name === 'Int') {
        draft[prop] = 0
      } else if (props[prop] instanceof StringType) {
        draft[prop] = ''
      } else if (props[prop] instanceof BooleanType) {
        draft[prop] = false
        // @TODO: handle array and object
      } else if (props[prop] instanceof DateType) {
        draft[prop] = new Date()
      } else {
        const v: Mixed = props[prop]
        invariant(
          !(v instanceof InterfaceType || v instanceof ArrayType),
          `Everything must be readonly: ${v.name}`,
        )
        if (v instanceof KeyofType) {
          draft[prop] = Object.keys(v.keys)
        } else if (v instanceof ReadonlyType) {
          draft[prop] = empty(v)
        } else if (v instanceof ReadonlyArrayType) {
          draft[prop] = []
        } else {
          throw new Error(`Unknown type ${props[prop]}`)
        }
      }
    }
  })

  // warnProps(typeValue, value)
  return draft
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
