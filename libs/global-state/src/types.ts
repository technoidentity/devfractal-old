/* eslint-disable @typescript-eslint/unified-signatures */

import type { Draft } from "immer";
import type { Getter, WritableAtom } from "jotai";

// types copied from jotai
export type Setter = <Value, Args extends unknown[], Result>(
  atom: WritableAtom<Value, Args, Result>,
  ...args: Args
) => Result;

export type Read<Value> = (get: Getter) => Value;

export type Write<Args extends unknown[], Result> = (
  get: Getter,
  set: Setter,
  ...args: Args
) => Result;

// copied types end here

export type ImmerSetter = <Value, Args extends unknown[], Result>(
  atom: WritableAtom<Value, Args, Result>,
  fn: Value | ((draft: Draft<Value>, ...args: Args) => Value | void)
) => Result;

export type ImmerWrite<
  Args extends unknown[],
  Result extends void | Promise<void>
> = (get: Getter, set: ImmerSetter, ...args: Args) => Result;

export type { Atom, Getter, PrimitiveAtom, WritableAtom } from "jotai";
