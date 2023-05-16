import { z } from "zod";

export const Natural = z.number().int().nonnegative();
export type Natural = z.infer<typeof Natural>;

export const Positive = z.number().int().nonnegative();
export type Positive = z.infer<typeof Positive>;

export const Int = z.number().int();
export type Int = z.infer<typeof Int>;
