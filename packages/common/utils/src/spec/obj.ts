import {
  exact,
  ExactC,
  ExactType,
  intersection,
  IntersectionC,
  Mixed,
  partial,
  PartialC,
  Props,
  Type,
  type,
  TypeC,
} from 'io-ts'
import { keys } from '../common'

// tslint:disable no-class readonly-array no-this

type ObjSpec<Opt extends Props, Req extends Props> = IntersectionC<
  [PartialC<Opt>, TypeC<Req>]
>
export type ExactObjSpec<Opt extends Props, Req extends Props> = ExactC<
  IntersectionC<[PartialC<Opt>, TypeC<Req>]>
>

export type AnyObj = Mixed & ObjC<any, any>

export class ObjType<
  Opt extends Props,
  Req extends Props,
  A,
  O,
  I
> extends Type<A, O, I> {
  readonly _tag: 'ObjType' = 'ObjType'

  constructor(
    readonly spec: Type<A, O, I> & (ObjSpec<Opt, Req> | ExactObjSpec<Opt, Req>),
    name: string,
  ) {
    super(name, spec.is, spec.validate, spec.encode)
  }

  get optional(): Opt {
    return this.spec._tag === 'ExactType'
      ? this.spec.type.types[0].props
      : this.spec.types[0].props
  }

  get required(): Req {
    return this.spec._tag === 'ExactType'
      ? this.spec.type.types[1].props
      : this.spec.types[1].props
  }

  get props(): Opt & Req {
    return { ...this.optional, ...this.required }
  }
}

export function isObj(spec: Mixed): spec is AnyObj {
  return spec instanceof ObjType
}

export function isExactObj(spec: Mixed): spec is AnyObj {
  return spec instanceof ObjType && spec.spec instanceof ExactType
}

export interface ObjC<Opt extends Props, Req extends Props>
  extends ObjType<
    Opt,
    Req,
    Readonly<ObjSpec<Opt, Req>['_A']>,
    ObjSpec<Opt, Req>['_O'],
    ObjSpec<Opt, Req>['_I']
  > {}

export type ObjTypeOf<Opt extends Props, Req extends Props> = ObjC<
  Opt,
  Req
>['_A']

export type ObjOutputOf<Opt extends Props, Req extends Props> = ObjC<
  Opt,
  Req
>['_O']

export type ObjInputOf<Opt extends Props, Req extends Props> = ObjC<
  Opt,
  Req
>['_I']

export type OptC<O extends Props> = ObjC<O, {}>
export type ReqC<R extends Props> = ObjC<{}, R>

// export interface ExactObjC<Opt extends Props, Req extends Props>
//   extends ObjType<
//     Opt,
//     Req,
//     Readonly<ExactObjSpec<Opt, Req>['_A']>,
//     ExactObjSpec<Opt, Req>['_O'],
//     ExactObjSpec<Opt, Req>['_I']
//   > {}

export function obj<Opt extends Props, Req extends Props>(
  optional: Opt,
  required: Req,
  name?: string,
): ObjC<Opt, Req> {
  const spec: ObjSpec<Opt, Req> = intersection([
    partial(optional),
    type(required),
  ])

  return new ObjType(spec, name || spec.name)
}

export function exactObj<Opt extends Props, Req extends Props>(
  optional: Opt,
  required: Req,
  name?: string,
): ObjC<Opt, Req> {
  const spec: ExactObjSpec<Opt, Req> = exact(
    intersection([partial(optional), type(required)]),
  )
  return new ObjType(spec, name || spec.name)
}

export function req<Req extends Props>(
  required: Req,
  name?: string,
): ReqC<Req> {
  return obj({}, required, name)
}

export function exactReq<Req extends Props>(
  required: Req,
  name?: string,
): ReqC<Req> {
  return exactObj({}, required, name)
}

export function opt<Opt extends Props>(
  optional: Opt,
  name?: string,
): OptC<Opt> {
  return obj(optional, {}, name)
}

export function exactOpt<Opt extends Props>(
  optional: Opt,
  name?: string,
): OptC<Opt> {
  return exactObj(optional, {}, name)
}

export function getProps<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
): ObjC<Opt, Req>['props'] {
  return spec.props
}

export function getKeys<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
): ReadonlyArray<keyof ObjTypeOf<Opt, Req>> {
  return keys(spec.props)
}

export function getProp<
  Opt extends Props,
  Req extends Props,
  K extends keyof PropsType<Opt, Req>
>(spec: ObjC<Opt, Req>, prop: K): PropsType<Opt, Req>[K] {
  return spec.props[prop]
}

export type PropsType<Opt extends Props, Req extends Props> = ObjC<
  Opt,
  Req
>['props']

export type PropsKeys<Opt extends Props, Req extends Props> = keyof PropsType<
  Opt,
  Req
>

export type ReqType<Opt extends Props, Req extends Props> = ObjC<
  Opt,
  Req
>['required']

export type ReqKeys<Opt extends Props, Req extends Props> = keyof ReqType<
  Opt,
  Req
>

export type OptType<Opt extends Props, Req extends Props> = ObjC<
  Opt,
  Req
>['optional']

export type OptKeys<Opt extends Props, Req extends Props> = keyof OptType<
  Opt,
  Req
>
