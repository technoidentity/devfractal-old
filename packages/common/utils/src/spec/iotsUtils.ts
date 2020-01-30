import { Either, isRight } from 'fp-ts/lib/Either'
import { Errors, literal, string, Type } from 'io-ts'
import { PathReporter } from 'io-ts/lib/PathReporter'
import { assert, fatal } from '../common'

export function cast<A, O, I>(spec: Type<A, O, I>, args: I): A {
  const decoded: Either<Errors, A> = spec.decode(args)
  if (isRight(decoded)) {
    return decoded.right
  }

  fatal(PathReporter.report(decoded).join('\n'))
}

export function assertCast<A, O, I>(spec: Type<A, O, I>, args: I): A {
  const decoded: Either<Errors, A> = spec.decode(args)
  assert(spec.is(args), PathReporter.report(decoded).join('\n'))
  return isRight(decoded) ? decoded.right : args
}

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

export const lit: typeof literal = literal

// export function opt<P extends Props>(
//   props: P,
//   name?: string,
// ): ReadonlyC<PartialC<P>> {
//   return readonly(partial(props), name)
// }

// export function req<P extends Props>(
//   props: P,
//   name?: string,
// ): ReadonlyC<TypeC<P>> {
//   return readonly(type(props), name)
// }

// export function props<O extends Props, R extends Props>(
//   optional: O,
//   required: R,
//   name?: string,
// ): IntersectionC<[ReadonlyC<PartialC<O>>, ReadonlyC<TypeC<R>>]> {
//   return intersection(
//     [readonly(partial(optional)), readonly(type(required))],
//     name,
//   )
// }

// export interface GotPropsIntersection
//   extends IntersectionType<[GotProps, GotProps, ...Array<GotProps>]> {}

// export interface GotPropsReadonly extends ReadonlyType<GotProps> {}

// export type GotPropsOnType = GotPropsReadonly | ExactType<any>

// export type GotPropsOnProps =
//   | InterfaceType<any>
//   | PartialType<any>
//   | ObjType<any, any, any, any>

// export type GotProps = GotPropsIntersection | GotPropsOnProps | GotPropsOnType

// export function getProps<T extends Mixed>(codec: T & GotProps): Props {
//   switch (codec._tag) {
//     case 'ReadonlyType':
//     case 'ExactType':
//       return getProps(codec.type)
//     case 'InterfaceType':
//     case 'ObjType':
//     case 'PartialType':
//       return codec.props
//     case 'IntersectionType':
//       return codec.types.reduce<Props>(
//         (props, type) => ({ ...props, ...getProps(type as any) }),
//         {},
//       )
//   }
// }

// export function getProp<T extends Mixed>(
//   codec: T & GotProps,
//   key: string,
// ): Mixed | undefined {
//   switch (codec._tag) {
//     case 'ReadonlyType':
//     case 'ExactType':
//       return getProp(codec.type, key)
//     case 'InterfaceType':
//     case 'ObjType':
//     case 'PartialType':
//       return codec.props[key]
//     case 'IntersectionType':
//       for (const t of codec.types) {
//         const result: Mixed | undefined = getProp(t as any, key)
//         if (result !== undefined) {
//           return result
//         }
//       }
//       return undefined
//   }
// }

// export function pickProps<T extends Props, K extends keyof T>(
//   props: T,
//   keys: readonly K[],
// ): Pick<T, K> {
//   return pick(props, keys)
// }

// export function omitProps<T extends Props, K extends keyof T>(
//   props: T,
//   keys: readonly K[],
// ): Omit<T, K> {
//   return omit(props, keys)
// }
