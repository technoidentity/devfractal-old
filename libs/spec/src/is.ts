/* eslint-disable @typescript-eslint/unbound-method */
import { z } from "zod";

export function is<T, Spec extends z.ZodType<T>>(
  spec: Spec,
  v: unknown
): v is z.infer<Spec> {
  return spec.safeParse(v).success;
}

// from sindresorhus/is
export type Primitive =
  | null
  | undefined
  | string
  | number
  | boolean
  | symbol
  | bigint;

const primitiveTypeNames = [
  "null",
  "undefined",
  "string",
  "number",
  "bigint",
  "boolean",
  "symbol",
] as const;

type PrimitiveTypeNames = typeof primitiveTypeNames;
type PrimitiveTypeName = PrimitiveTypeNames[number];

function isOfType<T extends Primitive | Function>(
  type: PrimitiveTypeName | "function"
) {
  return (value: unknown): value is T => typeof value === type;
}

export const isStr = isOfType<string>("string");
export const isFloat = (n: unknown): n is number => isNum(n) && !isInt(n);
export const isBool = isOfType<boolean>("boolean");
export const isFunction = isOfType<Function>("function");
export const isEmail = (s: unknown): s is string => is(z.string().email(), s);
export const isNum = isOfType<number>("number");
export const isInt = (s: unknown): s is number => Number.isInteger(s);
export const isDate = (s: unknown): s is Date => s instanceof Date;

export const isObject = (value: unknown): value is object =>
  !isNull(value) && typeof value === "object";

export const isArray = (value: unknown): value is unknown[] =>
  Array.isArray(value);

export const isUndefined = (s: unknown): s is undefined => s === undefined;
export const isNull = (s: unknown): s is null => s === null;
export const isNil = (s: unknown): s is null | undefined =>
  s === null || s === undefined;

export const isNullish = isNil;
