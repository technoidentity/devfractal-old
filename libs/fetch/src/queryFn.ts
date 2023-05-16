import { cast } from "@df/spec";
import type { QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import qs from "query-string";

import { z } from "zod";
import { get$ } from "./httpMethods";
import invariant from "tiny-invariant";

const { stringify } = qs;

export const Paths = z.array(z.string().or(z.number()).nullish());
export type Paths = Readonly<z.infer<typeof Paths>>;

const toUrl = (
  basePath: string,
  paths: Paths,
  query?: Record<string, any>,
  options?: qs.StringifyOptions
): string => {
  const bp = basePath.trim();
  invariant(!bp.endsWith("/"), "basePath should not end with /");

  const qs = stringify(query || {}, options);
  const q = qs.length > 0 ? `?${qs}` : "";
  return `${bp}/${paths.join("/")}${q}`;
};

export const createToUrl =
  (basePath: string) =>
  (
    paths: Paths,
    query?: Record<string, any>,
    options?: qs.StringifyOptions
  ): string =>
    toUrl(basePath, paths, query, options);

export type ToUrl = ReturnType<typeof createToUrl>;

export const queryFn =
  (basePathOrToUrl: ToUrl | string) =>
  <T, TQueryKey extends QueryKey = QueryKey | [...Paths, Record<string, any>]>({
    queryKey,
  }: QueryFunctionContext<TQueryKey>): Promise<T> => {
    const toUrl =
      typeof basePathOrToUrl === "string"
        ? createToUrl(basePathOrToUrl)
        : basePathOrToUrl;

    const last = queryKey.at(-1);
    const qs = last ? cast(z.record(z.string(), z.any()), last) : {};

    const rest = last ? queryKey.slice(0, -1) : queryKey;
    const paths = cast(Paths, rest);

    return get$(toUrl(paths, qs));
  };

// Should be used only with raw useQuery
export const safeQueryFn = function safeQueryFn<
  TQueryKey extends QueryKey,
  Spec extends z.ZodTypeAny
>(
  toUrlOrbasePath: ToUrl | string,
  spec: Spec
): (context: QueryFunctionContext<TQueryKey>) => Promise<z.infer<Spec>> {
  const toUrl =
    typeof toUrlOrbasePath === "string"
      ? createToUrl(toUrlOrbasePath)
      : toUrlOrbasePath;

  return async (context) => spec.parse(await queryFn(toUrl)(context));
};
