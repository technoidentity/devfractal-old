import t, {
  Constructor,
  Dict,
  Enums,
  Interface,
  Intersection,
  Irreducible,
  List,
  Maybe,
  Struct,
  Tuple,
  Type,
  Union,
} from 'tcomb'

export function isType<T>(spec: Constructor<T>): spec is Type<T> {
  return t.isType(spec)
}

export function isStruct<T>(spec: Type<T>): spec is Struct<T> {
  return spec.meta.kind === 'struct'
}

export function isInterface<T>(spec: Type<T>): spec is Interface<T> {
  return spec.meta.kind === 'interface'
}

export function isIntersection<T>(spec: Type<T>): spec is Intersection<T> {
  return spec.meta.kind === 'intersection'
}

export function isMaybe<T>(spec: Type<void | T>): spec is Maybe<T> {
  return spec.meta.kind === 'maybe'
}

export function isUnion<T>(spec: Type<T>): spec is Union<T> {
  return spec.meta.kind === 'union'
}

export function isEnums(spec: Type<string>): spec is Enums {
  return spec.meta.kind === 'enums'
}

export function isTuple<T>(spec: Type<T>): spec is Tuple<T> {
  return spec.meta.kind === 'tuple'
}

// tslint:disable-next-line: readonly-array
export function isList<T>(spec: Type<T[]>): spec is List<T> {
  return spec.meta.kind === 'list'
}

// tslint:disable-next-line: readonly-keyword
export function isDict<T>(spec: Type<{ [key: string]: T }>): spec is Dict<T> {
  return spec.meta.kind === 'dict'
}

export function isIrreducible<T>(spec: Type<T>): spec is Irreducible<T> {
  return spec.meta.kind === 'irreducible'
}

export function isInteger(spec: Type<any>): boolean {
  return spec.meta.kind === 'subtype' && spec.meta.name === 'Integer'
}
