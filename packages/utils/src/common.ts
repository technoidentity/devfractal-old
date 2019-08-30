import { startOfDay } from 'date-fns'
import { assert } from 'tcomb'
import { date, DateFromISOString, union } from 'technoidentity-spec'

// tslint:disable no-loop-statement no-array-mutation no-object-mutation no-null-keyword

export function freeze<T>(v: T): Readonly<T> {
  return process.env.NODE_ENV !== 'production' ? Object.freeze(v) : v
}

export function jsonStringify(obj: object): string {
  return JSON.stringify(obj, null, 2)
}

export function nop(..._: any[]): any {
  return undefined
}

function rangeInternal(
  start: number,
  stop: number,
  step: number = 1,
): ReadonlyArray<number> {
  assert(step > 0)

  const result: number[] = []
  for (let i: number = start; i < stop; i += step) {
    result.push(i)
  }
  return result
}

export function range(
  start: number,
  stop?: number,
  step?: number,
): ReadonlyArray<number> {
  return stop ? rangeInternal(start, stop, step) : rangeInternal(0, start)
}

export function repeatedly<T>(
  n: number,
  f: (index: number) => T,
): ReadonlyArray<T> {
  const result: T[] = []
  for (let i: number = 0; i < n; i++) {
    result.push(f(i))
  }
  return result
}

export const buildArray: typeof repeatedly = repeatedly

export function keys<T extends Object>(obj: T): ReadonlyArray<keyof T> {
  return Object.keys(obj) as ReadonlyArray<keyof T>
}

export function buildObject<T extends {}, R>(
  obj: T,
  f: (value: T[typeof key], key: keyof T) => R,
): Record<keyof T, R> {
  const result: any = {}
  for (const k of keys(obj)) {
    const v: any = f(obj[k], k)
    if (v !== undefined) {
      result[k] = v
    }
  }
  return result
}

export function today(): Date {
  return startOfDay(new Date())
}

export async function timeout<T>(delay: number, f: () => T = nop): Promise<T> {
  return new Promise(resolve => setTimeout(() => resolve(f()), delay))
}

export async function interval<T>(
  interval: number,
  f: () => T = nop,
): Promise<T> {
  return new Promise(resolve => setInterval(() => resolve(f()), interval))
}

// tslint:disable-next-line: typedef
export const ISODate = union([date, DateFromISOString])

export function pick<T extends {}, K extends keyof T>(
  obj: T,
  ks: ReadonlyArray<K>,
): Pick<T, K> {
  const result: any = {}

  for (const k of keys(obj)) {
    if (ks.includes(k as K)) {
      result[k] = obj[k]
    }
  }

  return result
}

export function omit<T extends {}, K extends keyof T>(
  obj: T,
  ks: ReadonlyArray<K>,
): Omit<T, K> {
  const result: any = {}

  for (const k of keys(obj)) {
    if (!ks.includes(k as K)) {
      result[k] = obj[k]
    }
  }

  return result
}
