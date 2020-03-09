import { failure, identity, string, success, Type } from 'io-ts'

// tslint:disable no-class readonly-array

export class EnumType<D extends readonly string[], A> extends Type<A> {
  readonly _tag: 'EnumType' = 'EnumType'

  constructor(
    readonly keys: D,
    name: string,
    is: EnumType<D, A>['is'],
    validate: EnumType<D, A>['validate'],
    encode: EnumType<D, A>['encode'],
  ) {
    super(name, is, validate, encode)
  }
}

export interface EnumC<D extends readonly string[]>
  extends EnumType<D, D[number]> {}

export function enums<T extends readonly string[]>(
  name: string | undefined,
  ...keys: T
): EnumC<T> {
  function is(u: unknown): u is T[number] {
    return string.is(u) && keys.includes(u)
  }

  return new EnumType(
    keys,
    name || `Enum<${keys.join(' | ')}>`,
    is,
    (u, c) => (is(u) ? success(u) : failure(u, c)),
    identity,
  )
}

export function enumerate<T extends string[]>(...keys: T): EnumC<T> {
  return enums(undefined, ...keys)
}
