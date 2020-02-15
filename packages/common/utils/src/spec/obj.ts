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

// tslint:disable no-class readonly-array

type OptSpec<Opt extends Props> = ReadonlyC<PartialC<Opt>>
type ReqSpec<Req extends Props> = ReadonlyC<TypeC<Req>>
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

export type ObjPropsOf<Opt extends Props, Req extends Props> = ObjC<
  Opt,
  Req
>['props']

export type ObjReqOf<Opt extends Props, Req extends Props> = ObjC<
  Opt,
  Req
>['required']

export type ObjOptOf<Opt extends Props, Req extends Props> = ObjC<
  Opt,
  Req
>['optional']

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

export type AnyObj = Mixed & ObjC<any, any>

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
