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
  type,
} from 'io-ts'
import { PickByValue } from 'utility-types'
import { buildObject, omit, pick } from '../common'
import { IDC, isID } from './id'
import { isMany, ManyC } from './many'
import { exactObj, ExactObjC, obj, ObjC, opt, req } from './obj'
import { isOne, OneC } from './one'
import { ObjOptOf, ObjPropsOf, ObjReqOf } from './types'

export function objPick<
  Opt extends Props,
  Req extends Props,
  K extends keyof ObjC<Opt, Req>['props']
>(
  spec: ObjC<Opt, Req>,
  keys: readonly K[],
  name?: string,
): ObjC<
  Pick<Opt, Extract<keyof ObjOptOf<Opt, Req>, K>>,
  Pick<Req, Extract<keyof ObjReqOf<Opt, Req>, K>>
> {
  return obj(
    pick(spec.optional, keys as any[]),
    pick(spec.required, keys as any[]),
    name,
  )
}

export function objOmit<
  Opt extends Props,
  Req extends Props,
  K extends keyof ObjPropsOf<Opt, Req>
>(
  spec: ObjC<Opt, Req>,
  keys: readonly K[],
  name?: string,
): ObjC<
  Omit<Opt, Extract<keyof ObjOptOf<Opt, Req>, K>>,
  Omit<Req, Extract<keyof ObjReqOf<Opt, Req>, K>>
> {
  return obj(
    omit(spec.optional, keys as any) as any,
    omit(spec.required, keys as any) as any,
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
): ObjC<Req & Opt, {}> {
  return opt(spec.props as Req & Opt, name)
}

export function toReq<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
  name?: string,
): ObjC<{}, Req & Opt> {
  return req(spec.props as Req & Opt, name)
}

export function toExact<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
  name?: string,
): ExactObjC<Opt, Req> {
  return exactObj(spec.optional, spec.required, name)
}

// export function pickByValue

export type ObjCPickBy<Opt extends Props, Req extends Props, ValueType> = ObjC<
  PickByValue<ObjOptOf<Opt, Req>, ValueType>,
  PickByValue<ObjReqOf<Opt, Req>, ValueType>
>

export function pickBy<
  Opt extends Props,
  Req extends Props,
  Picks extends Mixed[]
>(
  spec: ObjC<Opt, Req>,
  ...picks: Picks
): ObjCPickBy<Opt, Req, typeof picks[number]> {
  // tslint:disable typedef
  const names = picks.map(s => s.name)
  const isSpec = (spec: Mixed) => (names.includes(spec.name) ? spec : undefined)
  // tslint:enable typedef

  return obj(
    buildObject(spec.optional, isSpec),
    buildObject(spec.required, isSpec),
  ) as any
}

export function pickStrings<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
): ObjCPickBy<Opt, Req, StringC> {
  return pickBy(spec, string)
}

export function pickNumbers<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
): ObjCPickBy<Opt, Req, NumberC> {
  return pickBy(spec, number)
}

export function pickInts<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
): ObjCPickBy<Opt, Req, BrandC<NumberC, IntBrand>> {
  return pickBy(spec, Int)
}

export function pickNumeric<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
): ObjCPickBy<Opt, Req, NumberC | BrandC<NumberC, IntBrand>> {
  return pickBy(spec, number, Int)
}

export function pickStringly<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
): ObjCPickBy<
  Opt,
  Req,
  NumberC | BrandC<NumberC, IntBrand> | StringC | BooleanC
> {
  return pickBy(spec, Int, number, string, boolean)
}

export type IDKeys<Opt extends Props, Req extends Props> = keyof PickByValue<
  ObjC<Opt, Req>['props'],
  IDC<any>
>
export type IDProps<Opt extends Props, Req extends Props> = Pick<
  ObjC<Opt, Req>['props'],
  IDKeys<Opt, Req>
>

export type OneKeys<Opt extends Props, Req extends Props> = keyof PickByValue<
  ObjC<Opt, Req>['props'],
  OneC<any>
>
export type OneProps<Opt extends Props, Req extends Props> = Pick<
  ObjC<Opt, Req>['props'],
  OneKeys<Opt, Req>
>

export type ManyKeys<Opt extends Props, Req extends Props> = keyof PickByValue<
  ObjC<Opt, Req>['props'],
  ManyC<any>
>
export type ManyProps<Opt extends Props, Req extends Props> = Pick<
  ObjC<Opt, Req>['props'],
  ManyKeys<Opt, Req>
>

export function manyProps<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
): ManyProps<Opt, Req> {
  return buildObject<any, any>(spec.props, prop =>
    isMany(prop) ? prop : undefined,
  ) as any
}

export function oneProps<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
): OneProps<Opt, Req> {
  return buildObject<any, any>(spec.props, prop =>
    isOne(prop) ? prop : undefined,
  ) as any
}

export function idProps<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
): IDProps<Opt, Req> {
  return type(
    buildObject<any, any>(spec.props, prop => (isID(prop) ? prop : undefined)),
  ) as any
}
