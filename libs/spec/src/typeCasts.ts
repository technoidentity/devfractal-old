import invariant from "tiny-invariant";
import { boolean, number, string } from "zod";
import { cast } from "./casts";

export const str = (s: unknown): string => cast(string(), s);
export const num = (s: unknown): number => cast(number(), s);
export const int = (s: unknown): number => cast(number().int(), s);
export const bool = (s: unknown): boolean => cast(boolean(), s);
export const jstr = (s: unknown): string => JSON.stringify(s, null, 2);

export const notNil = <T>(s: T | null | undefined): T => {
  invariant(s !== null && s !== undefined, "value null or undefined");
  return s;
};
