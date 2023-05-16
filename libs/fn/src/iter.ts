import invariant from "tiny-invariant";
import { pipe } from "./pipe";

export function isIterable(x: unknown): x is Iterable<any> {
  return x != null && typeof (x as any)[Symbol.iterator] === "function";
}

export function iterator<T>(iter: Iterable<T>): Iterator<T> {
  return iter[Symbol.iterator]();
}

export function iterable<T>(iter: Iterator<T>): Iterable<T> {
  return {
    [Symbol.iterator]() {
      return iter;
    },
  };
}

export function toIterable<T>(iter: Iterable<T> | Iterator<T>): Iterable<T> {
  return isIterable(iter) ? iter : iterable(iter);
}

export function toIterator<T>(iter: Iterable<T> | Iterator<T>): Iterator<T> {
  return isIterable(iter) ? iter[Symbol.iterator]() : iter;
}

export function* range(start: number, stop?: number): IterableIterator<number> {
  invariant(start >= 0, "start must be >= 0");

  const first = stop ? start : 0;
  const last = stop ? stop : start;

  invariant(last >= first, "last must be >= first");

  for (let i = first; i < last; i += 1) {
    yield i;
  }
}

export function* repeat<T>(n: number, x: T): IterableIterator<T> {
  invariant(n >= 0, "n must be >= 0");

  for (let i = 0; i < n; i += 1) {
    yield x;
  }
}

export function* repeatedly<T>(n: number, f: () => T): IterableIterator<T> {
  invariant(n >= 0, "n must be >= 0");
  for (let i = 0; i < n; i += 1) {
    yield f();
  }
}

export function* enumerate<T>(
  iter: Iterable<T>
): IterableIterator<readonly [T, number]> {
  let i = 0;
  for (const e of iter) {
    yield [e, i] as const;
    i += 1;
  }
}

export function toArray<T>(iter: Iterable<T>): T[] {
  return [...iter];
}

export function toSet<T>(iter: Iterable<T>): Set<T> {
  return new Set(iter);
}

export function iterToMap<K, V>(iter: Iterable<[K, V]>): Map<K, V> {
  return new Map(iter);
}

export function length<T>(iter: Iterable<T>): number {
  let len = 0;
  for (const _ of iter) {
    len += 1;
  }

  return len;
}

export function map<T, U>(f: (x: T) => U) {
  return function* (iter: Iterable<T>): IterableIterator<U> {
    for (const e of iter) {
      yield f(e);
    }
  };
}

export function filter<T>(pred: (x: T) => boolean) {
  return function* (iter: Iterable<T>): IterableIterator<T> {
    for (const e of iter) {
      if (pred(e)) {
        yield e;
      }
    }
  };
}

export function reduce<T, U>(f: (acc: U, x: T) => U, init: U) {
  return (arr: Iterable<T>): U => {
    let result = init;
    for (const e of arr) {
      result = f(result, e);
    }

    return result;
  };
}

export function find<T>(f: (x: T) => boolean) {
  return (arr: Iterable<T>): T | undefined => {
    for (const e of arr) {
      if (f(e)) {
        return e;
      }
    }

    return undefined;
  };
}

export function findIndex<T>(f: (x: T) => boolean) {
  return (arr: Iterable<T>): number => {
    let i = 0;
    for (const e of arr) {
      if (f(e)) {
        return i;
      }
      i += 1;
    }

    return -1;
  };
}

export function take<T>(n: number) {
  return (arr: Iterable<T>): IterableIterator<T> => {
    invariant(n >= 0, "n must be >= 0");

    return pipe(
      enumerate(arr),
      takeWhile(([_, i]) => i < n),
      map(([e]) => e)
    );
  };
}

export function skip<T>(n: number) {
  return (arr: Iterable<T>): IterableIterator<T> => {
    invariant(n >= 0, "n must be >= 0");

    return pipe(
      enumerate(arr),
      skipWhile(([_, i]) => i < n),
      map(([e]) => e)
    );
  };
}

export function takeWhile<T>(f: (x: T) => boolean) {
  return function* (arr: Iterable<T>): IterableIterator<T> {
    for (const e of arr) {
      if (!f(e)) {
        break;
      }

      yield e;
    }
  };
}

export function skipWhile<T>(f: (x: T) => boolean) {
  return function* (arr: Iterable<T>): IterableIterator<T> {
    let skip = true;
    for (const e of arr) {
      if (skip && f(e)) {
        continue;
      }

      skip = false;
      yield e;
    }
  };
}

export function all<T>(f: (v: T) => boolean) {
  return (arr: Iterable<T>): boolean => {
    for (const e of arr) {
      if (!f(e)) {
        return false;
      }
    }

    return true;
  };
}

export function any<T>(f: (v: T) => boolean) {
  return (arr: Iterable<T>): boolean => {
    for (const e of arr) {
      if (f(e)) {
        return true;
      }
    }

    return false;
  };
}

export function each(f: (x: unknown) => void) {
  return (arr: Iterable<unknown>): void => {
    for (const e of arr) {
      f(e);
    }
  };
}

export function iterSlice<T>(start: number, stop?: number) {
  return function* (iter: Iterable<T>): IterableIterator<T> {
    invariant(start >= 0, "start must be >= 0");

    let i = 0;
    for (const e of iter) {
      if (stop !== undefined && i >= stop) {
        break;
      }
      if (i >= start) {
        yield e;
      }

      i += 1;
    }
  };
}

export function iterEqual<T>(snd: Iterable<T>) {
  return (fst: Iterable<T>): boolean => {
    const fstIter = iterator(fst);
    const sndIter = iterator(snd);

    while (true) {
      const fstNext = fstIter.next();
      const sndNext = sndIter.next();

      if (fstNext.done && sndNext.done) {
        return true;
      }

      if (fstNext.done || sndNext.done) {
        return false;
      }

      if (fstNext.value !== sndNext.value) {
        return false;
      }
    }
  };
}

export function groupBy<T, K extends string | number>(f: (x: T) => K) {
  return (arr: Iterable<T>): Record<K, T[]> => {
    const result: Record<K, T[]> = {} as any;

    for (const v of arr) {
      const k = f(v);
      if (!result[k]) {
        result[k] = [v];
      } else {
        result[k].push(v);
      }
    }

    return result;
  };
}

export function mapGroupBy<T, K>(f: (x: T) => K) {
  return (arr: Iterable<T>): Map<K, T[]> => {
    const result = new Map<K, T[]>();

    for (const v of arr) {
      const k = f(v);
      if (!result.has(k)) {
        result.set(k, [v]);
      } else {
        result.get(k)!.push(v);
      }
    }

    return result;
  };
}

type DeepFlattenArgs<T> = Iterable<T | DeepFlattenArgs<T>>;

export function* iterFlatten<T>(arr: DeepFlattenArgs<T>): IterableIterator<T> {
  const isArray = (x: unknown): x is DeepFlattenArgs<any> => Array.isArray(x);

  for (const e of arr) {
    if (isArray(e)) {
      yield* iterFlatten(e);
    } else {
      yield e;
    }
  }
}

export function chain<T>(...args: Iterable<T>[]) {
  return function* (first: Iterable<T>): IterableIterator<T> {
    yield* first;
    for (const arr of args) {
      yield* arr;
    }
  };
}

export function flatMap<T, U>(f: (x: T) => Iterable<U>) {
  return function* (arr: Iterable<T>): IterableIterator<U> {
    for (const e of arr) {
      yield* f(e);
    }
  };
}

export function* flatten<T>(
  arr: Iterable<Iterable<T>> | Iterable<ReadonlyArray<T>>
): IterableIterator<T> {
  for (const e of arr) {
    yield* e;
  }
}

export function zip<T>(second: Iterable<T>) {
  return function* <U>(first: Iterable<U>) {
    const fi = iterator(first);
    const si = iterator(second);

    while (true) {
      const fnext = fi.next();
      const snext = si.next();

      if (fnext.done || snext.done) {
        break;
      }

      yield [fnext.value, snext.value] as const;
    }
  };
}

export function zipLongest<T, U>(
  snd: Iterable<U>,
  fstDefault: T,
  sndDefault: U
) {
  return function* (fst: Iterable<T>) {
    const fstIter = iterator(fst);
    const sndIter = iterator(snd);

    while (true) {
      const fstNext = fstIter.next();
      const sndNext = sndIter.next();

      if (fstNext.done && sndNext.done) {
        break;
      }

      yield [
        fstNext.done ? fstDefault : fstNext.value,
        sndNext.done ? sndDefault : sndNext.value,
      ] as const;
    }
  };
}

export function fmax<T>(less: (x: T, y: T) => boolean) {
  return (arr: Iterable<T>): T => {
    const iter = iterator(arr);
    const n = iter.next();
    invariant(!n.done, "maxBy undefined on an empty iterable");

    let max = n.value;
    while (true) {
      const n = iter.next();
      if (n.done) {
        break;
      }

      const e = n.value;
      if (less(max, e)) {
        max = e;
      }
    }

    return max;
  };
}

export function fmin<T>(less: (x: T, y: T) => boolean) {
  return (arr: Iterable<T>): T => {
    const iter = iterator(arr);
    const n = iter.next();
    invariant(!n.done, "minBy undefined on an empty iterable");

    let min = n.value;
    while (true) {
      const n = iter.next();
      if (n.done) {
        break;
      }

      const e = n.value;
      if (less(e, min)) {
        min = e;
      }
    }

    return min;
  };
}

export function min<T extends number | string | Date>(arr: Iterable<T>): T {
  return pipe(
    arr,
    fmin((x: T, y: T) => x < y)
  );
}

export function max<T extends number | string | Date>(arr: Iterable<T>): T {
  return pipe(
    arr,
    fmax((x, y) => x < y)
  );
}

export function maxByProp<T, K extends keyof T>(k: K) {
  return (arr: Iterable<T>): T =>
    pipe(
      arr,
      fmax((x, y) => x[k] < y[k])
    );
}

export function minByProp<T, K extends keyof T>(k: K) {
  return (arr: Iterable<T>): T =>
    pipe(
      arr,
      fmin((x, y) => x[k] < y[k])
    );
}

export function maxBy<T>(f: (x: T) => number) {
  return (arr: Iterable<T>): T =>
    pipe(
      arr,
      fmax((x, y) => f(x) < f(y))
    );
}

export function minBy<T>(f: (x: T) => number) {
  return (arr: Iterable<T>): T =>
    pipe(
      arr,
      fmin((x, y) => f(x) < f(y))
    );
}

export function empty<T>(): Iterable<T> {
  return [];
}

export function snoc<T>(
  iter: Iterator<T> | Iterable<T>
): readonly [head: T | undefined, tail: Iterator<T>] {
  iter = toIterator(iter);
  const head = iter.next();

  return [head.value, iter] as const;
}

export function cons<T>(x: T) {
  return function* (iter: Iterable<T> | Iterator<T>): IterableIterator<T> {
    yield x;
    yield* toIterable(iter);
  };
}

export function match<T, U>(
  iter: Iterable<T> | Iterator<T>,
  empty: () => U,
  nonEmpty: (head: T, tail: Iterator<T>) => U
): U {
  const [head, tail] = snoc(iter);
  return head === undefined ? empty() : nonEmpty(head, tail);
}

export function* reverseIterable<T>(arr: readonly T[]): IterableIterator<T> {
  for (let i = arr.length - 1; i >= 0; i--) {
    yield arr[i];
  }
}

export function zipWith<T, U, T3>(snd: Iterable<U>, fn: (v1: T, v2: U) => T3) {
  return (fst: Iterable<T>): T3[] => {
    const result = pipe(
      fst,
      zip(snd),
      map(([v1, v2]) => fn(v1, v2)),
      toArray
    );

    return result;
  };
}
