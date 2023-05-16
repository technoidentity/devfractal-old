import type { Draft } from "immer";
import React from "react";
import { actionHook, useValue } from "./hooks";
import { computed, signal } from "./signal";
import type { Read } from "./types";

export function signalWithHooks<Value extends object>(initialValue: Value) {
  const atom = signal(initialValue);

  const useSignalAction = <P extends any[]>(
    fn: (draft: Draft<Value>, ...args: P) => void
  ) => actionHook(atom, fn);

  // passed fn must always be the same
  const useSignalValue = <Result>(fn: Read<Result>) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const valueAtom = React.useMemo(() => computed(fn), []);

    return useValue(valueAtom);
  };

  return [atom, useSignalAction, useSignalValue] as const;
}
