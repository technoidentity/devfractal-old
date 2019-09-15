import {
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

type ObjSpec<Req extends Props, Opt extends Props> = IntersectionC<
  // tslint:disable-next-line: readonly-array
  [ReqC<Req>, OptC<Opt>]
>

class ObjType<
  Req extends Props,
  Opt extends Props,
  A,
  O = A,
  I = unknown
> extends Type<A, O, I> {
  readonly _tag: 'ObjType' = 'ObjType'

  constructor(
    readonly required: Req,
    readonly optional: Opt,
    readonly props: Req & Opt,
    spec: Type<A, O, I>,
    name: string,
  ) {
    super(name, spec.is, spec.validate, spec.encode)
  }
}

export interface ObjC<Req extends Props, Opt extends Props>
  extends ObjType<
    Req,
    Opt,
    ObjSpec<Req, Opt>['_A'],
    ObjSpec<Req, Opt>['_O'],
    ObjSpec<Req, Opt>['_I']
  > {}

function obj<Req extends Props, Opt extends Props>(
  required: Req,
  optional: Opt,
  name: string,
): ObjC<Req, Opt> {
  return new ObjType(
    required,
    optional,
    { ...required, ...optional },
    intersection([readonly(type(required)), readonly(partial(optional))]),
    name,
  )
}

export type AnyObj = ObjC<any, any>

export type ReqOf<O extends AnyObj> = O['required']
export type OptOf<O extends AnyObj> = O['optional']
export type PropsOf<O extends AnyObj> = O['props']

export function props<Req extends Props, Opt extends Props>(
  required: Req,
  optional: Opt,
  name?: string,
): ObjC<Req, Opt> {
  return obj(required, optional, name || 'ObjType')
}

export function req<Req extends Props>(
  required: Req,
  name?: string,
): ObjC<Req, {}> {
  return props(required, {}, name)
}

export function opt<Opt extends Props>(
  optional: Opt,
  name?: string,
): ObjC<{}, Opt> {
  return props({}, optional, name)
}

export function pick<
  Req extends Props,
  Opt extends Props,
  K extends keyof ObjC<Req, Opt>['props']
>(
  spec: ObjC<Req, Opt>,
  keys: readonly K[],
): ObjC<
  Pick<Req, Extract<keyof ReqOf<typeof spec>, K>>,
  Pick<Opt, Extract<keyof OptOf<typeof spec>, K>>
> {
  return props(
    _pick(spec.required, keys) as any,
    _pick(spec.optional, keys) as any,
  )
}

export function omit<
  Req extends Props,
  Opt extends Props,
  K extends keyof ObjC<Req, Opt>['props']
>(
  spec: ObjC<Req, Opt>,
  keys: readonly K[],
): ObjC<
  Omit<Req, Extract<keyof ObjC<Req, Opt>['required'], K>>,
  Omit<Opt, Extract<keyof ObjC<Req, Opt>['optional'], K>>
> {
  return props(
    _omit(spec.required, keys) as any,
    _omit(spec.optional, keys) as any,
  )
}

// const p = props({ x: number, y: number }, { a: string, b: string })
// const wp = wowPick(p, ['x', 'a'])
// type WP = TypeOf<typeof wp>

export function propsPick<
  Req extends Props,
  Opt extends Props,
  KR extends keyof Req,
  KP extends keyof Opt
>(
  { required, optional }: ObjC<Req, Opt>,
  reqKeys: readonly KR[] = [],
  optKeys: readonly KP[] = [],
): ObjC<Pick<Req, KR>, Pick<Opt, KP>> {
  return props(_pick(required, reqKeys), _pick(optional, optKeys))
}

export function propsOmit<
  Req extends Props,
  Opt extends Props,
  KR extends keyof Req,
  KP extends keyof Opt
>(
  { required, optional }: ObjC<Req, Opt>,
  reqKeys: readonly KR[] = [],
  optKeys: readonly KP[] = [],
): ObjC<Omit<Req, KR>, Omit<Opt, KP>> {
  return props(_omit(required, reqKeys), _omit(optional, optKeys))
}

export function combine<
  Req extends Props,
  Opt extends Props,
  Req2 extends Props,
  Opt2 extends Props
>(p: ObjC<Req, Opt>, p2: ObjC<Req2, Opt2>): ObjC<Req & Req2, Opt & Opt2> {
  return props(
    { ...p.required, ...p2.required },
    { ...p.optional, ...p2.optional },
  )
}

export function toOpt<Req extends Props, Opt extends Props>(
  spec: ObjC<Req, Opt>,
): ObjC<{}, Req & Opt> {
  return opt(spec.props)
}

export function toReq<Req extends Props, Opt extends Props>(
  spec: ObjC<Req, Opt>,
): ObjC<Req & Opt, {}> {
  return req(spec.props)
}

// const r: BaseC<{ readonly x: NumberC; readonly y: StringC }, {}> = req({
//   x: number,
//   y: string,
// })
// type R = TypeOf<typeof r>

// const o: BaseC<{}, { readonly x: NumberC; readonly y: StringC }> = opt({
//   x: number,
//   y: string,
// })
// type O = TypeOf<typeof o>

// const p: BaseC<{ readonly x: NumberC }, { readonly y: StringC }> = both(
//   { x: number },
//   { y: string },
// )
// type P = TypeOf<typeof p>

// const oo = toOpt(r)
// type OO = TypeOf<typeof oo>

// const rr = toReq(o)
// type RR = TypeOf<typeof rr>

// const pp = toReq(p)
// type PP = TypeOf<typeof pp>

// const pp2 = toOpt(p)
// type PP2 = TypeOf<typeof pp2>

// const pir = reqPick(r, ['x'])
// type PIR = TypeOf<typeof pir>

// const pio = optPick(o, ['y'])
// type PIO = TypeOf<typeof pio>

// const pip = bothPick(p, ['x'], ['y'])
// type PIP = TypeOf<typeof pip>

// const oir = reqOmit(r, ['x'])
// type OIR = TypeOf<typeof oir>

// const oio = optOmit(o, ['y'])
// type OIO = TypeOf<typeof oio>

// const oip = bothOmit(p, [], ['y'])
// type OIP = TypeOf<typeof oip>

// const p1 = both({ x: number }, { y: string })
// const p2 = both({ a: number }, { b: string })
// const p3 = bothCombine(p, p2)
// type P3 = TypeOf<typeof p3>

// type X = { a: number; b: number; c: number; d: number }
// type Y = { a: number; z: string }

// type PPX = Pick<X, Exclude<keyof X, keyof Y>>
