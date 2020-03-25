import {
  boolean,
  BooleanC,
  BrandC,
  Int,
  IntBrand,
  Mixed,
  number,
  NumberC,
  Props,
  string,
  StringC,
  TypeOf,
} from 'io-ts'
import { PickByValue } from 'utility-types'
import { buildObject, omit, pick } from '../common'
import { IDC, isID } from './id'
import { isMany, many, ManyC } from './many'
import {
  AnyObj,
  exactObj,
  obj,
  ObjC,
  opt,
  OptC,
  OptKeys,
  PropsKeys,
  PropsType,
  req,
  ReqC,
  ReqKeys,
  ReqType,
} from './obj'
import { isOne, one, OneC } from './one'
import { option, OptionC } from './option'

export type ObjPick<
  Opt extends Props,
  Req extends Props,
  K extends PropsKeys<Opt, Req>
> = ObjC<
  Pick<Opt, Extract<OptKeys<Opt, Req>, K>>,
  Pick<Req, Extract<ReqKeys<Opt, Req>, K>>
>

export type TypeOfPick<
  Opt extends Props,
  Req extends Props,
  K extends PropsKeys<Opt, Req>
> = TypeOf<ObjPick<Opt, Req, K>>

export function objPick<
  Opt extends Props,
  Req extends Props,
  K extends PropsKeys<Opt, Req>
>(
  spec: ObjC<Opt, Req>,
  keys: readonly K[],
  name?: string,
): ObjPick<Opt, Req, K> {
  return obj(
    pick(spec.optional, keys as ReadonlyArray<Extract<OptKeys<Opt, Req>, K>>),
    pick(spec.required, keys as ReadonlyArray<Extract<ReqKeys<Opt, Req>, K>>),
    name,
  )
}

export type ObjOmit<
  Opt extends Props,
  Req extends Props,
  K extends PropsKeys<Opt, Req>
> = ObjC<
  Omit<Opt, Extract<OptKeys<Opt, Req>, K>>,
  Omit<Req, Extract<ReqKeys<Opt, Req>, K>>
>

export type TypeOfOmit<
  Opt extends Props,
  Req extends Props,
  K extends PropsKeys<Opt, Req>
> = TypeOf<ObjOmit<Opt, Req, K>>

export function objOmit<
  Opt extends Props,
  Req extends Props,
  K extends PropsKeys<Opt, Req>
>(
  spec: ObjC<Opt, Req>,
  keys: readonly K[],
  name?: string,
): ObjC<
  Omit<Opt, Extract<OptKeys<Opt, Req>, K>>,
  Omit<Req, Extract<ReqKeys<Opt, Req>, K>>
> {
  return obj(
    omit(spec.optional, keys as ReadonlyArray<Extract<OptKeys<Opt, Req>, K>>),
    omit(spec.required, keys as ReadonlyArray<Extract<ReqKeys<Opt, Req>, K>>),
    name,
  )
}

export function objCombine<
  Opt extends Props,
  Req extends Props,
  Opt2 extends Props,
  Req2 extends Props
>(
  p: ObjC<Opt, Req>,
  p2: ObjC<Opt2, Req2>,
  name?: string,
): ObjC<Opt & Opt2, Req & Req2> {
  return obj(
    { ...p.optional, ...p2.optional },
    { ...p.required, ...p2.required },
    name,
  )
}

export function toOpt<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
  name?: string,
): OptC<Req & Opt> {
  return opt(spec.props, name)
}

export function toReq<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
  name?: string,
): ReqC<Req & Opt> {
  return req(spec.props, name)
}

export function toExact<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
  name?: string,
): ObjC<Opt, Req> {
  return exactObj(spec.optional, spec.required, name)
}

export type ObjPickBy<Opt extends Props, Req extends Props, ValueType> = ObjC<
  PickByValue<PropsType<Opt, Req>, ValueType>,
  PickByValue<ReqType<Opt, Req>, ValueType>
>

export function pickBy<
  Opt extends Props,
  Req extends Props,
  Picks extends Mixed[]
>(
  spec: ObjC<Opt, Req>,
  ...picks: Picks
): ObjPickBy<Opt, Req, typeof picks[number]> {
  // tslint:disable typedef
  const names = picks.map(s => s.name)

  const isPicked = (spec: Mixed) =>
    names.includes(spec.name) ? spec : undefined
  // tslint:enable typedef

  return obj(
    buildObject(spec.optional, isPicked),
    buildObject(spec.required, isPicked),
  ) as any
}

export function pickStrings<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
): ObjPickBy<Opt, Req, StringC> {
  return pickBy(spec, string)
}

export function pickNumbers<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
): ObjPickBy<Opt, Req, NumberC> {
  return pickBy(spec, number)
}

export function pickInts<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
): ObjPickBy<Opt, Req, BrandC<NumberC, IntBrand>> {
  return pickBy(spec, Int)
}

export function pickNumeric<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
): ObjPickBy<Opt, Req, NumberC | BrandC<NumberC, IntBrand>> {
  return pickBy(spec, number, Int)
}

export function pickStringly<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
): ObjPickBy<
  Opt,
  Req,
  NumberC | BrandC<NumberC, IntBrand> | StringC | BooleanC
> {
  return pickBy(spec, Int, number, string, boolean)
}

export type IDKeys<P extends Props> = keyof PickByValue<P, IDC<any>>
export type OneKeys<P extends Props> = keyof PickByValue<P, OneC<any>>
export type ManyKeys<P extends Props> = keyof PickByValue<P, ManyC<any>>

export type PickMany<Opt extends Props, Req extends Props> = ObjC<
  Pick<Opt, ManyKeys<Opt>>,
  Pick<Req, ManyKeys<Req>>
>

export type PickID<Opt extends Props, Req extends Props> = ObjC<
  Pick<Opt, IDKeys<Opt>>,
  Pick<Req, IDKeys<Req>>
>
export type PickOne<Opt extends Props, Req extends Props> = ObjC<
  Pick<Opt, OneKeys<Opt>>,
  Pick<Req, OneKeys<Req>>
>
export type PickPlain<Opt extends Props, Req extends Props> = ObjC<
  Omit<Opt, OneKeys<Opt> | ManyKeys<Opt>>,
  Omit<Req, OneKeys<Req> | ManyKeys<Req>>
>

export type PickPlainNoID<Opt extends Props, Req extends Props> = ObjC<
  Omit<Opt, IDKeys<Opt> | OneKeys<Opt> | ManyKeys<Opt>>,
  Omit<Req, IDKeys<Req> | OneKeys<Req> | ManyKeys<Req>>
>

export function isPlain(spec: Mixed): boolean {
  return !(isOne(spec) || isMany(spec))
}

export function isPlainNoID(spec: Mixed): boolean {
  return !(isOne(spec) || isMany(spec) || isID(spec))
}

// tslint:disable typedef
const buildMe = (me: (props: ManyC<any> | OneC<any> | IDC<any>) => boolean) => (
  props: Props,
) => buildObject<any, any>(props, (v, _: any) => (me(v) ? v : undefined))

const buildMany = buildMe(isMany)
const buildOne = buildMe(isOne)
const buildID = buildMe(isID)
const buildPlain = buildMe(isPlain)
const buildPlainNoID = buildMe(isPlainNoID)

// tslint:enable typedef

export function pickMany<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
): PickMany<Opt, Req> {
  return obj(buildMany(spec.optional), buildMany(spec.required)) as any
}

export function pickOne<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
): PickOne<Opt, Req> {
  return obj(buildOne(spec.optional), buildOne(spec.required)) as any
}

export function pickID<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
): PickID<Opt, Req> {
  return obj(buildID(spec.optional), buildID(spec.required)) as any
}

export function pickPlain<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
): PickPlain<Opt, Req> {
  // console.log(Object.keys(buildPlain(spec.required)))
  return obj(buildPlain(spec.optional), buildPlain(spec.required)) as any
}

export function pickPlainNoID<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
): PickPlainNoID<Opt, Req> {
  return obj(
    buildPlainNoID(spec.optional),
    buildPlainNoID(spec.required),
  ) as any
}

export type TypeOfID<Opt extends Props, Req extends Props> = TypeOf<
  PickID<Opt, Req>
>
export type TypeOfOne<Opt extends Props, Req extends Props> = TypeOf<
  PickOne<Opt, Req>
>
export type TypeOfMany<Opt extends Props, Req extends Props> = TypeOf<
  PickOne<Opt, Req>
>
export type TypeOfPlain<Opt extends Props, Req extends Props> = TypeOf<
  PickPlain<Opt, Req>
>
export type TypeOfPlainNoID<Opt extends Props, Req extends Props> = TypeOf<
  PickPlainNoID<Opt, Req>
>
export interface ObjProps {
  readonly [s: string]: AnyObj
}

export type WrapMany<P extends ObjProps> = {
  readonly [K in keyof P]: ManyC<P[K]>
}

export type WrapOne<P extends ObjProps> = {
  readonly [K in keyof P]: OneC<P[K]>
}

export type WrapOption<P extends ObjProps> = {
  readonly [K in keyof P]: OptionC<P[K]>
}

// tslint:disable no-unnecessary-callback-wrapper
export function wrapMany<P extends ObjProps = {}>(props: P): WrapMany<P> {
  return buildObject(props, v => many(v)) as any
}

export function wrapOne<P extends ObjProps = {}>(props: P): WrapOne<P> {
  return buildObject(props, v => one(v)) as any
}

export function wrapOption<P extends ObjProps = {}>(props: P): WrapOption<P> {
  return buildObject(props, v => option(v)) as any
}
// tslint:enable no-unnecessary-callback-wrapper

interface UnwraProps<T> {
  readonly [s: string]: T
}

export type UnwrapMany<P extends UnwraProps<any>> = {
  readonly [K in keyof P]: P[K] extends ManyC<infer R> ? R : never
}

export type UnwrapOne<P extends UnwraProps<any>> = {
  readonly [K in keyof P]: P[K] extends OneC<infer R> ? R : never
}

export type UnwrapOption<P extends UnwraProps<any>> = {
  readonly [K in keyof P]: P[K] extends OneC<infer R> ? R : never
}

// tslint:disable no-unnecessary-callback-wrapper

export function unwrapMany<P extends UnwraProps<ManyC<any>>>(
  props: P,
): UnwrapMany<P> {
  return buildObject(props, v => v.spec) as any
}

export function unwrapOne<P extends UnwraProps<OneC<any>>>(
  props: P,
): UnwrapOne<P> {
  return buildObject(props, v => v.spec) as any
}

export function unwrapOption<P extends UnwraProps<OptionC<any>>>(
  props: P,
): UnwrapOption<P> {
  return buildObject(props, v => v.spec) as any
}
