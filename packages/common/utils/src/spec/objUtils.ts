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
import { isMany, ManyC } from './many'
import {
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
import { isOne, OneC } from './one'

export function objPick<
  Opt extends Props,
  Req extends Props,
  K extends PropsKeys<Opt, Req>
>(
  spec: ObjC<Opt, Req>,
  keys: readonly K[],
  name?: string,
): ObjC<
  Pick<Opt, Extract<OptKeys<Opt, Req>, K>>,
  Pick<Req, Extract<ReqKeys<Opt, Req>, K>>
> {
  return obj(
    pick(spec.optional, keys as ReadonlyArray<Extract<OptKeys<Opt, Req>, K>>),
    pick(spec.required, keys as ReadonlyArray<Extract<ReqKeys<Opt, Req>, K>>),
    name,
  )
}

export function objOmit<
  Opt extends Props,
  Req extends Props,
  K extends keyof ObjC<Opt, Req>['props']
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

// export function pickByValue

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

// tslint:disable typedef
const buildMe = (me: (props: ManyC<any> | OneC<any> | IDC<any>) => boolean) => (
  props: Props,
) => buildObject<any, any>(props, prop => (me(prop) ? prop : undefined))

const buildMany = buildMe(isMany)
const buildOne = buildMe(isOne)
const buildID = buildMe(isID)
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

export type TypeOfID<Opt extends Props, Req extends Props> = TypeOf<
  PickID<Opt, Req>
>
export type TypeOfOne<Opt extends Props, Req extends Props> = TypeOf<
  PickOne<Opt, Req>
>
export type TypeOfMany<Opt extends Props, Req extends Props> = TypeOf<
  PickOne<Opt, Req>
>
