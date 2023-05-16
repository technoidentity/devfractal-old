import invariant from "tiny-invariant";

const OK = Symbol("OK");
const FAIL = Symbol("FAIL");

export type Ok<T> = Readonly<{ type: typeof OK; value: T }>;
export type Err<E> = Readonly<{ type: typeof FAIL; error: E }>;
export type Result<E, T> = Err<E> | Ok<T>;

export function isOk<Error, T>(result: Result<Error, T>): result is Ok<T> {
  return result.type === OK;
}

export function isFail<Error, T>(
  result: Result<Error, T>
): result is Err<Error> {
  return result.type === FAIL;
}

export function ok<Error, T>(value: T): Result<Error, T> {
  return { type: OK, value };
}

export function fail<Error, T>(error: Error): Result<Error, T> {
  return { type: FAIL, error };
}

export function rmap<E, A, R>(
  result: Result<E, A>,
  f: (x: A) => R
): Result<E, R> {
  return result.type === FAIL ? result : ok(f(result.value));
}

export function rfmap<E, A, R>(
  result: Result<E, A>,
  f: (x: A) => Result<E, R>
): Result<E, R> {
  const r = rmap(result, f);

  return isFail(r) ? r : r.value;
}

export function rmapError<E, T, E2>(
  res: Result<E, T>,
  fn: (err: E) => E2
): Result<E2, T> {
  return isOk(res) ? res : fail<E2, T>(fn(res.error));
}

export function rvalue$<E, T>(res: Result<E, T>, message?: string): T {
  invariant(isOk(res), message ?? `Result is not 'ok'`);
  return res.value;
}

export function rerror$<E, T>(res: Result<E, T>, message?: string): E {
  invariant(isFail(res), message ?? `Result is not 'fail'`);

  return res.error;
}

export function or$<E, T>(res: Result<E, T>, or: T): T {
  return isOk(res) ? res.value : or;
}

export type Match<E, T, E2, T2> = {
  ok(x: T): T2;
  fail(e: E): E2;
};

export function rmatch<E, T, E2, T2>(
  result: Result<E, T>,
  match: Match<E, T, E2, T2>
): Result<E2, T2> {
  return isOk(result)
    ? ok(match.ok(result.value))
    : fail(match.fail(result.error));
}
