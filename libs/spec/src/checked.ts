import { z } from "zod";

export function checked<
  Args extends [] | [z.ZodTypeAny, ...z.ZodTypeAny[]],
  F extends (...args: z.infer<Args[number]>[]) => unknown
>(specs: Args, f: F) {
  return z.function(z.tuple(specs)).implement(f);
}

export function checkedReturn<
  Args extends [] | [z.ZodTypeAny, ...z.ZodTypeAny[]],
  F extends (...args: z.infer<Args[number]>[]) => unknown,
  R extends z.ZodTypeAny
>(specs: Args, ret: R, f: F) {
  return z.function(z.tuple(specs), ret).implement(f);
}
