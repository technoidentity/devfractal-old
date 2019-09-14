import {
  intersection,
  IntersectionC,
  OutputOf,
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
import { omit, pick } from 'lodash-es'

// tslint:disable no-class no-parameter-properties readonly-array typedef no-this

class PropsBase<P extends Props, A, O, I> extends Type<A, O, I> {
  readonly _P!: P
}

export type AnyPropsBase = PropsBase<any, any, any, any>

export type PropsOf<T extends AnyPropsBase> = T['_P']

class ReqType<R extends Props, A, O, I> extends PropsBase<R, A, O, I> {
  readonly _tag: 'ReqType' = 'ReqType'
  constructor(readonly props: R, spec: Type<A, O, I>, name: string) {
    super(name, spec.is, spec.validate, spec.encode)
  }
}

type SR<R extends Props> = ReadonlyC<TypeC<R>>
type AR<R extends Props> = TypeOf<SR<R>>
type OR<R extends Props> = OutputOf<SR<R>>

export interface ReqTypeC<R extends Props>
  extends ReqType<R, AR<R>, OR<R>, unknown> {}

export function req<R extends Props>(required: R, name?: string): ReqTypeC<R> {
  return new ReqType(required, readonly(type(required)), name || 'ReqType')
}

export class OptType<P extends Props, A, O, I> extends PropsBase<P, A, O, I> {
  readonly _tag: 'OptType' = 'OptType'
  constructor(readonly props: P, spec: Type<A, O, I>, name: string) {
    super(name, spec.is, spec.validate, spec.encode)
  }
}

type SP<P extends Props> = ReadonlyC<PartialC<P>>
type AP<P extends Props> = TypeOf<SP<P>>
type OP<P extends Props> = OutputOf<SP<P>>

export interface OptTypeC<P extends Props>
  extends OptType<P, AP<P>, OP<P>, unknown> {}

export function opt<R extends Props>(optional: R, name?: string): OptTypeC<R> {
  return new OptType(optional, readonly(partial(optional)), name || 'OptType')
}

export class BothType<
  R extends Props,
  P extends Props,
  A,
  O,
  I
> extends PropsBase<R & P, A, O, I> {
  readonly _tag: 'BothType' = 'BothType'

  constructor(
    readonly required: R,
    readonly optional: P,
    spec: Type<A, O, I>,
    name: string,
  ) {
    super(name, spec.is, spec.validate, spec.encode)
  }

  get props(): R & P {
    return { ...this.required, ...this.optional }
  }
}
// @TODO: may be not use intersection?
type SI<R extends Props, P extends Props> = IntersectionC<
  [ReadonlyC<TypeC<R>>, ReadonlyC<PartialC<P>>]
>
type AI<R extends Props, P extends Props> = TypeOf<SI<R, P>>
type OI<R extends Props, P extends Props> = OutputOf<SI<R, P>>

export interface BothTypeC<R extends Props, P extends Props>
  extends BothType<R, P, AI<R, P>, OI<R, P>, unknown> {}

export function both<R extends Props, P extends Props>(
  required: R,
  optional: P,
  name?: string,
): BothTypeC<R, P> {
  return new BothType(
    required,
    optional,
    intersection([readonly(type(required)), readonly(partial(optional))]),
    name || 'BothType',
  )
}

export function bothPick<
  R extends Props,
  P extends Props,
  KR extends keyof R,
  KP extends keyof P
>(
  spec: BothTypeC<R, P>,
  reqKeys: readonly KR[],
  optKeys: readonly KP[],
): BothTypeC<Pick<R, KR>, Pick<P, KP>> {
  return both(pick(spec.required, reqKeys), pick(spec.optional, optKeys))
}

export function bothOmit<
  R extends Props,
  P extends Props,
  KR extends keyof R,
  KP extends keyof P
>(
  spec: BothTypeC<R, P>,
  reqKeys: readonly KR[],
  optKeys: readonly KP[],
): BothTypeC<Omit<R, KR>, Omit<P, KP>> {
  return both(omit(spec.required, reqKeys), omit(spec.optional, optKeys))
}

export function reqPick<R extends Props, KR extends keyof R>(
  spec: ReqTypeC<R>,
  reqKeys: readonly KR[],
): ReqTypeC<Pick<R, KR>> {
  return req(pick(spec.props, reqKeys))
}

export function reqOmit<R extends Props, KR extends keyof R>(
  spec: ReqTypeC<R>,
  reqKeys: readonly KR[],
): ReqTypeC<Omit<R, KR>> {
  return req(omit(spec.props, reqKeys))
}

export function optPick<P extends Props, KP extends keyof P>(
  spec: OptTypeC<P>,
  optKeys: readonly KP[],
): OptTypeC<Pick<P, KP>> {
  return opt(pick(spec.props, optKeys))
}

export function optOmit<P extends Props, KP extends keyof P>(
  spec: OptTypeC<P>,
  optKeys: readonly KP[],
): OptTypeC<Omit<P, KP>> {
  return opt(omit(spec.props, optKeys))
}

export function reqOptToBoth<R extends Props, P extends Props>(
  req: ReqTypeC<R>,
  opt: OptTypeC<P>,
): BothTypeC<R, P> {
  return both(req.props, opt.props)
}

export function reqCombine<R extends Props, R2 extends Props>(
  r: ReqTypeC<R>,
  r2: ReqTypeC<R2>,
): ReqTypeC<R & R2> {
  return req({ ...r.props, ...r2.props })
}

export function optCombine<P extends Props, P2 extends Props>(
  o: OptTypeC<P>,
  o2: OptTypeC<P2>,
): OptTypeC<P & P2> {
  return opt({ ...o.props, ...o2.props })
}

export function bothCombine<
  R extends Props,
  R2 extends Props,
  P extends Props,
  P2 extends Props
>(p: BothTypeC<R, P>, p2: BothTypeC<R2, P2>): BothTypeC<R & R2, P & P2> {
  return both(
    { ...p.required, ...p2.required },
    { ...p.optional, ...p2.optional },
  )
}

export function isOpt(spec: AnyPropsBase): spec is OptTypeC<any> {
  return spec instanceof OptType
}

export function isReq(spec: AnyPropsBase): spec is ReqTypeC<any> {
  return spec instanceof ReqType
}

export function isBoth(spec: AnyPropsBase): spec is BothTypeC<any, any> {
  return spec instanceof BothType
}

export function getProps<Spec extends AnyPropsBase>(
  spec: Spec,
): PropsOf<typeof spec> {
  if (isOpt(spec) || isReq(spec)) {
    return spec.props
  }
  if (isBoth(spec)) {
    return { ...spec.required, ...spec.optional }
  }
  throw new Error(`Unsupported type: ${spec.name}`)
}

export function toOpt<Spec extends AnyPropsBase>(
  spec: Spec,
): OptTypeC<PropsOf<typeof spec>> {
  return opt(getProps(spec))
}

export function toReq<Spec extends AnyPropsBase>(
  spec: Spec,
): ReqTypeC<PropsOf<typeof spec>> {
  return req(getProps(spec))
}

// const r = req({ x: number, y: string })
// type R = TypeOf<typeof r>

// const o = opt({ x: number, y: string })
// type O = TypeOf<typeof o>

// const p = props({ x: number }, { y: string })
// type P = TypeOf<typeof p>

// const oo = reqToOpt(r)
// type OO = TypeOf<typeof oo>

// const rr = optToReq(o)
// type RR = TypeOf<typeof rr>

// const pp = propsToReq(p)
// type PP = TypeOf<typeof pp>

// const pp2 = propsToOpt(p)
// type PP2 = TypeOf<typeof pp2>

// const pir = reqPick(r, ['x'])
// type PIR = TypeOf<typeof pir>

// const pio = optPick(o, ['y'])
// type PIO = TypeOf<typeof pio>

// const pip = propsPick(p, ['x'], ['y'])
// type PIP = TypeOf<typeof pip>

// const oir = reqOmit(r, ['x'])
// type OIR = TypeOf<typeof oir>

// const oio = optOmit(o, ['y'])
// type OIO = TypeOf<typeof oio>

// const oip = propsOmit(p, [], ['y'])
// type OIP = TypeOf<typeof oip>

// const p = props({ x: number }, { y: string })
// const p2 = props({ a: number }, { b: string })
// const p3 = propsCombine(p, p2)
// type P3 = TypeOf<typeof p3>
