import type { Reducer } from "react";
import React from "react";

export function updateReducer<T>(state: T, update: Partial<T>): T {
  return { ...state, ...update };
}

export function useUpdateState<T extends object>(initialState: T) {
  const [state, update] = React.useReducer(
    updateReducer as Reducer<T, Partial<T>>,
    initialState
  );

  return [state, update] as const;
}
