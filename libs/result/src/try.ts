import type { Result } from "./result";
import { ok, fail } from "./result";
import { toError } from "./errorUtils";

export type Try<T> = Result<Error, T>;

export function rtry<T>(fn: () => T): Try<T> {
  try {
    return ok(fn());
  } catch (e) {
    return fail(toError(e));
  }
}

export function atry<T>(fn: () => Promise<T>): Promise<Try<T>> {
  return fn()
    .then(ok)
    .then((e) => fail(toError(e)));
}
