// interface CommonRefinements {
//   readonly kind: 'required'
// }

export interface NumberRefinements {
  readonly integer?: boolean
  readonly positive?: boolean
  readonly negative?: boolean
  readonly min?: number
  readonly max?: number
}

export interface StringRefinements {
  readonly email?: boolean
  readonly url?: boolean
  readonly lowercase?: boolean
  readonly uppercase?: boolean
  readonly length?: number
  readonly maxStringLength?: number
  readonly minStringLength?: number
}

export interface DateRefinements {
  readonly minDate?: Date
  readonly maxDate?: Date
}

export interface ArrayRefinements {
  readonly minDate?: Date
  readonly maxDate?: Date
}

export type Refinements =
  | NumberRefinements
  | StringRefinements
  | DateRefinements
  | ArrayRefinements

export interface NumberMT {
  readonly kind: 'number'
  readonly refinements?: NumberRefinements
}

export interface StringMT {
  readonly kind: 'string'
  readonly refinements?: StringRefinements
}

export interface DateMT {
  readonly kind: 'date'
  readonly refinements?: DateRefinements
}
export interface BooleanMT {
  readonly kind: 'boolean'
}

export type PrimitiveMT = NumberMT | StringMT | BooleanMT | DateMT

export interface ArrayMT {
  readonly kind: 'array'
  readonly of: Mixed
  readonly refinements?: ArrayRefinements
}

export type PropertyMT = Mixed & { readonly optional?: true }

export interface ObjectMT {
  readonly kind: 'object'
  readonly name?: string
  readonly properties: {
    readonly [prop: string]: PropertyMT
  }
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

export type Mixed = PrimitiveMT | EnumMT | ArrayMT | ObjectMT // | UnionMT

export interface FieldMT {
  readonly label?: string // should label with meta?
  readonly meta: Mixed // Actually MetaValue
}

export interface FieldsMT {
  readonly label?: string
  readonly fields: ReadonlyArray<FieldMT>
}

//  @TODO: fields can be optional
