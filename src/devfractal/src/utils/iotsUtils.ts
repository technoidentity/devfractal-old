import Chance from 'chance'
import { Either } from 'fp-ts/lib/Either'
import * as iots from 'io-ts'
import {
  Array,
  ArrayC,
  ArrayType,
  BooleanType,
  Errors,
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
import { reporter } from 'io-ts-reporters'
import { DateType } from 'io-ts-types'
import { String } from 'tcomb'
import { invariant, warning } from './internal'

export const typeInvariant: <Type extends Mixed, Value extends TypeOf<Type>>(
  type: Type,
  args: Value,
) => Value = (type, args) => {
  invariant(type.is(args), reporter(type.decode(args)).join('\n'))
  return args
}

export const typeWarning: <Type extends Mixed, Value extends TypeOf<Type>>(
  type: Type,
  args: Value,
) => Value = (type, args) => {
  warning(type.is(args), reporter(type.decode(args)).join('\n'))
  return args
}

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
  if (iots.number.is(v)) {
    return 0
  }
  if (iots.string.is(v)) {
    return ''
  }
  if (iots.boolean.is(v)) {
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
      if (props[prop] instanceof NumberType || props[prop].name === 'Int') {
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

const chance: Chance.Chance = new Chance()

// tslint:disable typedef no-use-before-declare

export const defaultOptions = {
  integer: { min: 100, max: 1000 },
  floating: { min: 0, max: 100, fixed: 2 },
  sentence: { words: 4 },
  array: { minLength: 0, maxLength: 6 },
}

type FakeOptions = typeof defaultOptions

const fakeFloat: (options: FakeOptions) => number = options =>
  chance.bool()
    ? chance.floating(options.floating)
    : chance.integer(options.integer)

const fakePrimitive: <T extends Mixed>(
  typeValue: T,
  options: FakeOptions,
) => TypeOf<typeof typeValue> = (typeValue, options) => {
  if (typeValue instanceof NumberType) {
    return fakeFloat(options)
  }
  if (typeValue.name === 'Int') {
    return chance.integer(options.integer)
  }
  if (typeValue instanceof StringType) {
    return chance.sentence(options.sentence)
  }
  if (typeValue instanceof BooleanType) {
    return chance.bool()
  }
  if (typeValue instanceof DateType) {
    return chance.date()
  }
  if (typeValue instanceof KeyofType) {
    return chance.pickone(Object.keys(typeValue.keys))
  }
  throw new Error(`Unsupported type: ${typeValue.name}`)
}

export const fakeArrayFromType: <T extends Mixed>(
  typeValue: T,
  options: FakeOptions,
) => TypeOf<typeof typeValue> = (typeValue, options) => {
  const n = chance.integer({
    min: options.array.minLength,
    max: options.array.maxLength,
  })

  const result: any = []
  // tslint:disable-next-line:no-loop-statement
  for (let i = 0; i < n; i += 1) {
    result.push(fake(typeValue, options))
  }
  return result
}

const fakeArray: <T extends Mixed>(
  typeValue: ArrayC<T>,
  options: FakeOptions,
) => TypeOf<typeof typeValue> = (typeValue, options) =>
  fakeArrayFromType(typeValue.type, options)

const fakeObject: <T extends Props>(
  typeValue: TypeC<T>,
  options: FakeOptions,
) => TypeOf<typeof typeValue> = (typeValue, options) => {
  const props = typeValue.props
  const value: any = {}
  // tslint:disable no-object-mutation
  Object.keys(props).forEach(p => (value[p] = fake(props[p], options)))
  return value
}

export const fake: <T extends Mixed>(
  typeValue: T,
  options?: FakeOptions,
) => TypeOf<typeof typeValue> = (typeValue, options = defaultOptions) => {
  if (typeValue instanceof ReadonlyType) {
    return fake(typeValue.type, options)
  }
  if (typeValue instanceof ReadonlyArrayType) {
    return fakeArrayFromType(typeValue.type, options)
  }
  if (typeValue instanceof ArrayType) {
    return fakeArray(typeValue.type, options)
  }
  if (typeValue instanceof InterfaceType) {
    return fakeObject(typeValue, options)
  }
  return fakePrimitive(typeValue, options)
}

// console.log(
//   fake(
//     iots.readonly(
//       iots.type({
//         d: date,
//         e: iots.keyof({ foo: 0, bar: 0 }),
//         a: iots.readonlyArray(iots.string),
//         o: iots.type({ x: iots.number, y: iots.number }),
//         o2: iots.readonly(
//           iots.type({
//             fizz: iots.array(iots.readonly(iots.type({ buzz: iots.boolean }))),
//           }),
//         ),
//       }),
//     ),
//   ),
// )

// console.log(
//   emptyFromType(
//     iots.readonly(
//       iots.type({
//         x: iots.number,
//         d: date,
//         e: iots.keyof({ foo: 0, bar: 0 }),
//         a: iots.readonlyArray(iots.string),
//         o: iots.readonly(iots.type({ x: iots.number, y: iots.number })),
//         o2: iots.readonly(
//           iots.type({
//             fizz: iots.readonly(iots.type({ buzz: iots.boolean })),
//           }),
//         ),
//       }),
//     ),
//   ),
// )
