import { Either, isRight } from 'fp-ts/lib/Either'
import * as t from 'io-ts'
import { PathReporter } from 'io-ts/lib/PathReporter'
import { assert, fatal } from './assertions'
import { omit, pick } from './common'

// tslint:disable readonly-array array-type readonly-keyword

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

export const lit: typeof t.literal = t.literal

export interface HasPropsIntersection
  extends t.IntersectionType<[HasProps, HasProps, ...Array<HasProps>]> {}

export interface HasPropsReadonly extends t.ReadonlyType<HasProps> {}

export type HasPropsOnType = HasPropsReadonly | t.ExactType<any>

export type HasPropsOnProps = t.InterfaceType<any> | t.PartialType<any>

export type HasProps = HasPropsIntersection | HasPropsOnProps | HasPropsOnType

export function getProps<T extends t.Mixed>(codec: T & HasProps): t.Props {
  switch (codec._tag) {
    case 'ReadonlyType':
    case 'ExactType':
      return getProps(codec.type)
    case 'InterfaceType':
    case 'PartialType':
      return codec.props
    case 'IntersectionType':
      return codec.types.reduce<t.Props>(
        (props, type) => ({ ...props, ...getProps(type as any) }),
        {},
      )
  }
}

export function getProp<T extends t.Mixed>(
  codec: T & HasProps,
  key: string,
): t.Mixed | undefined {
  switch (codec._tag) {
    case 'ReadonlyType':
    case 'ExactType':
      return getProp(codec.type, key)
    case 'InterfaceType':
    case 'PartialType':
      return codec.props[key]
    case 'IntersectionType':
      for (const t of codec.types) {
        const result: t.Mixed | undefined = getProp(t as any, key)
        if (result !== undefined) {
          return result
        }
      }
      return undefined
  }
}

export function pickProps<T extends t.Props, K extends keyof T>(
  props: T,
  keys: ReadonlyArray<K>,
): Pick<T, K> {
  return pick(props, keys)
}

export function omitProps<T extends t.Props, K extends keyof T>(
  props: T,
  keys: ReadonlyArray<K>,
): Omit<T, K> {
  return omit(props, keys)
}
