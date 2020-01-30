import { Mixed, tuple, TupleC, TypeOf } from 'io-ts'
import { assertCast } from './iotsUtils'

// tslint:disable readonly-array

// TODO: revisit replacing tuple once ts 3.7 releases with circular references support

export function tupleChecked<
  T extends [Mixed, ...Mixed[]],
  A extends TypeOf<TupleC<T>> & any[],
  R extends Mixed
>(argSpecs: TupleC<T>, resultSpec: R, f: (...args: A) => TypeOf<R>): typeof f {
  return (...args) => {
    assertCast(argSpecs, args)

    return assertCast(resultSpec, f(...args))
  }
}

export function checked<
  A extends Mixed,
  B extends Mixed,
  C extends Mixed,
  D extends Mixed,
  E extends Mixed,
  R extends Mixed
>(
  codecs: [A, B, C, D, E],
  resultSpec: R,
  f: (...args: TypeOf<TupleC<typeof codecs>> & any[]) => TypeOf<R>,
): typeof f

export function checked<
  A extends Mixed,
  B extends Mixed,
  C extends Mixed,
  D extends Mixed,
  R extends Mixed
>(
  codecs: [A, B, C, D],
  resultSpec: R,
  f: (...args: TypeOf<TupleC<typeof codecs>> & any[]) => TypeOf<R>,
): typeof f

export function checked<
  A extends Mixed,
  B extends Mixed,
  C extends Mixed,
  R extends Mixed
>(
  codecs: [A, B, C],
  resultSpec: R,
  f: (...args: TypeOf<TupleC<typeof codecs>> & any[]) => TypeOf<R>,
): typeof f

export function checked<A extends Mixed, B extends Mixed, R extends Mixed>(
  codecs: [A, B],
  resultSpec: R,
  f: (...args: TypeOf<TupleC<typeof codecs>> & any[]) => TypeOf<R>,
): typeof f

export function checked<A extends Mixed, R extends Mixed>(
  codecs: [A],
  resultSpec: R,
  f: (...args: TypeOf<TupleC<typeof codecs>> & any[]) => TypeOf<R>,
): typeof f

export function checked(
  codecs: any,
  resultSpec: any,
  f: (...args: any[]) => any,
): typeof f {
  return tupleChecked(tuple(codecs), resultSpec, f)
}

export function tupleCheckedAsync<
  T extends [Mixed, ...Mixed[]],
  A extends TypeOf<TupleC<T>> & any[],
  R extends Mixed
>(
  argSpecs: TupleC<T>,
  resultSpec: R,
  f: (...args: A) => Promise<TypeOf<typeof resultSpec>>,
): typeof f {
  return async (...args) => {
    assertCast(argSpecs, args)

    return assertCast(resultSpec, await f(...args))
  }
}

export function checkedAsync<
  A extends Mixed,
  B extends Mixed,
  C extends Mixed,
  D extends Mixed,
  E extends Mixed,
  R extends Mixed
>(
  codecs: [A, B, C, D, E],
  resultSpec: R,
  f: (...args: TypeOf<TupleC<typeof codecs>> & any[]) => Promise<TypeOf<R>>,
): typeof f

export function checkedAsync<
  A extends Mixed,
  B extends Mixed,
  C extends Mixed,
  D extends Mixed,
  R extends Mixed
>(
  codecs: [A, B, C, D],
  resultSpec: R,
  f: (...args: TypeOf<TupleC<typeof codecs>> & any[]) => Promise<TypeOf<R>>,
): typeof f

export function checkedAsync<
  A extends Mixed,
  B extends Mixed,
  C extends Mixed,
  R extends Mixed
>(
  codecs: [A, B, C],
  resultSpec: R,
  f: (...args: TypeOf<TupleC<typeof codecs>> & any[]) => Promise<TypeOf<R>>,
): typeof f

export function checkedAsync<A extends Mixed, B extends Mixed, R extends Mixed>(
  codecs: [A, B],
  resultSpec: R,
  f: (...args: TypeOf<TupleC<typeof codecs>> & any[]) => Promise<TypeOf<R>>,
): typeof f

export function checkedAsync<A extends Mixed, R extends Mixed>(
  codecs: [A],
  resultSpec: R,
  f: (...args: TypeOf<TupleC<typeof codecs>> & any[]) => Promise<TypeOf<R>>,
): typeof f

export function checkedAsync(
  codecs: any,
  resultSpec: any,
  f: (...args: any[]) => any,
): typeof f {
  return tupleCheckedAsync(tuple(codecs), resultSpec, f)
}
