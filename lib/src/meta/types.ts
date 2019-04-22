// interface CommonRefinements {
//   readonly kind: 'required'
// }

export type NumberRefinements =
  | { readonly kind: 'integer' }
  | { readonly kind: 'positive' }
  | { readonly kind: 'negative' }
  | {
      readonly kind: 'min'
      readonly value: number
    }
  | {
      readonly kind: 'max'
      readonly value: number
    }

export type StringRefinements =
  | { readonly kind: 'email' }
  | { readonly kind: 'url' }
  | { readonly kind: 'lowercase' }
  | { readonly kind: 'uppercase' }
  | {
      readonly kind: 'length'
      readonly value: number
    }
  | {
      readonly kind: 'maxStringLength'
      readonly value: number
    }
  | {
      readonly kind: 'minStringLength'
      readonly value: number
    }

export type DateRefinements =
  | {
      readonly kind: 'minDate'
      readonly value: Date
    }
  | {
      readonly kind: 'maxDate'
      readonly value: Date
    }

export type ArrayRefinements =
  | {
      readonly kind: 'maxArrayLength'
      readonly value: number
    }
  | {
      readonly kind: 'minArrayLength'
      readonly value: number
    }

export type Refinements =
  | NumberRefinements
  | StringRefinements
  | DateRefinements
  | ArrayRefinements

export type PrimitiveMT =
  | {
      readonly kind: 'number'
      readonly refinements?: ReadonlyArray<NumberRefinements>
    }
  | {
      readonly kind: 'string'
      readonly refinements?: ReadonlyArray<StringRefinements>
    }
  | { readonly kind: 'boolean' }
  | {
      readonly kind: 'date'
      readonly refinements?: ReadonlyArray<DateRefinements>
    }

export interface ArrayMT {
  readonly kind: 'array'
  readonly of: MT
  readonly refinements?: ReadonlyArray<ArrayRefinements>
}

export interface ObjectMT {
  readonly kind: 'object'
  readonly name?: string
  readonly properties: { readonly [prop: string]: MT }
}

export interface EnumMT {
  readonly kind: 'enum'
  readonly name?: string
  // readonly multi: boolean
  readonly values: ReadonlyArray<string>
}

// export interface UnionMT {
//   readonly kind: 'union'
//   readonly name: string
//   // readonly multi: boolean
//   readonly values: ReadonlyArray<MT>
// }

export type MT = PrimitiveMT | EnumMT | ArrayMT | ObjectMT // | UnionMT

export interface FieldMT {
  readonly label?: string // should label with meta?
  readonly meta: MT // Actually MetaValue
}

export interface FieldsMT {
  readonly label?: string
  readonly fields: ReadonlyArray<FieldMT>
}

//  @TODO: fields can be optional
