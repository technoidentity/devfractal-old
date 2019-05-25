import { assert } from 'tcomb'

// tslint:disable no-loop-statement no-array-mutation no-object-mutation no-null-keyword

export const freeze: <T>(v: T) => Readonly<T> = v =>
  process.env.NODE_ENV === 'production' ? v : Object.freeze(v)

export const jsonStringify: (obj: object) => string = obj =>
  JSON.stringify(obj, null, 2)

export const nop: (...args: any[]) => any = () => undefined

const rangeInternal: (
  start: number,
  stop: number,
  step?: number,
) => ReadonlyArray<number> = (start, stop, step = 1) => {
  assert(step > 0)

  const result: number[] = []
  for (let i: number = start; i < stop; i += step) {
    result.push(i)
  }
  return result
}

export const range: (
  start: number,
  stop?: number,
  step?: number,
) => ReadonlyArray<number> = (start, stop, step) =>
  stop ? rangeInternal(start, stop, step) : rangeInternal(0, start)

export function repeatedly<T>(n: number, f: () => T): ReadonlyArray<T> {
  const result: T[] = []
  for (let i: number = 0; i < n; i++) {
    result.push(f())
  }
  return result
}

export function buildObject<T, R>(
  obj: T,
  // tslint:disable-next-line: no-use-before-declare
  f: (value: T[typeof key], key: keyof T) => R,
): Record<keyof T, R> {
  const result: any = {}
  for (const k of keys(obj)) {
    const v: any = f(obj[k], k)
    if (v !== undefined) {
      // tslint:disable-next-line:no-object-mutation
      result[k] = v
    }
  }
  return result
}

export function keys<T extends Record<string, unknown>>(
  obj: T,
): ReadonlyArray<keyof T> {
  return Object.keys(obj) as ReadonlyArray<keyof T>
}
