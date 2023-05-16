function isObject(x: unknown): x is object {
  return typeof x === "object" && x !== null;
}

function isString(x: unknown): x is string {
  return typeof x === "string";
}

export const toStringError = (err: unknown): string =>
  err instanceof Error
    ? err.message
    : isObject(err) && "message" in err && isString(err.message)
    ? err.message
    : `unexpected prisma error: ${JSON.stringify(err)}`;

export const toError = (err: unknown): Error =>
  err instanceof Error ? err : new Error(toStringError(err));
