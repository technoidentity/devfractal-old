import { typeInvariant } from '@technoidentity/utils'
import * as t from 'io-ts'

// tslint:disable readonly-array

export function tupleChecked<
  T extends [t.Mixed, ...t.Mixed[]],
  A extends t.TypeOf<t.TupleC<T>> & any[],
  R extends t.Mixed
>(
  argSpecs: t.TupleC<T>,
  resultSpec: R,
  f: (...args: A) => t.TypeOf<typeof resultSpec>,
): typeof f {
  return (...args) => {
    typeInvariant(argSpecs, args)

    return typeInvariant(resultSpec, f(...args))
  }
}

export function checked<
  A extends t.Mixed,
  B extends t.Mixed,
  C extends t.Mixed,
  D extends t.Mixed,
  E extends t.Mixed,
  R extends t.Mixed
>(
  codecs: [A, B, C, D, E],
  resultSpec: R,
  f: (...args: t.TypeOf<t.TupleC<typeof codecs>> & any[]) => t.TypeOf<R>,
): typeof f

export function checked<
  A extends t.Mixed,
  B extends t.Mixed,
  C extends t.Mixed,
  D extends t.Mixed,
  R extends t.Mixed
>(
  codecs: [A, B, C, D],
  resultSpec: R,
  f: (...args: t.TypeOf<t.TupleC<typeof codecs>> & any[]) => t.TypeOf<R>,
): typeof f

export function checked<
  A extends t.Mixed,
  B extends t.Mixed,
  C extends t.Mixed,
  R extends t.Mixed
>(
  codecs: [A, B, C],
  resultSpec: R,
  f: (...args: t.TypeOf<t.TupleC<typeof codecs>> & any[]) => t.TypeOf<R>,
): typeof f

export function checked<
  A extends t.Mixed,
  B extends t.Mixed,
  R extends t.Mixed
>(
  codecs: [A, B],
  resultSpec: R,
  f: (...args: t.TypeOf<t.TupleC<typeof codecs>> & any[]) => t.TypeOf<R>,
): typeof f

export function checked<A extends t.Mixed, R extends t.Mixed>(
  codecs: [A],
  resultSpec: R,
  f: (...args: t.TypeOf<t.TupleC<typeof codecs>> & any[]) => t.TypeOf<R>,
): typeof f

export function checked(
  codecs: any,
  resultSpec: any,
  f: (...args: any[]) => any,
): typeof f {
  return tupleChecked(t.tuple(codecs), resultSpec, f)
}
