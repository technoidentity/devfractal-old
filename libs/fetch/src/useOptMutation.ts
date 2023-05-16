import type { QueryClient } from "@tanstack/react-query";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { produce } from "immer";
import React from "react";
import type { Paths } from "./queryFn";

export function onMutate<T extends { id: any }>(
  listPaths: Paths,
  queryClient: QueryClient
) {
  return async (card: T) => {
    await queryClient.cancelQueries(listPaths);

    const oldList = queryClient.getQueryData(listPaths);

    queryClient.setQueryData(
      listPaths,
      produce((draft: any) => {
        const idx = draft.findIndex((c: T) => c.id === card.id);
        if (idx === -1) {
          console.warn("idx is -1");
          return;
        }
        draft[idx] = card;
      })
    );

    return { oldList };
  };
}

export function useOptMutation<T extends { id: any }>(
  listPaths: any, // @TODO: handle query too!
  update: (card: T) => Promise<T>
) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(update, {
    onSettled: React.useCallback(
      () => queryClient.invalidateQueries(listPaths, { exact: true }),
      [queryClient, listPaths]
    ),
    onMutate: React.useMemo(
      () => onMutate(listPaths, queryClient),
      [queryClient, listPaths]
    ),
    onError: (_err, _new, ctx) => {
      // @TODO: notify
      if (ctx !== undefined) {
        queryClient.setQueryData(listPaths, ctx.oldList);
      }
    },
  });

  return mutate;
}
