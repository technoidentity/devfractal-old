import { brand, BrandC, Branded, Int, Mixed, string, TypeOf } from 'io-ts'

// tslint:disable typedef

export function id<T extends Mixed>(
  inner: T,
): BrandC<T, { readonly id: symbol }> {
  return brand(
    inner,
    (n): n is Branded<TypeOf<T>, { readonly id: unique symbol }> => inner.is(n),
    'id',
  )
}

export const IntID = id(Int)
export type IntID = TypeOf<typeof IntID>

export const StrID = id(string)
export type StrID = TypeOf<typeof IntID>
