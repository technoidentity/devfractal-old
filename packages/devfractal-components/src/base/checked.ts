import * as t from 'io-ts'
import { typeInvariant } from '../utils'

// tslint:disable readonly-array
export function checked<
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

    return f(...args)
  }
}
