import { is } from "@df/spec";
import type { Draft } from "immer";
import { produce } from "immer";
import type { Getter, PrimitiveAtom, WritableAtom } from "jotai";
import { atom } from "jotai";
import { selectAtom } from "jotai/utils";
import { z } from "zod";
import type { ImmerSetter, ImmerWrite, Read, Write } from "./types";

// change it to extends object?
export function signal<Value extends Object>(initialValue: Value) {
  return atom(initialValue);
}

export function asyncSignal<Value>(read: Read<Value>) {
  return atom(read);
}

export function signals<Value>() {
  return signal<PrimitiveAtom<Value>[]>([]);
}

export function computed<Value>(read: Read<Value>) {
  return atom(read);
}

// export function plainAction<
//   Value,
//   Update,
//   Result extends void,
// >(write: Write<Update, Result>, initialValue?: Value) {
//   return atom(initialValue ?? null, write)
// }

export const select = selectAtom;

export function derived<Value, Args extends unknown[], Result extends void>(
  read: Read<Value>,
  write: Write<Args, Result>
): WritableAtom<Value, Args, Result> {
  return atom(read, write);
}

export function immerAction<Args extends unknown[], Result extends void>(
  write: ImmerWrite<Args, Result>
): WritableAtom<null, Args, Result> {
  const anAtom: any = atom(null, (get, set, ...args: Args) => {
    const setter: ImmerSetter = (atom, fn) => {
      const value = produce(get(atom), is(z.function(), fn) ? fn : () => fn);

      return set(atom, ...(value as any));
    };

    return write(get, setter, ...args);
  });

  return anAtom;
}

export function atomAction<Value, Args extends unknown[], Result extends void>(
  signal: WritableAtom<Value, any, Result>,
  fn: (get: Getter, draft: Draft<Value>, ...args: Args) => void
) {
  return atom(null, (get, set, ...args: Args) => {
    const value = produce(get(signal), (draft) => fn(get, draft, ...args));
    return set(signal, value);
  });
}

export function action<Args extends unknown[], Result extends void>(
  write: ImmerWrite<Args, Result>
): WritableAtom<null, Args, Result>;

export function action<Value, Args extends unknown[], Result extends void>(
  signal: WritableAtom<Value, any, Result>,
  fn: (get: Getter, draft: Draft<Value>, ...args: Args) => void
): WritableAtom<null, Args, Result>;

export function action(...args: [any] | [any, any]): any {
  return args.length === 1 ? immerAction(...args) : atomAction(...args);
}
