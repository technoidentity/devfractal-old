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
import t from 'tcomb'
import { invariant, warning } from './assertions'
import { nop, keys } from './common'

const emptyFromPrimitiveValue: (v: unknown) => any = v => {
  if (t.Number.is(v)) {
    return 0
  }
  if (t.String.is(v)) {
    return ''
  }
  if (t.Boolean.is(v)) {
    return false
  }
  if (t.Nil.is(v)) {
    return v
  }
  if (t.Date.is(v)) {
    return new Date()
  }
  if (t.Function.is(v)) {
    return nop
  }
  warning(false, `Unsupported value ${v}`)
}

const emptyFromObjectValue: <T extends Object>(value: T) => T = value => {
  const draft: any = {}
  for (const k of keys(value)) {
    draft[k] = emptyFromPrimitiveValue(value[k])
  }
  return draft
}

export const emptyFromValue: <T>(value: T) => T = value => {
  if (t.Array.is(value)) {
    // may be if array contains object and such, use empty one those?
    return []
  }
  if (t.Object.is(value)) {
    return emptyFromObjectValue(value)
  }
  return emptyFromPrimitiveValue(value)
}

export function emptyFromType<T extends Props>(
  typeValue: ReadonlyC<TypeC<T>>,
  id?: keyof T,
): TypeOf<typeof typeValue> {
  const props: T = typeValue.type.props
  const draft: any = {}

  keys(props).forEach(prop => {
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
          draft[prop] = Object.keys(v.keys)[0]
        } else if (v instanceof ReadonlyType) {
          draft[prop] = emptyFromType(v, undefined)
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
