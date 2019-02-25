import { Either } from 'fp-ts/lib/Either'
import { Errors, Props, ReadonlyC, TypeC, TypeOf } from 'io-ts'
import { reporter } from 'io-ts-reporters'
import { String } from 'tcomb'

export const rejected: <T>(
  decoded: Either<Errors, T> | string,
) => Promise<T> = async decoded =>
  Promise.reject(
    new Error(String.is(decoded) ? decoded : reporter(decoded).join('\n')),
  )

export const toPromise: <T>(
  decoded: Either<Errors, T>,
) => Promise<T> = async decoded =>
  decoded.isRight() ? decoded.value : rejected(decoded)

export type VT<T extends Props> = ReadonlyC<TypeC<T>>
export type TVT<T extends Props> = TypeOf<VT<T>>
