import { Either } from 'fp-ts/lib/Either'
import {
  Array,
  ArrayType,
  boolean,
  BooleanType,
  Errors,
  InterfaceType,
  KeyofType,
  Mixed,
  number,
  NumberType,
  Props,
  ReadonlyArrayType,
  ReadonlyC,
  ReadonlyType,
  string,
  StringType,
  TypeC,
  TypeOf,
} from 'io-ts'
import { reporter } from 'io-ts-reporters'
import { DateType } from 'io-ts-types'
import { String } from 'tcomb'
import { invariant } from './invariant'
export type VT<T extends Props> = ReadonlyC<TypeC<T>>
export type TVT<T extends Props> = TypeOf<VT<T>>

export const rejected: <T>(
  decoded: Either<Errors, T> | string,
) => Promise<T> = async decoded =>
  Promise.reject(
    new Error(String.is(decoded) ? decoded : reporter(decoded).join('\n')),
  )

export const toPromise: <T>(
  decoded: Either<Errors, T>,
) => Promise<T> = async decoded =>
  decoded.isRight() ? decoded.value : rejected(decoded)

const emptyValue: (v: unknown) => unknown = v => {
  if (number.is(v)) {
    return 0
  }
  if (string.is(v)) {
    return ''
  }
  if (boolean.is(v)) {
    return false
  }
  if (Array.is(v)) {
    return []
  }
  return {}
}

// tslint:disable no-object-mutation
export const emptyFromValue: <T extends object>(value: T) => T = value => {
  const result: any = {}
  Object.keys(value).forEach(k => (result[k] = emptyValue(value[k])))
  return result
}

export function emptyFromType<T extends Props>(
  typeValue: ReadonlyC<TypeC<T>>,
  id?: keyof T,
): TypeOf<typeof typeValue> {
  const props: T = typeValue.type.props
  const value: any = {}

  Object.keys(props).forEach(prop => {
    if (prop !== id) {
      if (props[prop] instanceof NumberType) {
        value[prop] = 0
      } else if (props[prop] instanceof StringType) {
        value[prop] = ''
      } else if (props[prop] instanceof BooleanType) {
        value[prop] = false
        // @TODO: handle array and object
      } else if (props[prop] instanceof DateType) {
        value[prop] = new Date()
      } else {
        const v: Mixed = props[prop]
        invariant(
          !(v instanceof InterfaceType || v instanceof ArrayType),
          `Everything must be readonly: ${v.name}`,
        )
        if (v instanceof KeyofType) {
          value[prop] = Object.keys(v.keys)[0]
        } else if (v instanceof ReadonlyType) {
          value[prop] = emptyFromType(v, undefined)
        } else if (v instanceof ReadonlyArrayType) {
          value[prop] = []
        } else {
          throw new Error(`Unknown type ${props[prop]}`)
        }
      }
    }
  })

  // warnProps(typeValue, value)

  return value
}
// tslint:disable no-object-mutation
