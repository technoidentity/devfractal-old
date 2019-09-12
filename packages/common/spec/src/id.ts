import { brand, Branded, Mixed, TypeOf } from 'io-ts'
export interface IDBrand {
  readonly ID: unique symbol
}

// tslint:disable-next-line: typedef
export function id<T extends Mixed>(inner: T) {
  return brand(
    inner,
    (n): n is Branded<TypeOf<T>, IDBrand> => inner.is(n),
    'id',
  )
}
