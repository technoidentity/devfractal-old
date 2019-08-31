import { failure, identity, success, Type } from 'technoidentity-spec'

// tslint:disable no-class no-this

export class FnType<F extends Function> extends Type<F> {
  readonly _tag: 'FnType' = 'FnType'

  constructor() {
    super(
      'FnType',
      (u): u is F => typeof u === 'function',

      (u, c) => (this.is(u) ? success(u) : failure(u, c)),
      identity,
    )
  }
}

export interface FnC<F extends Function> extends FnType<F> {}

export function fn<F extends Function>(): FnC<F> {
  return new FnType<F>()
}
