import { Draft, produce } from 'immer'

// @TODO: only in development
export const freeze: <T>(v: T) => Readonly<T> = v => Object.freeze(v)

export const jsonStringify: (obj: object) => string = obj => {
  // tslint:disable-next-line:no-null-keyword
  return JSON.stringify(obj, null, 2)
}

export type Mutable<T> = { -readonly [P in keyof T]: Mutable<T[P]> } // Remove readonly

export function mutative<T>(obj: T, f: (draft: Mutable<T>) => void): T {
  return produce(obj, (f as unknown) as (
    this: Draft<T>,
    draftState: Draft<T>,
  ) => void | T)
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
