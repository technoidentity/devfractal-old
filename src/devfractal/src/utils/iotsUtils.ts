import { Either } from 'fp-ts/lib/Either'
import { Errors, Mixed, Props, ReadonlyC, TypeC, TypeOf } from 'io-ts'
import { reporter } from 'io-ts-reporters'
import { String } from 'tcomb'
import { invariant, warning } from './internal'

export const typeInvariant: <Type extends Mixed, Value extends TypeOf<Type>>(
  type: Type,
  args: Value,
) => Value = (type, args) => {
  const decoded = type.decode(args)
  invariant(type.is(args), reporter(decoded).join('\n'))
  return decoded.getOrElse(args)
}

export const typeWarning: <Type extends Mixed, Value extends TypeOf<Type>>(
  type: Type,
  args: Value,
) => Value = (type, args) => {
  const decoded = type.decode(args)
  warning(type.is(args), reporter(decoded).join('\n'))
  return decoded.getOrElse(args)
}

export type RTType<T extends Props> = ReadonlyC<TypeC<T>>
export type TypeOfRT<T extends Props> = TypeOf<RTType<T>>

export const rejected: <T>(
  decoded: Either<Errors, T> | string,
) => Promise<T> = async decoded =>
  Promise.reject(
    new Error(String.is(decoded) ? decoded : reporter(decoded).join('\n')),
  )

export const eitherToPromise: <T>(
  either: Either<Errors, T>,
) => Promise<T> = async either =>
  either.isRight() ? either.value : rejected(either)
