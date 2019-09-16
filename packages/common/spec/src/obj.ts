import {
  exact,
  ExactC,
  intersection,
  IntersectionC,
  partial,
  PartialC,
  Props,
  readonly,
  ReadonlyC,
  Type,
  type,
  TypeC,
} from 'io-ts'
import { omit as _omit, pick as _pick } from 'lodash'

// tslint:disable no-class no-parameter-properties

export type ReqC<Req extends Props> = ReadonlyC<TypeC<Req>>
export type OptC<Opt extends Props> = ReadonlyC<PartialC<Opt>>

type ObjSpec<Opt extends Props, Req extends Props> = IntersectionC<
  // tslint:disable-next-line: readonly-array
  [OptC<Opt>, ReqC<Req>]
>

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

function obj<Opt extends Props, Req extends Props>(
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

type ExactObjSpec<Opt extends Props, Req extends Props> = ExactC<
  IntersectionC<
    // tslint:disable-next-line: readonly-array
    [OptC<Opt>, ReqC<Req>]
  >
>

export interface ExactObjC<Opt extends Props, Req extends Props>
  extends ObjType<
    Opt,
    Req,
    ExactObjSpec<Opt, Req>['_A'],
    ExactObjSpec<Opt, Req>['_O'],
    ExactObjSpec<Opt, Req>['_I']
  > {}

// @TODO: need ability to distinguish ObjType from Exact ObjType
function exactObj<Opt extends Props, Req extends Props>(
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

export type AnyObj = ObjC<any, any>

export type ReqOf<O extends AnyObj> = O['required']
export type OptOf<O extends AnyObj> = O['optional']

export function props<Opt extends Props, Req extends Props>(
  optional: Opt,
  required: Req,
  name?: string,
): ObjC<Opt, Req> {
  return obj(optional, required, name)
}

export function exactProps<Opt extends Props, Req extends Props>(
  optional: Opt,
  required: Req,
  name?: string,
): ObjC<Opt, Req> {
  return exactObj(optional, required, name)
}

export function req<Req extends Props>(
  required: Req,
  name?: string,
): ObjC<{}, Req> {
  return props({}, required, name)
}

export function opt<Opt extends Props>(
  optional: Opt,
  name?: string,
): ObjC<Opt, {}> {
  return props(optional, {}, name)
}

export function pick<
  Opt extends Props,
  Req extends Props,
  K extends keyof ObjC<Opt, Req>['props']
>(
  spec: ObjC<Opt, Req>,
  keys: readonly K[],
): ObjC<
  Pick<Opt, Extract<keyof OptOf<typeof spec>, K>>,
  Pick<Req, Extract<keyof ReqOf<typeof spec>, K>>
> {
  return props(
    _pick(spec.optional, keys) as any,
    _pick(spec.required, keys) as any,
  )
}

export function omit<
  Opt extends Props,
  Req extends Props,
  K extends keyof ObjC<Opt, Req>['props']
>(
  spec: ObjC<Opt, Req>,
  keys: readonly K[],
): ObjC<
  Omit<Opt, Extract<keyof ObjC<Opt, Req>['optional'], K>>,
  Omit<Req, Extract<keyof ObjC<Opt, Req>['required'], K>>
> {
  return props(
    _omit(spec.optional, keys) as any,
    _omit(spec.required, keys) as any,
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
): ObjC<Pick<Opt, KP>, Pick<Req, KR>> {
  return props(_pick(optional, optKeys), _pick(required, reqKeys))
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
): ObjC<Omit<Opt, KP>, Omit<Req, KR>> {
  return props(_omit(optional, optKeys), _omit(required, reqKeys))
}

export function combine<
  Opt extends Props,
  Req extends Props,
  Opt2 extends Props,
  Req2 extends Props
>(p: ObjC<Opt, Req>, p2: ObjC<Opt2, Req2>): ObjC<Opt & Opt2, Req & Req2> {
  return props(
    { ...p.optional, ...p2.optional },
    { ...p.required, ...p2.required },
  )
}

export function toOpt<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
): ObjC<Req & Opt, {}> {
  return opt(spec.props)
}

export function toReq<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
): ObjC<{}, Req & Opt> {
  return req(spec.props)
}
