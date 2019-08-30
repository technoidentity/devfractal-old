import * as t from 'technoidentity-spec'
import { date } from 'technoidentity-spec'
import { keys, lit, opt, props, req } from 'technoidentity-utils'

// tslint:disable typedef

export const NumberRefinements = opt({
  sign: t.keyof({ negative: 1, positive: 2 }),
  integer: t.boolean,
  min: t.number,
  max: t.number,
})

export type NumberRefinements = t.TypeOf<typeof NumberRefinements>

export const StringRefinements = opt({
  base: t.keyof({ email: 1, url: 2 }),
  case: t.keyof({ lower: 1, upper: 2 }),
  strLength: t.union([
    t.type({ fixed: t.number, max: t.undefined, min: t.undefined }),
    opt({ fixed: t.undefined, max: t.number, min: t.number }),
  ]),
})

export type StringRefinements = t.TypeOf<typeof StringRefinements>

export const stringRefinements: readonly string[] = keys(
  StringRefinements.type.props,
)

export const DateRefinements = opt({ minDate: date, maxDate: date })

export const dateRefinements: readonly string[] = keys(
  DateRefinements.type.props,
)

export type DateRefinements = t.TypeOf<typeof DateRefinements>

export const ArrayRefinements = opt({
  maxArrayLength: t.number,
  minArrayLength: t.number,
})

export const arrayRefinements: readonly string[] = keys(
  ArrayRefinements.type.props,
)

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

export const ArrayMT: t.Type<ArrayMT> = t.recursion('ArrayMT', () =>
  props({ refinements: ArrayRefinements }, { kind: lit('array'), of: Mixed }),
)

export type PropertyMT = Mixed & { readonly optional?: true }

export interface MT {
  readonly kind: 'object'
  readonly name?: string
  readonly properties: {
    readonly [prop: string]: PropertyMT
  }
}

export const MT: t.Type<MT> = t.recursion('MT', () =>
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

export const Mixed: t.Type<PrimitiveMT | EnumMT | ArrayMT | MT> = t.recursion(
  'Mixed',
  () => t.union([PrimitiveMT, EnumMT, ArrayMT, MT]),
)

export type Mixed = t.TypeOf<typeof Mixed>
