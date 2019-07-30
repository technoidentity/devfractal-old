import { Either, isRight } from 'fp-ts/lib/Either'
import * as t from 'io-ts'
import { PathReporter } from 'io-ts/lib/PathReporter'
import { assert, fatal } from './assertions'

export function cast<A, O, I>(spec: t.Type<A, O, I>, args: I): A {
  const decoded: Either<t.Errors, A> = spec.decode(args)
  return isRight(decoded)
    ? decoded.right
    : fatal(PathReporter.report(decoded).join('\n'))
}

export const verifyCast: typeof cast = cast

export function assertCast<A, O, I>(
  spec: t.Type<A, O, I>,
  args: I,
): A | undefined {
  const decoded: Either<t.Errors, A> = spec.decode(args)
  assert(spec.is(args), PathReporter.report(decoded).join('\n'))
  return isRight(decoded) ? decoded.right : undefined
}

export const debugCast: typeof assertCast = assertCast

export async function rejected<T>(
  decoded: Either<t.Errors, T> | string,
): Promise<T> {
  return Promise.reject(
    new Error(
      t.string.is(decoded) ? decoded : PathReporter.report(decoded).join('\n'),
    ),
  )
}

export async function toPromise<T>(either: Either<t.Errors, T>): Promise<T> {
  return isRight(either) ? either.right : rejected(either)
}

export function opt<P extends t.Props>(
  props: P,
  name?: string,
): t.ReadonlyC<t.PartialC<P>> {
  return t.readonly(t.partial(props), name)
}

export function req<P extends t.Props>(
  props: P,
  name?: string,
): t.ReadonlyC<t.TypeC<P>> {
  return t.readonly(t.type(props), name)
}

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

export function intToNumber(i: t.Branded<number, t.IntBrand>): number {
  const decoded: Either<t.Errors, t.Branded<number, t.IntBrand>> = t.Int.decode(
    i,
  )
  return isRight(decoded) ? decoded.right : fatal('Not an integer!')
}
