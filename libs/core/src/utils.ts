import { fail, ok, type Result, type Try } from "@df/result";
import { isArray, isObject, isStr, jstr } from "@df/spec";
import { z } from "zod";

export function tryFromZod<Output, Input>(
  result: z.SafeParseReturnType<Input, Output>
): Try<Output> {
  return result.success ? ok(result.data) : fail(result.error);
}

export function resultFromZod<Output, Input>(
  result: z.SafeParseReturnType<Input, Output>
): Result<z.ZodError<Input>, Output> {
  return result.success ? ok(result.data) : fail(result.error);
}

export function jlog(o: unknown): void {
  console.log(jstr(o));
}

export function tap<T>(arg: T): T {
  jlog(arg);
  return arg;
}

export function strict<T extends z.ZodRawShape>(o: T) {
  return z.object(o).strict();
}

export function logError(error?: unknown): void {
  if (error) {
    jlog(error);
  }
}

export async function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function isEmpty(x: unknown): boolean {
  return (
    x === undefined ||
    x === null ||
    (isStr(x) && x.trim() === "") ||
    (isArray(x) && x.length === 0) ||
    (isObject(x) && Object.keys(x).length === 0)
  );
}
