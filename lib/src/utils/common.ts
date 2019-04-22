import { assert } from 'tcomb'

// tslint:disable no-loop-statement no-array-mutation no-array-mutation no-null-keyword

// @TODO: only in development
export const freeze: <T>(v: T) => Readonly<T> = v => Object.freeze(v)

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

export function buildObject(obj: any, f: (key: any) => any): any {
  const result: any = {}
  for (const k of Object.keys(obj)) {
    // tslint:disable-next-line:no-object-mutation
    result[k] = f(k as any)
  }
  return result
}

interface Obj {
  readonly [s: string]: unknown
}

export function keys<T extends Obj>(obj: T): ReadonlyArray<keyof T> {
  return Object.keys(obj) as ReadonlyArray<keyof T>
}
