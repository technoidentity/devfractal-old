import Chance from 'chance'
import {
  ArrayType,
  BooleanType,
  InterfaceType,
  NumberType,
  Props,
  ReadonlyArrayC,
  ReadonlyArrayType,
  ReadonlyC,
  ReadonlyType,
  StringType,
  TypeC,
  TypeOf,
} from 'io-ts'
import { DateType } from 'io-ts-types'
import { invariant, range } from '../../../devfractal'

const chance: Chance.Chance = new Chance()

// tslint:disable typedef

export const defaultOptions = {
  integer: { min: 100, max: 1000 },
  floating: { min: 0, max: 100, fixed: 2 },
  sentence: { words: 4 },
  array: { minLength: 0, maxLength: 6 },
}

type FakeOptions = typeof defaultOptions

export const fakeArrayFromType: <T extends Props>(
  typeValue: ReadonlyC<TypeC<T>>,
  options: FakeOptions,
) => TypeOf<ReadonlyArrayC<ReadonlyC<TypeC<T>>>> = (typeValue, options) =>
  range(
    chance.integer({
      min: options.array.minLength,
      max: options.array.maxLength,
    }),
    // tslint:disable-next-line no-use-before-declare
  ).map(_ => fakeFromType(typeValue, options))

const fakeFloat: (options: FakeOptions) => number = options =>
  chance.bool()
    ? chance.floating(options.floating)
    : chance.integer(options.integer)

export const fakeFromType: <T extends Props>(
  typeValue: ReadonlyC<TypeC<T>>,
  options?: typeof defaultOptions,
) => TypeOf<typeof typeValue> = (typeValue, options = defaultOptions) => {
  const props = typeValue.type.props
  const value: any = {}

  // tslint:disable no-object-mutation
  Object.keys(props).forEach(prop => {
    if (props[prop] instanceof NumberType) {
      value[prop] = fakeFloat(options)
    } else if (props[prop].name === 'Int') {
      value[prop] = chance.integer(options.integer)
    } else if (props[prop] instanceof StringType) {
      value[prop] = chance.sentence(options.sentence)
    } else if (props[prop] instanceof BooleanType) {
      value[prop] = chance.bool()
    } else if (props[prop] instanceof DateType) {
      value[prop] = chance.date()
    } else {
      // handle composite
      const v = props[prop]
      invariant(
        !(v instanceof InterfaceType || v instanceof ArrayType),
        `Everything must be readonly: ${v.name}`,
      )
      if (v instanceof ReadonlyType) {
        value[prop] = fakeFromType(v)
      } else if (v instanceof ReadonlyArrayType) {
        value[prop] = fakeArrayFromType(v.type, options)
      } else {
        throw new Error(`Unknown type ${props[prop]}`)
      }
    }
  })
  // tslint:enable no-object-mutation

  return value
}
