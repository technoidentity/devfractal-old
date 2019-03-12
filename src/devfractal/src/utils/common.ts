import { assert } from 'tcomb'

// @TODO: only in development
export const freeze: <T>(v: T) => Readonly<T> = v => Object.freeze(v)

export const jsonStringify: (obj: object) => string = obj => {
  // tslint:disable-next-line:no-null-keyword
  return JSON.stringify(obj, null, 2)
}

export const debugAssert: (
  condition: () => boolean,
  message?: string,
) => void = (condition, message) => {
  if (process.env.NODE_ENV === 'development') {
    if (!condition()) {
      throw new Error(`assertion error: ${message}`)
    }
  }
}

export const nop: (...args: any[]) => any = () => {
  return undefined
}

const rangeInternal: (
  start: number,
  stop: number,
  step?: number,
) => ReadonlyArray<number> = (start, stop, step = 1) => {
  const result: number[] = []

  assert(step > 0)
  // tslint:disable-next-line: no-loop-statement
  for (let i: number = start; i < stop; i += step) {
    // tslint:disable-next-line: no-array-mutation
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
