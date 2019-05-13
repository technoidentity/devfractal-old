import * as t from 'io-ts'
import { date } from 'io-ts-types'
import { lit, opt, props, req } from '../lib'

// tslint:disable typedef

export const NumberRefinements = opt({
  integer: t.boolean,
  positive: t.boolean,
  negative: t.boolean,
  min: t.number,
  max: t.number,
})

export type NumberRefinements = t.TypeOf<typeof NumberRefinements>

export const StringRefinements = opt({
  email: t.boolean,
  url: t.boolean,
  lowercase: t.boolean,
  uppercase: t.boolean,
  length: t.number,
  maxStringLength: t.number,
  minStringLength: t.number,
})

export type StringRefinements = t.TypeOf<typeof StringRefinements>

export const DateRefinements = opt({ minDate: date, maxDate: date })

export type DateRefinements = t.TypeOf<typeof DateRefinements>

export const ArrayRefinements = opt({
  maxArrayLength: t.number,
  minArrayLength: t.number,
})

export type ArrayRefinements = t.TypeOf<typeof ArrayRefinements>

export const Refinements = t.intersection([
  NumberRefinements,
  StringRefinements,
  DateRefinements,
  ArrayRefinements,
])

export type Refinements = t.TypeOf<typeof Refinements>

export const NumberMT = props(
  { refinements: NumberRefinements },
  { kind: lit('number') },
)

export type NumberMT = t.TypeOf<typeof NumberMT>

export const StringMT = props(
  { refinements: StringRefinements },
  { kind: lit('string') },
)

export type StringMT = t.TypeOf<typeof StringMT>

export const DateMT = props(
  { refinements: DateRefinements },
  { kind: lit('date') },
)

export type DateMT = t.TypeOf<typeof DateMT>

export const BooleanMT = req({ kind: lit('boolean') })

export type BooleanMT = t.TypeOf<typeof BooleanMT>

export const PrimitiveMT = t.union([BooleanMT, NumberMT, StringMT, DateMT])

export type PrimitiveMT = t.TypeOf<typeof PrimitiveMT>

export const EnumMT = props(
  { name: t.string },
  { kind: lit('enum'), values: t.readonlyArray(t.string) },
)

export type EnumMT = t.TypeOf<typeof EnumMT>

export interface ArrayMT {
  readonly kind: 'array'
  readonly of: Mixed
  readonly refinements?: ArrayRefinements
}

// tslint:disable no-use-before-declare

export const ArrayMT: t.Type<ArrayMT> = t.recursion('ArrayMT', () =>
  props({ refinements: ArrayRefinements }, { kind: lit('array'), of: Mixed }),
)

export type PropertyMT = Mixed & { readonly optional?: true }

export interface ObjectMT {
  readonly kind: 'object'
  readonly name?: string
  readonly properties: {
    readonly [prop: string]: PropertyMT
  }
}

export const ObjectMT: t.Type<ObjectMT> = t.recursion('ObjectMT', () =>
  props(
    { name: t.string },
    {
      kind: lit('object'),
      properties: t.readonly(
        t.record(
          t.string,
          t.intersection([Mixed, opt({ optional: lit(true) })]),
        ),
      ),
    },
  ),
)

export const Mixed: t.Type<
  PrimitiveMT | EnumMT | ArrayMT | ObjectMT
> = t.recursion('Mixed', () =>
  t.union([PrimitiveMT, EnumMT, ArrayMT, ObjectMT]),
)

export type Mixed = t.TypeOf<typeof Mixed>

function refProps<T extends t.Props>(rt: t.ReadonlyC<t.PartialC<T>>) {
  return rt.type.props
}

export const numberRefinements: ReadonlyArray<string> = Object.keys(
  refProps(NumberRefinements),
)

export const stringRefinements: ReadonlyArray<string> = Object.keys(
  refProps(StringRefinements),
)

export const dateRefinements: ReadonlyArray<string> = Object.keys(
  refProps(DateRefinements),
)

export const arrayRefinements: ReadonlyArray<string> = Object.keys(
  refProps(ArrayRefinements),
)

export const refinements: ReadonlyArray<string> = [
  ...numberRefinements,
  ...stringRefinements,
  ...dateRefinements,
  ...arrayRefinements,
]
