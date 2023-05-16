import { type QueryKey, type UseQueryOptions } from "@tanstack/react-query";
import { ensure } from "@df/spec";

import { useQuery } from "@tanstack/react-query";
import type { z } from "zod";
import React from "react";

type QueryOptions<Data, TQueryKey extends QueryKey> = Omit<
  UseQueryOptions<unknown, Error, Data, TQueryKey>,
  "queryKey" | "queryFn"
>;

type SafeQueryArgs<
  Spec extends z.ZodTypeAny,
  Args extends any[],
  TQueryKey extends QueryKey
> = Readonly<{
  spec: Spec;
  key: (...args: Args) => TQueryKey;
  fetcher?: (args: { queryKey: TQueryKey }) => Promise<z.infer<Spec>>;
}>;

export function safeQuery<
  Spec extends z.ZodTypeAny,
  Args extends any[],
  TQueryKey extends QueryKey
>({ spec, key, fetcher }: SafeQueryArgs<Spec, Args, TQueryKey>) {
  return (
    options: QueryOptions<z.infer<Spec>, TQueryKey> &
      (Args extends [] ? { keys?: undefined } : { keys: Args })
  ) => {
    const selectFn = options.select;
    // @TODO: use useEvent instead
    const select =
      selectFn !== undefined
        ? React.useCallback(
            (data: z.infer<Spec>) => selectFn(data),
            // eslint-disable-next-line react-hooks/exhaustive-deps
            []
          )
        : undefined;

    const queryKey = key(...(options.keys as any));

    const result = useQuery({ ...options, queryKey, queryFn: fetcher, select });

    ensure(spec, result.data);
    // @TODO: ensure(Error, spec.error)

    return result;
  };
}
