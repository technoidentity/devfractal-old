import {
  Either,
  Errors,
  ExactType,
  InterfaceType,
  intersection,
  IntersectionC,
  IntersectionType,
  isRight,
  literal,
  Mixed,
  ObjType,
  partial,
  PartialC,
  PartialType,
  PathReporter,
  Props,
  readonly,
  ReadonlyC,
  ReadonlyType,
  string,
  type,
  Type,
  TypeC,
} from 'technoidentity-spec'
import { assert, fatal } from './assertions'
import { omit, pick } from './common'

// tslint:disable readonly-array array-type readonly-keyword

export function cast<A, O, I>(spec: Type<A, O, I>, args: I): A {
  const decoded: Either<Errors, A> = spec.decode(args)
  return isRight(decoded)
    ? decoded.right
    : fatal(PathReporter.report(decoded).join('\n'))
}

export const verifyCast: typeof cast = cast

export function assertCast<A, O, I>(
  spec: Type<A, O, I>,
  args: I,
): A | undefined {
  const decoded: Either<Errors, A> = spec.decode(args)
  assert(spec.is(args), PathReporter.report(decoded).join('\n'))
  return isRight(decoded) ? decoded.right : undefined
}

export const debugCast: typeof assertCast = assertCast

export async function rejected<T>(
  decoded: Either<Errors, T> | string,
): Promise<T> {
  return Promise.reject(
    new Error(
      string.is(decoded) ? decoded : PathReporter.report(decoded).join('\n'),
    ),
  )
}

export async function toPromise<T>(either: Either<Errors, T>): Promise<T> {
  return isRight(either) ? either.right : rejected(either)
}

export function opt<P extends Props>(
  props: P,
  name?: string,
): ReadonlyC<PartialC<P>> {
  return readonly(partial(props), name)
}

export function req<P extends Props>(
  props: P,
  name?: string,
): ReadonlyC<TypeC<P>> {
  return readonly(type(props), name)
}

export function props<O extends Props, R extends Props>(
  optional: O,
  required: R,
  name?: string,
): IntersectionC<[ReadonlyC<PartialC<O>>, ReadonlyC<TypeC<R>>]> {
  return intersection(
    [readonly(partial(optional)), readonly(type(required))],
    name,
  )
}

export const lit: typeof literal = literal

export interface HasPropsIntersection
  extends IntersectionType<[HasProps, HasProps, ...Array<HasProps>]> {}

export interface HasPropsReadonly extends ReadonlyType<HasProps> {}

export type HasPropsOnType = HasPropsReadonly | ExactType<any>

export type HasPropsOnProps =
  | InterfaceType<any>
  | PartialType<any>
  | ObjType<any, any, any, any>

export type HasProps = HasPropsIntersection | HasPropsOnProps | HasPropsOnType

export function getProps<T extends Mixed>(codec: T & HasProps): Props {
  switch (codec._tag) {
    case 'ReadonlyType':
    case 'ExactType':
      return getProps(codec.type)
    case 'InterfaceType':
    case 'ObjType':
    case 'PartialType':
      return codec.props
    case 'IntersectionType':
      return codec.types.reduce<Props>(
        (props, type) => ({ ...props, ...getProps(type as any) }),
        {},
      )
  }
}

export function getProp<T extends Mixed>(
  codec: T & HasProps,
  key: string,
): Mixed | undefined {
  switch (codec._tag) {
    case 'ReadonlyType':
    case 'ExactType':
      return getProp(codec.type, key)
    case 'InterfaceType':
    case 'ObjType':
    case 'PartialType':
      return codec.props[key]
    case 'IntersectionType':
      for (const t of codec.types) {
        const result: Mixed | undefined = getProp(t as any, key)
        if (result !== undefined) {
          return result
        }
      }
      return undefined
  }
}

export function pickProps<T extends Props, K extends keyof T>(
  props: T,
  keys: ReadonlyArray<K>,
): Pick<T, K> {
  return pick(props, keys)
}

export function omitProps<T extends Props, K extends keyof T>(
  props: T,
  keys: ReadonlyArray<K>,
): Omit<T, K> {
  return omit(props, keys)
}
