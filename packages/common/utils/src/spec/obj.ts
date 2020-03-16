import {
  exact,
  ExactC,
  intersection,
  IntersectionC,
  Mixed,
  partial,
  PartialC,
  Props,
  readonly,
  ReadonlyC,
  Type,
  type,
  TypeC,
  TypeOf,
} from 'io-ts'
import { PickByValue } from 'utility-types'
import { buildObject } from '../common'
import { ManyC } from './objMany'
import { OneC } from './objOne'
import { OptionC } from './objOption'

// tslint:disable no-class readonly-array

export type OptSpec<Opt extends Props> = ReadonlyC<PartialC<Opt>>
export type ReqSpec<Req extends Props> = ReadonlyC<TypeC<Req>>
export type ObjSpec<Opt extends Props, Req extends Props> = IntersectionC<
  [OptSpec<Opt>, ReqSpec<Req>]
>
export type ExactObjSpec<Opt extends Props, Req extends Props> = ExactC<
  IntersectionC<[OptSpec<Opt>, ReqSpec<Req>]>
>

export type AnyObj = Mixed & ObjC<any, any>

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
    readonly spec: Type<A, O, I> & (ObjSpec<Opt, Req> | ExactObjSpec<Opt, Req>),
    name: string,
  ) {
    super(name, spec.is, spec.validate, spec.encode)
  }
}

export function isObj(spec: Mixed & { readonly _tag: string }): spec is AnyObj {
  return spec._tag === 'ObjType'
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

export function getProps<Spec extends AnyObj>(spec: AnyObj): Spec['props'] {
  return spec.props
}

export function getProp<Spec extends AnyObj, K extends keyof TypeOf<Spec>>(
  spec: Spec,
  prop: K,
): Spec['props'][K] {
  return spec.props[prop]
}

type OptKeys<P extends Props> = keyof PickByValue<
  P,
  OptionC<any> | OneC<any> | ManyC<any>
>

type ReqKeys<P extends Props> = keyof Omit<P, OptKeys<P>>

// type NormalizeOptional<P extends Props> = {
//   readonly [K in keyof P]: P[K] extends OptionC<any> | OneC<any> | ManyC<any>
//     ? P[K]['spec']
//     : P[K]
// }

export type OptProps<P extends Props> = Pick<P, OptKeys<P>>
export type ReqProps<P extends Props> = Pick<P, ReqKeys<P>>

export type PropsC<P extends Props> = ObjC<OptProps<P>, ReqProps<P>>

// tslint:disable typedef
export function props<P extends Props>(props: P, name?: string): PropsC<P> {
  const optional = buildObject<any, any>(props, pv =>
    pv._tag &&
    (pv._tag === 'OptType' || pv._tag === 'OneType' || pv._tag === 'ManyType')
      ? pv
      : undefined,
  )
  const required = buildObject<any, any>(props, (v, k) =>
    k in optional ? undefined : v,
  )

  const spec = intersection([
    readonly(partial(optional)),
    readonly(type(required)),
  ])

  return new ObjType(
    optional,
    required,
    { ...optional, ...required },
    spec,
    name || spec.name,
  ) as any
}
// tslint:enable typedef

export type PropsReqOf<P extends AnyObj> = TypeOf<
  TypeC<Pick<P['props'], ReqKeys<P['props']>>>
>

export type PropsOptOf<P extends AnyObj> = TypeOf<
  PartialC<Pick<P['props'], OptKeys<P['props']>>>
>

export type PropsOptionOf<P extends AnyObj> = TypeOf<
  PartialC<PickByValue<P['props'], OptionC<any>>>
>

export type PropsOneOf<P extends AnyObj> = TypeOf<
  PartialC<PickByValue<P['props'], OneC<any>>>
>

export type PropsManyOf<P extends AnyObj> = TypeOf<
  PartialC<PickByValue<P['props'], ManyC<any>>>
>

// const Rect = props({
//   x: one(number),
//   y: number,
//   width: many(Int),
//   height: option(Int),
// })

// type Rect = TypeOf<typeof Rect>

// const rect: Rect = {
//   x: '1' as any,
//   width: [10 as Int],
//   height: 20 as Int,
//   y: 2,
// }

// console.log(Rect.decode(rect))

// type TR = typeof Rect
// type AT = TypeOf<TR>
// type TT = PropsOptOf<TR>
// type RT = PropsReqOf<TR>
// type PT = PropsOptionOf<TR>
// type MT = PropsManyOf<TR>
// type OT = PropsOneOf<TR>
