import { Either } from 'fp-ts/lib/Either'
import * as t from 'io-ts'
import { reporter } from 'io-ts-reporters'
import { String } from 'tcomb'
import { fatal, warning } from '../index'

export function typeInvariant<
  Type extends t.Mixed,
  Value extends t.TypeOf<Type>
>(type: Type, args: Value): Value {
  const decoded: Either<t.Errors, Value> = type.decode(args)
  return decoded.isRight() ? decoded.value : fatal(reporter(decoded).join('\n'))
}

export function typeWarning<Type extends t.Mixed, Value extends t.TypeOf<Type>>(
  type: Type,
  args: Value,
): Value {
  const decoded: Either<t.Errors, Value> = type.decode(args)
  warning(type.is(args), reporter(decoded).join('\n'))
  return decoded.getOrElse(args)
}

export type RTType<T extends t.Props> = t.ReadonlyC<t.TypeC<T>>
export type TypeOfRT<T extends t.Props> = t.TypeOf<RTType<T>>

export const rejected: <T>(
  decoded: Either<t.Errors, T> | string,
) => Promise<T> = async decoded =>
  Promise.reject(
    new Error(String.is(decoded) ? decoded : reporter(decoded).join('\n')),
  )

export const eitherToPromise: <T>(
  either: Either<t.Errors, T>,
) => Promise<T> = async either =>
  either.isRight() ? either.value : rejected(either)

export const opt: <P extends t.Props>(
  props: P,
  name?: string,
) => t.ReadonlyC<t.PartialC<P>> = (props, name) =>
  t.readonly(t.partial(props), name)

export const req: <P extends t.Props>(
  props: P,
  name?: string,
) => t.ReadonlyC<t.TypeC<P>> = (obj, name) => t.readonly(t.type(obj), name)

export const props: <O extends t.Props, R extends t.Props>(
  optional: O,
  required: R,
  name?: string,
) => t.IntersectionC<[t.ReadonlyC<t.PartialC<O>>, t.ReadonlyC<t.TypeC<R>>]> = (
  optional,
  required,
  name,
) =>
  t.intersection(
    [t.readonly(t.partial(optional)), t.readonly(t.type(required))],
    name,
  )
