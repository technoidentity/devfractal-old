import type { Draft } from "immer";
import { produce } from "immer";
import type { Atom, PrimitiveAtom, WritableAtom } from "jotai";
import { useAtomValue, useSetAtom } from "jotai";
import React from "react";

export function useValue<Value>(
  signal: Atom<Value> | Atom<Promise<Value>> | Atom<Value | Promise<Value>>
) {
  return useAtomValue(signal);
}

export function useSlice<
  Value,
  Args extends unknown[],
  Result extends void | Promise<void>
>(atom: WritableAtom<Value, Args, Result>) {
  return [useValue(atom), useAction(atom)];
}

export const useAction = useSetAtom;

export function useImmerSetAtom<Value, Result>(
  atom: WritableAtom<Value, [(value: Value) => Value], Result>
) {
  const setState = useSetAtom(atom);
  const setStateWithImmer = React.useCallback(
    (fn: (draft: Draft<Value>) => void) => setState(produce(fn)),
    [setState]
  );
  return setStateWithImmer;
}

export function actionHook<Value, Args extends unknown[]>(
  signal: PrimitiveAtom<Value>,
  fn: (draft: Draft<Value>, ...args: Args) => void
) {
  return function useAction(...args: Args) {
    const set = useImmerSetAtom(signal);
    return set((draft) => fn(draft, ...args));
  };
}
