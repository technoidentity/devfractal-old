import { logError } from "@df/core";
import {
  useQuery,
  useQueryClient,
  type UseQueryOptions,
} from "@tanstack/react-query";
import React from "react";
import invariant from "tiny-invariant";
import type { z } from "zod";
import type { Paths } from "./queryFn";

type Query = Record<
  string | number,
  string | number | boolean | null | undefined
>;
type UseSafeQueryArgs<Spec extends z.ZodTypeAny> = Readonly<{
  queryKey: [Paths, Query?];
  spec: Spec;
  // @TODO: better typing
  options?: Omit<UseQueryOptions, "queryKey">;
}>;

export function useSafeQuery<Spec extends z.ZodTypeAny>({
  spec,
  queryKey,
  options,
}: UseSafeQueryArgs<Spec>) {
  const qc = useQueryClient();
  const fn = options?.queryFn ?? qc.getDefaultOptions().queries?.queryFn;

  invariant(fn, "queryFn is required");

  const opts = React.useMemo(() => {
    const enabled = queryKey.every((p) => !!p) && options?.enabled;
    return { ...options, enabled };
  }, [options, queryKey]);

  const result = useQuery<z.infer<Spec>>(queryKey, fn, opts);

  const data = React.useMemo(
    () => spec.parse(result.data),
    [result.data, spec]
  );

  React.useEffect(() => {
    logError(result.error);
  }, [result.error]);

  return { ...result, data };
}
