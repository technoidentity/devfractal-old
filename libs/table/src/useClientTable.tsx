import type { Handlers } from "@df/local-state";
import { state } from "@df/local-state";
import { castDraft } from "immer";
import React, { useMemo } from "react";
import type { ClientTableState, RowBase, FilterPredicate, Sort } from "./types";
import { paginateRows, predicateRows, searchRows, sortRows } from "./utils";

function useClientTableHandlers<Row extends RowBase>() {
  return React.useMemo(
    () =>
      ({
        handleSort(state, accessor: keyof Row) {
          const order =
            state.sort.order === "asc" && state.sort.orderBy === accessor
              ? "desc"
              : "asc";
          state.page = 1;
          state.sort = { order, orderBy: castDraft(accessor) };
        },

        handleSearch(state, search?: string | undefined) {
          state.search = search;
        },

        setPage(state, page: number) {
          state.page = page;
        },
      } satisfies Handlers<ClientTableState<Row>>),
    []
  );
}

function useLocalState<State, Hs extends Handlers<State>>(
  initialState: State,
  handlers: Hs
) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const useState = React.useMemo(() => state(initialState, handlers), []);
  return useState();
}

export type UseClientTable<Row extends RowBase> = Readonly<{
  rows: readonly Row[];
  perPage?: number;
  search?: string;
  initialPage?: number;
  initialSort?: Sort<Row>;
  searchFields?: "all" | ReadonlyArray<keyof Row>;
  rowPredicate?: FilterPredicate<Row>;
}>;

export function useClientTable<Row extends RowBase>(
  props: UseClientTable<Row>
) {
  const { rows, perPage = 20, initialSort, initialPage } = props;

  const initialState = {
    search: "" as string,
    page: initialPage || 1,
    sort: initialSort || { order: "asc", orderBy: "id" },
  } as const;
  const handlers = useClientTableHandlers<Row>();

  const [state, actions] = useLocalState(initialState, handlers);

  const searched = useMemo(
    () =>
      props.searchFields
        ? searchRows(rows, props.searchFields, state.search)
        : rows,
    [props.searchFields, rows, state.search]
  );

  const filtered = useMemo(
    () =>
      props.rowPredicate
        ? predicateRows(searched, props.rowPredicate)
        : searched,
    [searched, props.rowPredicate]
  );

  const sorted = useMemo(
    () => sortRows(filtered, state.sort),
    [filtered, state.sort]
  );

  const current = React.useMemo(
    () => paginateRows(sorted, state.page, perPage),
    [perPage, sorted, state.page]
  );

  const totalPages = React.useMemo(
    () => Math.ceil(sorted.length / perPage),
    [sorted.length, perPage]
  );

  const selects = {
    searched,
    sorted,
    current,
    totalPages,
  };

  return { props, state, actions, selects };
}
