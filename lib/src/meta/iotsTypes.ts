import * as t from 'io-ts'
import { date } from 'io-ts-types'
import { props, req } from 'utils'

// tslint:disable typedef

const lit = t.literal

export const NumberRefinements = t.union([
  req({ kind: lit('integer') }),
  req({ kind: lit('positive') }),
  req({ kind: lit('negative') }),
  req({ kind: lit('min'), value: t.number }),
  req({ kind: lit('max'), value: t.number }),
])

export type NumberRefinements = t.TypeOf<typeof NumberRefinements>

export const StringRefinements = t.union([
  req({ kind: lit('email') }),
  req({ kind: lit('url') }),
  req({ kind: lit('lowercase') }),
  req({ kind: lit('uppercase') }),
  req({ kind: lit('length'), value: t.number }),
  req({ kind: lit('maxStringLength'), value: t.number }),
  req({ kind: lit('minStringLength'), value: t.number }),
])

export type StringRefinements = t.TypeOf<typeof StringRefinements>

export const DateRefinements = t.union([
  req({ kind: lit('minDate'), value: date }),
  req({ kind: lit('maxDate'), value: date }),
])

export type DateRefinements = t.TypeOf<typeof DateRefinements>

export const ArrayRefinements = t.union([
  req({ kind: lit('maxArrayLength'), value: t.number }),
  req({ kind: lit('minArrayLength'), value: t.number }),
])

export type ArrayRefinements = t.TypeOf<typeof ArrayRefinements>

export const SimpleMT = t.union([
  req({ kind: lit('boolean') }),
  props(
    { refinements: t.readonlyArray(NumberRefinements) },
    { kind: lit('number') },
  ),
  props(
    { refinements: t.readonlyArray(StringRefinements) },
    { kind: lit('string') },
  ),
  props(
    { refinements: t.readonlyArray(DateRefinements) },
    { kind: lit('date') },
  ),
])

export type PrimitiveMT = t.TypeOf<typeof SimpleMT>

export const EnumMT = props(
  { name: t.string },
  { kind: lit('enum'), values: t.readonlyArray(t.string) },
)

export type EnumMT = t.TypeOf<typeof EnumMT>

export interface ArrayMT {
  readonly kind: 'array'
  readonly of: MT
  readonly refinements?: ReadonlyArray<ArrayRefinements>
}

export const ArrayMT: t.Type<ArrayMT> = t.recursion('ArrayMT', () =>
  props(
    { refinements: t.readonlyArray(ArrayRefinements) },
    // tslint:disable-next-line: no-use-before-declare
    { kind: lit('array'), of: MT },
  ),
)

export interface ObjectMT {
  readonly kind: 'object'
  readonly name?: string
  readonly properties: { readonly [prop: string]: MT }
}

export const ObjectMT: t.Type<ObjectMT> = t.recursion('ObjectMT', () =>
  props(
    { name: t.string },
    // tslint:disable-next-line: no-use-before-declare
    { kind: lit('object'), properties: t.readonly(t.record(t.string, MT)) },
  ),
)

export const MT: t.Type<
  PrimitiveMT | EnumMT | ArrayMT | ObjectMT
> = t.recursion('MT', () => t.union([SimpleMT, EnumMT, ArrayMT, ObjectMT]))

export type MT = t.TypeOf<typeof MT>
