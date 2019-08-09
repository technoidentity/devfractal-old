import {
  ArrayMT,
  ArrayRefinements,
  DateRefinements,
  EnumMT,
  Mixed,
  MT,
  NumberRefinements,
  PrimitiveMT,
  PropertyMT,
  StringRefinements,
} from './meta'

export function MNumber(refinements?: NumberRefinements): PrimitiveMT {
  return { kind: 'number', refinements }
}

export function MString(refinements?: StringRefinements): PrimitiveMT {
  return { kind: 'string', refinements }
}

export function MBool(): PrimitiveMT {
  return { kind: 'boolean' }
}

export function MDate(refinements?: DateRefinements): PrimitiveMT {
  return { kind: 'date', refinements }
}

export function MEnum(values: readonly string[], name?: string): EnumMT {
  return { kind: 'enum', values, name }
}

export function MArray(of: Mixed, refinements?: ArrayRefinements): ArrayMT {
  return { kind: 'array', of, refinements }
}

export function MMT(properties: MT['properties'], name?: string): MT {
  return { kind: 'object', properties, name }
}

export function maybe(meta: Mixed): PropertyMT {
  return { ...meta, optional: true }
}
