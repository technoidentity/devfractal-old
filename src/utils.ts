import { produce, Draft } from 'immer'

type Mutable<T> = { -readonly [P in keyof T]: Mutable<T[P]> } // Remove readonly

export function mutative<T>(obj: T, f: (draft: Mutable<T>) => void): T {
  return produce(obj, (f as unknown) as (
    this: Draft<T>,
    draftState: Draft<T>,
  ) => void | T)
}
