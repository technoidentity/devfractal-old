import type { Handlers } from "@df/local-state";
import { getReducer } from "@df/local-state";
import type { Draft } from "immer";
import { produce } from "immer";
import { useSetAtom } from "jotai";
import { atomWithReducer } from "jotai/utils";

export function signalWithReducer<State, Action>(
  initial: State,
  reducer: (state: Draft<State>, action: Action) => void
) {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const r = produce(reducer) as (state: State, action: Action) => State;
  return atomWithReducer(initial, r);
}

export function slice<State, Hs extends Handlers<State>>(
  initial: State,
  slices: Hs
) {
  return signalWithReducer(initial, getReducer<State, Hs>(slices));
}

export const useDispatch = useSetAtom;
