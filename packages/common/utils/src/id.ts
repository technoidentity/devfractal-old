import { brand, BrandC, Branded, Int, Mixed, string, TypeOf } from 'io-ts'

// tslint:disable typedef

export function id<T extends Mixed>(
  inner: T,
  name?: string,
): BrandC<T, { readonly id: symbol }> {
  return brand(
    inner,
    (n): n is Branded<TypeOf<T>, { readonly id: unique symbol }> => inner.is(n),
    name || `id<${inner.name}`,
  )
}

export const IntID = id(Int, 'IntID')
export type IntID = TypeOf<typeof IntID>

export const StrID = id(string, 'StrID')
export type StrID = TypeOf<typeof IntID>
