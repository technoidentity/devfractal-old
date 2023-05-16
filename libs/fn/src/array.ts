import invariant from "tiny-invariant";
import { all, map, minByProp, range, toArray } from "./iter";
import { pipe } from "./pipe";

export function first<T>(arr: readonly T[]): T {
  invariant(arr.length > 0, "first undefined on an empty array");
  return arr[0];
}

export function first$<T>(arr: readonly T[]): T | undefined {
  return arr.at(0);
}

export function last<T>(arr: readonly T[]): T {
  invariant(arr.length > 0, "last undefined on an empty array");
  return arr[arr.length - 1];
}

export function last$<T>(arr: readonly T[]): T | undefined {
  return arr.at(-1);
}

export function aget(index: number) {
  return <T>(arr: readonly T[]): T => {
    const r = arr.at(index);
    invariant(r !== undefined, "index out of bounds");
    return r;
  };
}

export function push<T>(...v: T[]) {
  return (arr: readonly T[]): T[] => [...arr, ...v];
}

export function pop<T>(arr: readonly T[]): T[] {
  return arr.slice(0, arr.length - 1);
}

export function unshift<T>(...v: T[]) {
  return (arr: readonly T[]): T[] => [...v, ...arr];
}

export function shift<T>(arr: readonly T[]): T[] {
  return arr.slice(1);
}

export function pushTo<T>(
  src: readonly T[],
  from: number = 0,
  to: number = src.length
) {
  return (dest: T[]): T[] => {
    // mutates 'dest' returns the same
    for (let i = from; i < to; i++) {
      dest.push(src[i]);
    }

    return dest;
  };
}

export function insert<T>(index: number, ...value: T[]) {
  return (arr: readonly T[]): T[] => {
    invariant(index >= 0 && index <= arr.length, "index out of bounds");

    return pipe([], pushTo(arr, 0, index), pushTo(value), pushTo(arr, index));
  };
}

export function replace<T>(index: number, value: T) {
  return (arr: readonly T[]): T[] => {
    invariant(index >= 0 && index < arr.length, "index out of bounds");

    return pipe([], pushTo(arr, 0, index), push(value), pushTo(arr, index + 1));
  };
}

export function remove(index: number) {
  return <T>(arr: readonly T[]): T[] => {
    invariant(index >= 0 && index < arr.length, "index out of bounds");
    return pipe([], pushTo(arr, 0, index), pushTo(arr, index + 1));
  };
}

export function copy<T>(arr: readonly T[]): T[] {
  return [...arr];
}

export function paged(page: number, limit: number) {
  return <T>(arr: readonly T[]): T[] => {
    invariant(limit > 0, "limit must be greater than 0");
    invariant(page > 0, "page must be greater than 0");
    invariant((page - 1) * limit < arr.length, "page out of bounds");

    return arr.slice((page - 1) * limit, page * limit);
  };
}

function defaultEq<T>(fst: T, snd: T): boolean {
  return fst === snd;
}

export function arrayEqual<T>(fst: readonly T[]) {
  return (snd: readonly T[], eq = defaultEq): boolean =>
    fst.length !== snd.length
      ? false
      : pipe(
          range(fst.length),
          all((i) => eq(fst[i], snd[i]))
        );
}

type DeepFlattenArgs<T> = ReadonlyArray<T | DeepFlattenArgs<T>>;

export function deepFlatten<T>(arr: DeepFlattenArgs<T>): T[] {
  const isArray = (x: unknown): x is DeepFlattenArgs<any> => Array.isArray(x);

  const result: T[] = [];
  for (const e of arr) {
    result.push(...(isArray(e) ? deepFlatten(e) : [e]));
  }

  return result;
}

export function zipAll<T>(...args: T[][]): T[][] {
  if (args.length === 0) {
    return [];
  }
  const len = pipe(args, minByProp("length")).length;

  return pipe(
    range(len),
    map((i) => args.map((arr) => arr[i])),
    toArray
  );
}

export function splitAt<T>(index: number) {
  return (arr: readonly T[]): [readonly T[], readonly T[]] => {
    return [arr.slice(0, index), arr.slice(index)];
  };
}

export function sorted<T>(f: (a: T, b: T) => number) {
  return (arr: Iterable<T>): T[] => {
    return [...arr].sort(f);
  };
}

export function reversed<T>(arr: Iterable<T>): T[] {
  return [...arr].reverse();
}

export function uniqueSorted<T>(arr: Iterable<T>): T[] {
  const result: T[] = [];
  for (const e of arr) {
    if (last$(result) !== e) {
      result.push(e);
    }
  }

  return result;
}

export function unique<T>(arr: Iterable<T>): T[] {
  const result: T[] = [];
  for (const e of arr) {
    if (!result.includes(e)) {
      result.push(e);
    }
  }

  return result;
}

export function minIndex<T extends string | number | Date>(arr: T[]): number {
  invariant(arr.length > 0, "minIndex not defined on empty array");

  let mi = 0;
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < arr[mi]) {
      mi = i;
    }
  }

  return mi;
}

export const maxIndex = (arr: number[]): number => {
  invariant(arr.length > 0, "maxIndex not defined on empty array");

  let mi = 0;
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > arr[mi]) {
      mi = i;
    }
  }

  return mi;
};

export function* islice<T>(
  arr: readonly T[],
  from: number = 0,
  to: number = arr.length
): IterableIterator<T> {
  for (let i = from; i < to; i++) {
    yield arr[i];
  }
}
