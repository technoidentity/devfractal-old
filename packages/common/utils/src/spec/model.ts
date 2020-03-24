import { Props } from 'io-ts'
import { OptionalKeys, RequiredKeys } from 'utility-types'
import { NumID, StrID } from './id'
import { AnyObj, obj, ObjC } from './obj'

type ID = typeof StrID | typeof NumID

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface IDProps {
  readonly id: ID
}

interface ObjProps {
  readonly [s: string]: AnyObj
}

interface ResArgs<
  Opt extends Props,
  Req extends Props & IDProps,
  Many extends ObjProps,
  One extends ObjProps
> {
  readonly plain: ObjC<Opt, Req>
  readonly many?: Many
  readonly one?: One
}

export type PickRequired<T> = Pick<T, RequiredKeys<T>>
export type PickOptional<T> = Pick<T, OptionalKeys<T>>

export type ModelC<P> = ObjC<Required<PickOptional<P>>, PickRequired<P>>

export function model<
  Opt extends Props,
  Req extends Props & IDProps,
  Many extends ObjProps = {},
  One extends ObjProps = {}
>({
  plain: { optional, required },
  many,
  one,
}: ResArgs<Opt, Req, Many, One>): ModelC<
  Partial<Opt> & Partial<Many> & Req & One
> {
  return obj(
    many ? { ...optional, ...many } : optional,
    one ? { ...required, ...one } : required,
  ) as any
}
