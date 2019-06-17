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
import { DateType } from 'io-ts-types'

const chance: Chance.Chance = new Chance()

// tslint:disable typedef

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
  if (typeValue.name === 'Int') {
    return chance.integer(options.integer)
  }
  if (typeValue instanceof NumberType) {
    return fakeFloat(options)
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

const fakeArrayFromType: <T extends Mixed>(
  typeValue: T,
  options: FakeOptions,
) => ReadonlyArray<TypeOf<typeof typeValue>> = (typeValue, options) => {
  const n = chance.integer({
    min: options.array.minLength,
    max: options.array.maxLength,
  })

  const result: Array<TypeOf<typeof typeValue>> = []
  for (let i = 0; i < n; i += 1) {
    // tslint:disable-next-line no-array-mutation
    result.push(fake(typeValue, options))
  }
  return result
}

const fakeArray: <T extends Mixed>(
  typeValue: ArrayC<T> | ReadonlyArrayC<T>,
  options: FakeOptions,
) => TypeOf<typeof typeValue> = (typeValue, options) =>
  fakeArrayFromType(typeValue.type, options)

const fakeObject: <T extends Props>(
  typeValue: TypeC<T>,
  options: FakeOptions,
) => TypeOf<typeof typeValue> = (typeValue, options) => {
  const props = typeValue.props
  const value: any = {}

  for (const p of Object.keys(props)) {
    // tslint:disable-next-line no-object-mutation
    value[p] = fake(props[p], options)
  }
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
    return fakeArray(typeValue, options)
  }
  if (typeValue instanceof InterfaceType) {
    return fakeObject(typeValue, options)
  }
  return fakePrimitive(typeValue, options)
}

// console.log(
//   fake(
//     t.readonly(
//       t.type({
//         d: date,
//         e: t.keyof({ foo: 0, bar: 0 }),
//         a: t.readonlyArray(t.string),
//         o: t.type({ x: t.number, y: t.number }),
//         o2: t.readonly(
//           t.type({
//             fizz: t.array(t.readonly(t.type({ buzz: t.boolean }))),
//           }),
//         ),
//       }),
//     ),
//   ),
// )
