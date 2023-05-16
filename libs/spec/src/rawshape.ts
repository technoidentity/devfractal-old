import { z } from "zod";

export type GetRawShape<T> = T extends z.ZodEffects<infer R>
  ? GetRawShape<R>
  : T extends z.AnyZodObject
  ? T["shape"]
  : never;

export function getRawShape<T extends z.ZodEffects<any> | z.AnyZodObject>(
  spec: T
): GetRawShape<T> {
  return spec instanceof z.ZodEffects
    ? // eslint-disable-next-line no-underscore-dangle
      getRawShape(spec._def.schema)
    : spec.shape;
}
