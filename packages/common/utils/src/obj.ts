import {
  boolean,
  BooleanC,
  BrandC,
  exact,
  ExactC,
  Int,
  IntBrand,
  intersection,
  IntersectionC,
  Mixed,
  number,
  NumberC,
  partial,
  PartialC,
  Props,
  readonly,
  ReadonlyC,
  string,
  StringC,
  Type,
  type,
  TypeC,
  TypeOf,
} from 'io-ts'
import { PickByValue } from 'utility-types'
import { buildObject, omit, pick } from './common'

// tslint:disable no-class no-parameter-properties readonly-array

export type ReqSpec<Req extends Props> = ReadonlyC<TypeC<Req>>
export type OptSpec<Opt extends Props> = ReadonlyC<PartialC<Opt>>

type ObjSpec<Opt extends Props, Req extends Props> = IntersectionC<
  [OptSpec<Opt>, ReqSpec<Req>]
>

type ExactObjSpec<Opt extends Props, Req extends Props> = ExactC<
  IntersectionC<[OptSpec<Opt>, ReqSpec<Req>]>
>

// type NoEmptyIntersect<Opt extends Props, Req extends Props> = {} extends Opt
//   ? {} extends Req
//     ? Opt
//     : Req
//   : Opt & Req

export class ObjType<
  Opt extends Props,
  Req extends Props,
  A,
  O = A,
  I = unknown
> extends Type<A, O, I> {
  readonly _tag: 'ObjType' = 'ObjType'

  constructor(
    readonly optional: Opt,
    readonly required: Req,
    readonly props: Opt & Req,
    spec: Type<A, O, I>,
    name: string,
  ) {
    super(name, spec.is, spec.validate, spec.encode)
  }
}

export interface ObjC<Opt extends Props, Req extends Props>
  extends ObjType<
    Opt,
    Req,
    ObjSpec<Opt, Req>['_A'],
    ObjSpec<Opt, Req>['_O'],
    ObjSpec<Opt, Req>['_I']
  > {}

function newObj<Opt extends Props, Req extends Props>(
  optional: Opt,
  required: Req,
  name?: string,
): ObjC<Opt, Req> {
  const spec: ObjSpec<Opt, Req> = intersection([
    readonly(partial(optional)),
    readonly(type(required)),
  ])

  return new ObjType(
    optional,
    required,
    { ...optional, ...required },
    spec,
    name || spec.name,
  )
}

export type TypeOfReq<O extends AnyObj> = O['required']
export type TypeofOpt<O extends AnyObj> = O['optional']

export type ObjPropsOf<Opt extends Props, Req extends Props> = ObjC<
  Opt,
  Req
>['props']

export type ObjTypeOf<Opt extends Props, Req extends Props> = ObjC<
  Opt,
  Req
>['_A']
export type ObjOutPutOf<Opt extends Props, Req extends Props> = ObjC<
  Opt,
  Req
>['_O']
export type ObjInputOf<Opt extends Props, Req extends Props> = ObjC<
  Opt,
  Req
>['_I']

export interface ExactObjC<Opt extends Props, Req extends Props>
  extends ObjType<
    Opt,
    Req,
    ExactObjSpec<Opt, Req>['_A'],
    ExactObjSpec<Opt, Req>['_O'],
    ExactObjSpec<Opt, Req>['_I']
  > {}

// @TODO: need ability to distinguish ObjType from Exact ObjType
function newExactObj<Opt extends Props, Req extends Props>(
  optional: Opt,
  required: Req,
  name?: string,
): ExactObjC<Opt, Req> {
  const spec: ExactObjSpec<Opt, Req> = exact(
    intersection([readonly(partial(optional)), readonly(type(required))]),
  )
  return new ObjType(
    optional,
    required,
    { ...optional, ...required },
    spec,
    name || spec.name,
  )
}

export type AnyObj = Mixed & ObjC<any, any>

export function obj<Opt extends Props, Req extends Props>(
  optional: Opt,
  required: Req,
  name?: string,
): ObjC<Opt, Req> {
  return newObj(optional, required, name)
}

export function exactObj<Opt extends Props, Req extends Props>(
  optional: Opt,
  required: Req,
  name?: string,
): ObjC<Opt, Req> {
  return newExactObj(optional, required, name)
}

export function req<Req extends Props>(
  required: Req,
  name?: string,
): ObjC<{}, Req> {
  return obj({}, required, name)
}

export function opt<Opt extends Props>(
  optional: Opt,
  name?: string,
): ObjC<Opt, {}> {
  return obj(optional, {}, name)
}

export function objPick<
  Opt extends Props,
  Req extends Props,
  K extends keyof ObjC<Opt, Req>['props']
>(
  spec: ObjC<Opt, Req>,
  keys: readonly K[],
  name?: string,
): ObjC<
  Pick<Opt, Extract<keyof TypeofOpt<typeof spec>, K>>,
  Pick<Req, Extract<keyof TypeOfReq<typeof spec>, K>>
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
  K extends keyof ObjC<Opt, Req>['props']
>(
  spec: ObjC<Opt, Req>,
  keys: readonly K[],
  name?: string,
): ObjC<
  Omit<Opt, Extract<keyof ObjC<Opt, Req>['optional'], K>>,
  Omit<Req, Extract<keyof ObjC<Opt, Req>['required'], K>>
> {
  return obj(
    omit(spec.optional, keys as any) as any,
    omit(spec.required, keys as any) as any,
    name,
  )
}

export function propsPick<
  Opt extends Props,
  Req extends Props,
  KP extends keyof Opt,
  KR extends keyof Req
>(
  { optional, required }: ObjC<Opt, Req>,
  optKeys: readonly KP[] = [],
  reqKeys: readonly KR[] = [],
  name?: string,
): ObjC<Pick<Opt, KP>, Pick<Req, KR>> {
  return obj(pick(optional, optKeys), pick(required, reqKeys), name)
}

export function propsOmit<
  Opt extends Props,
  Req extends Props,
  KP extends keyof Opt,
  KR extends keyof Req
>(
  { optional, required }: ObjC<Opt, Req>,
  optKeys: readonly KP[] = [],
  reqKeys: readonly KR[] = [],
  name?: string,
): ObjC<Omit<Opt, KP>, Omit<Req, KR>> {
  return obj(omit(optional, optKeys), omit(required, reqKeys), name)
}

export function combine<
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
  return opt(spec.props, name)
}

export function toReq<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
  name?: string,
): ObjC<{}, Req & Opt> {
  return req(spec.props, name)
}

export function toExact<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
  name?: string,
): ExactObjC<Opt, Req> {
  return newExactObj(spec.optional, spec.required, name)
}

export function getProps<Spec extends AnyObj>(spec: AnyObj): Spec['props'] {
  return spec.props
}

export function getProp<Spec extends AnyObj, K extends keyof TypeOf<Spec>>(
  spec: Spec,
  prop: K,
): Spec['props'][K] {
  return spec.props[prop]
}

// export function pickByValue

type ObjCPick<Spec extends AnyObj, V> = ObjC<
  PickByValue<Spec['required'], V>,
  PickByValue<Spec['optional'], V>
>

function pickBy<Opt extends Props, Req extends Props, Picks extends Mixed[]>(
  spec: ObjC<Opt, Req>,
  ...picks: Picks
): ObjCPick<ObjC<Opt, Req>, typeof picks[number]> {
  function isSpec(
    names: readonly string[],
  ): (spec: Mixed) => Mixed | undefined {
    return spec => (names.includes(spec.name) ? spec : undefined)
  }

  return obj(
    buildObject(spec.required, isSpec(picks.map(s => s.name))),
    buildObject(spec.optional, isSpec(picks.map(s => s.name))),
  ) as any
}

// const pt = obj({ x: number, y: string }, { a: string, b: number, c: Int })
// const numbers = pickBy(pt, number)
// const strings = pickBy(pt, string)
// const ints = pickBy(pt, Int)
// const numerics = pickBy(pt, number, Int)
// const stringly = pickBy(pt, number, string, Int, boolean)

// const ns: TypeOf<typeof numbers> = { x: 1 }
// const ss: TypeOf<typeof strings> = { y: '' }
// const is: TypeOf<typeof ints> = { c: 10 as Int }
// const nss: TypeOf<typeof numerics> = { x: 100 }
// const sls: TypeOf<typeof stringly> = { x: 10, y: '' }

export function pickStrings<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
): ObjCPick<ObjC<Opt, Req>, StringC> {
  return pickBy(spec, string)
}

export function pickNumbers<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
): ObjCPick<ObjC<Opt, Req>, NumberC> {
  return pickBy(spec, number)
}

export function pickInts<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
): ObjCPick<ObjC<Opt, Req>, BrandC<NumberC, IntBrand>> {
  return pickBy(spec, Int)
}

export function pickNumeric<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
): ObjCPick<ObjC<Opt, Req>, NumberC | BrandC<NumberC, IntBrand>> {
  return pickBy(spec, number, Int)
}

export function pickStringly<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
): ObjCPick<
  ObjC<Opt, Req>,
  NumberC | BrandC<NumberC, IntBrand> | StringC | BooleanC
> {
  return pickBy(spec, Int, number, string, boolean)
}
