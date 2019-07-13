import Chance from 'chance'
import {
  ArrayC,
  ArrayType,
  BooleanType,
  InterfaceType,
  KeyofType,
  Mixed,
  NumberType,
  Props,
  ReadonlyArrayC,
  ReadonlyArrayType,
  ReadonlyType,
  StringType,
  TypeC,
  TypeOf,
} from 'io-ts'
import { buildObject, repeatedly } from './common'

const chance: Chance.Chance = new Chance()

// tslint:disable typedef no-use-before-declare

export const defaultOptions = {
  integer: { min: 100, max: 1000 },
  floating: { min: 0, max: 100, fixed: 2 },
  sentence: { words: 4 },
  array: { minLength: 0, maxLength: 6 },
}

export type FakeOptions = typeof defaultOptions

function fakePrimitive<T extends Mixed>(
  typeValue: T,
  options: FakeOptions,
): TypeOf<typeof typeValue> {
  if (typeValue.name === 'Int') {
    return chance.integer(options.integer)
  }
  if (typeValue instanceof NumberType) {
    return chance.floating(options.floating)
  }
  if (typeValue instanceof StringType) {
    return chance.sentence(options.sentence)
  }
  if (typeValue instanceof BooleanType) {
    return chance.bool()
  }
  if (typeValue.name === 'Date') {
    return chance.date()
  }
  if (typeValue instanceof KeyofType) {
    return chance.pickone(Object.keys(typeValue.keys))
  }
  throw new Error(`Unsupported type: ${typeValue.name}`)
}

function fakeArrayFromType<T extends Mixed>(
  typeValue: T,
  options: FakeOptions,
): ReadonlyArray<TypeOf<typeof typeValue>> {
  const n = chance.integer({
    min: options.array.minLength,
    max: options.array.maxLength,
  })

  return repeatedly(n, () => fake(typeValue, options))
}

function fakeArray<T extends Mixed>(
  typeValue: ArrayC<T> | ReadonlyArrayC<T>,
  options: FakeOptions,
): TypeOf<typeof typeValue> {
  return fakeArrayFromType(typeValue.type, options)
}

function fakeObject<T extends Props>(
  typeValue: TypeC<T>,
  options: FakeOptions,
): TypeOf<typeof typeValue> {
  return buildObject(typeValue.props, v => fake(v, options))
}

export function fake<T extends Mixed>(
  typeValue: T,
  options: FakeOptions = defaultOptions,
): TypeOf<typeof typeValue> {
  if (typeValue instanceof ReadonlyType) {
    return fake(typeValue.type, options)
  }
  if (typeValue instanceof ReadonlyArrayType) {
    return fakeArrayFromType(typeValue.type, options)
  }
  if (typeValue instanceof ArrayType) {
    return fakeArray(typeValue, options)
  }
  if (typeValue instanceof InterfaceType) {
    return fakeObject(typeValue, options)
  }
  return fakePrimitive(typeValue, options)
}
