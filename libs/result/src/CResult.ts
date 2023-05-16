import type { Match, Result } from "./result";
import {
  fail as rfail,
  isOk,
  ok as rok,
  rerror$,
  rfmap,
  rmap,
  rmapError,
  rmatch,
  rvalue$,
} from "./result";
import { toError } from "./errorUtils";

export class CResult<E, T> {
  constructor(readonly res: Result<E, T>) {}

  static ok<E, T>(value: T): CResult<E, T> {
    return result(rok(value));
  }

  static fail<E, T>(error: E): CResult<E, T> {
    return result(rfail(error));
  }

  get isOk() {
    return isOk(this.res);
  }

  get isFail() {
    return !isOk(this.res);
  }

  map<R>(fn: (v: T) => R): CResult<E, R> {
    return result(rmap(this.res, fn));
  }

  fmap<R>(fn: (v: T) => Result<E, R>): CResult<E, R> {
    return result(rfmap(this.res, fn));
  }

  mapError<E2>(fn: (err: E) => E2): CResult<E2, T> {
    return result(rmapError(this.res, fn));
  }

  match<E2, T2>(match: Match<E, T, E2, T2>) {
    return rmatch(this.res, match);
  }

  value$(message?: string) {
    return rvalue$(this.res, message);
  }

  error$(message?: string) {
    return rerror$(this.res, message);
  }
}

export function result<E, T>(result: Result<E, T>) {
  return new CResult(result);
}

export type CTry<T> = CResult<Error, T>;

export function ctry<T>(fn: () => T): CTry<T> {
  try {
    return CResult.ok<Error, T>(fn());
  } catch (e) {
    return CResult.fail<Error, T>(toError(e));
  }
}

export function catry<T>(fn: () => Promise<T>): Promise<CTry<T>> {
  return fn()
    .then((v) => CResult.ok<Error, T>(v))
    .then((e) => CResult.fail<Error, T>(toError(e)));
}
