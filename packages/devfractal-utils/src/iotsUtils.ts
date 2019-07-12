import { Either, isRight } from 'fp-ts/lib/Either'
import * as t from 'io-ts'
import { PathReporter } from 'io-ts/lib/PathReporter'
import { String } from 'tcomb'
import { fatal, warning } from './assertions'

export function typeInvariant<A, O, I>(type: t.Type<A, O, I>, args: I): A {
  const decoded: Either<t.Errors, A> = type.decode(args)
  return isRight(decoded)
    ? decoded.right
    : fatal(PathReporter.report(decoded).join('\n'))
}

export function typeWarning<A, O, I>(
  type: t.Type<A, O, I>,
  args: I,
): A | undefined {
  const decoded: Either<t.Errors, A> = type.decode(args)
  warning(type.is(args), PathReporter.report(decoded).join('\n'))
  return isRight(decoded) ? decoded.right : undefined
}

export async function rejected<T>(
  decoded: Either<t.Errors, T> | string,
): Promise<T> {
  return Promise.reject(
    new Error(
      String.is(decoded) ? decoded : PathReporter.report(decoded).join('\n'),
    ),
  )
}

export async function eitherToPromise<T>(
  either: Either<t.Errors, T>,
): Promise<T> {
  return isRight(either) ? either.right : rejected(either)
}

export function opt<P extends t.Props>(
  props: P,
  name?: string,
): t.ReadonlyC<t.PartialC<P>> {
  return t.readonly(t.partial(props), name)
}

export const req: <P extends t.Props>(
  props: P,
  name?: string,
) => t.ReadonlyC<t.TypeC<P>> = (obj, name) => t.readonly(t.type(obj), name)

// tslint:disable readonly-array
export function props<O extends t.Props, R extends t.Props>(
  optional: O,
  required: R,
  name?: string,
): t.IntersectionC<[t.ReadonlyC<t.PartialC<O>>, t.ReadonlyC<t.TypeC<R>>]> {
  return t.intersection(
    [t.readonly(t.partial(optional)), t.readonly(t.type(required))],
    name,
  )
}
// tslint:enable readonly-array

export const lit: typeof t.literal = t.literal
