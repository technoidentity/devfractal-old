import Chance from 'chance'
import {
  AnyArrayType,
  ArrayC,
  ArrayType,
  BooleanType,
  ExactType,
  InterfaceType,
  IntersectionType,
  KeyofType,
  LiteralType,
  Mixed,
  NullType,
  NumberType,
  PartialC,
  PartialType,
  Props,
  ReadonlyArrayC,
  ReadonlyArrayType,
  ReadonlyType,
  RefinementType,
  StringType,
  TupleType,
  Type,
  TypeC,
  TypeOf,
  UndefinedType,
  UnionType,
  unknown,
  VoidType,
} from 'technoidentity-spec'
import { buildObject, repeatedly } from 'technoidentity-utils'

const chance: Chance.Chance = new Chance()

// tslint:disable typedef no-use-before-declare

export const defaultOptions = {
  integer: { min: 100, max: 1000 },
  floating: { min: 0, max: 100, fixed: 2 },
  sentence: { words: 4 },
  array: { minLength: 0, maxLength: 6 },
}

export type FakeOptions = typeof defaultOptions

function fakeArrayFromType<T extends Mixed>(
  spec: T,
  options: FakeOptions,
): ReadonlyArray<TypeOf<typeof spec>> {
  const n = chance.integer({
    min: options.array.minLength,
    max: options.array.maxLength,
  })

  return repeatedly(n, () => fake(spec, options))
}

function fakeArray<T extends Mixed>(
  spec: ArrayC<T> | ReadonlyArrayC<T>,
  options: FakeOptions,
): TypeOf<typeof spec> {
  return fakeArrayFromType(spec.type, options)
}

function fakeObject<T extends Props>(
  spec: TypeC<T> | PartialC<T>,
  options: FakeOptions,
): TypeOf<typeof spec> {
  return buildObject(spec.props, v => fake(v, options))
}

export function fake<T extends Mixed>(
  spec: T,
  options: FakeOptions = defaultOptions,
): TypeOf<typeof spec> {
  if (spec.name === 'Int') {
    return chance.integer(options.integer)
  }

  if (spec instanceof NumberType) {
    return chance.floating(options.floating)
  }

  if (spec instanceof StringType) {
    return chance.sentence(options.sentence)
  }

  if (spec instanceof BooleanType) {
    return chance.bool()
  }

  if (spec.name === 'Date') {
    return chance.date()
  }

  if (spec.name === 'DateFromISOString') {
    return chance.date()
  }

  if (spec instanceof KeyofType) {
    return chance.pickone(Object.keys(spec.keys))
  }

  if (spec instanceof LiteralType) {
    return spec.value
  }

  if (spec instanceof NullType) {
    // tslint:disable-next-line: no-null-keyword
    return null
  }
  if (spec instanceof UndefinedType || spec instanceof VoidType) {
    return undefined
  }

  if (
    spec instanceof ReadonlyType ||
    spec instanceof ExactType ||
    spec instanceof RefinementType // No easy way to do this correctly?
  ) {
    return fake(spec.type, options)
  }

  if (spec instanceof ReadonlyArrayType) {
    return fakeArrayFromType(spec.type, options)
  }

  if (spec instanceof AnyArrayType) {
    return fakeArrayFromType(unknown, options)
  }

  if (spec instanceof ArrayType) {
    return fakeArray(spec, options)
  }

  if (spec instanceof InterfaceType || spec instanceof PartialType) {
    return fakeObject(spec, options)
  }

  if (spec instanceof IntersectionType) {
    return spec.types
      .map((t: Type<any>) => fake(t, options))
      .reduce((acc: any, x: any) => ({ ...acc, ...x }))
  }

  if (spec instanceof UnionType) {
    const one = chance.integer({ min: 0, max: spec.types.length - 1 })

    return fake(spec.types[one], options)
  }

  if (spec instanceof TupleType) {
    return spec.types.map((p: Type<any>) => fake(p, options))
  }

  console.log('hello')
  throw new Error(`Unsupported type: ${spec.name}`)
}
