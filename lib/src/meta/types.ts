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
      readonly kind: 'maxLength'
      readonly value: number
    }
  | {
      readonly kind: 'minLength'
      readonly value: number
    }

export type DateRefinements =
  | {
      readonly kind: 'min'
      readonly value: Date // | string
    }
  | {
      readonly kind: 'max'
      readonly value: Date // | string
    }

export type ArrayRefinements =
  | {
      readonly kind: 'maxLength'
      readonly value: number
    }
  | {
      readonly kind: 'minLength'
      readonly value: number
    }

export type Refinements<T> = ReadonlyArray<T>

export type SimpleMT =
  | {
      readonly kind: 'number'
      readonly refinements?: Refinements<NumberRefinements>
    }
  | {
      readonly kind: 'string'
      readonly refinements?: Refinements<StringRefinements>
    }
  | { readonly kind: 'boolean' }
  | {
      readonly kind: 'date'
      readonly refinements?: Refinements<DateRefinements>
    }

export interface ArrayMT {
  readonly kind: 'array'
  readonly of: MT
  readonly refinements?: Refinements<ArrayRefinements>
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

export type MT = SimpleMT | EnumMT | ArrayMT | ObjectMT // | UnionMT

export interface FieldMT {
  readonly label?: string // should label with meta?
  readonly meta: MT // Actually MetaValue
}

export interface FieldsMT {
  readonly label?: string
  readonly fields: ReadonlyArray<FieldMT>
}

//  @TODO: fields can be optional
