import { coerce } from "zod";
import { cast } from "./casts";

export const toInt = (s: unknown): number => cast(coerce.number().int(), s);
export const toNum = (s: unknown): number => cast(coerce.number(), s);
export const toStr = (s: unknown): string => cast(coerce.string(), s);
export const toBool = (s: unknown): boolean => cast(coerce.boolean(), s);
export const toDate = (s: unknown): Date => cast(coerce.date(), s);
