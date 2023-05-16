import type { z } from "zod";

export function cast<T, Spec extends z.ZodType<T>>(
  spec: Spec,
  v: unknown
): z.infer<Spec> {
  return spec.parse(v);
}

export function ensure<T, Spec extends z.ZodType<T>>(
  spec: Spec,
  v: unknown
): asserts v is z.infer<Spec> {
  spec.parse(v);
}

export function debugCast<T, Spec extends z.ZodType<T>>(
  spec: Spec,
  v: unknown
): T {
  if (process.env.NODE_ENV === "development") {
    return spec.parse(v);
  }
  return v as T;
}
