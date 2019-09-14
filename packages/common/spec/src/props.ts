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

class ObjType<A, O, I> extends Type<A, O, I> {}

class ReqType<R extends Props, A, O, I> extends ObjType<A, O, I> {
  readonly _tag: 'ReqType' = 'ReqType'
  constructor(readonly props: R, spec: Type<A, O, I>, name: string) {
    super(name, spec.is, spec.validate, spec.encode)
  }
}

type RS<R extends Props> = ReadonlyC<TypeC<R>>
type AR<R extends Props> = TypeOf<RS<R>>
type OR<R extends Props> = OutputOf<RS<R>>

export interface ReqTypeC<R extends Props>
  extends ReqType<R, AR<R>, OR<R>, unknown> {}

export function req<R extends Props>(required: R, name?: string): ReqTypeC<R> {
  return new ReqType(required, readonly(type(required)), name || 'ReqType')
}

export class OptType<P extends Props, A, O, I> extends ObjType<A, O, I> {
  readonly _tag: 'OptType' = 'OptType'
  constructor(readonly props: P, spec: Type<A, O, I>, name: string) {
    super(name, spec.is, spec.validate, spec.encode)
  }
}

type PS<P extends Props> = ReadonlyC<PartialC<P>>
type AP<P extends Props> = TypeOf<PS<P>>
type OP<P extends Props> = OutputOf<PS<P>>

export interface OptTypeC<P extends Props>
  extends OptType<P, AP<P>, OP<P>, unknown> {}

export function opt<R extends Props>(optional: R, name?: string): OptTypeC<R> {
  return new OptType(optional, readonly(partial(optional)), name || 'OptType')
}

export class PropsType<
  R extends Props,
  P extends Props,
  A,
  O,
  I
> extends ObjType<A, O, I> {
  readonly _tag: 'PropsType' = 'PropsType'

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

type IS<R extends Props, P extends Props> = IntersectionC<
  [ReadonlyC<TypeC<R>>, ReadonlyC<PartialC<P>>]
>
type AI<R extends Props, P extends Props> = TypeOf<IS<R, P>>
type OI<R extends Props, P extends Props> = OutputOf<IS<R, P>>

export interface PropsTypeC<R extends Props, P extends Props>
  extends PropsType<R, P, AI<R, P>, OI<R, P>, unknown> {}

export function props<R extends Props, P extends Props>(
  required: R,
  optional: P,
  name?: string,
): PropsTypeC<R, P> {
  return new PropsType(
    required,
    optional,
    intersection([readonly(type(required)), readonly(partial(optional))]),
    name || 'PropsType',
  )
}

export function propsPick<
  R extends Props,
  P extends Props,
  KR extends keyof R,
  KP extends keyof P
>(
  spec: PropsTypeC<R, P>,
  reqKeys: readonly KR[],
  optKeys: readonly KP[],
): PropsTypeC<Pick<R, KR>, Pick<P, KP>> {
  return props(pick(spec.required, reqKeys), pick(spec.optional, optKeys))
}

export function propsOmit<
  R extends Props,
  P extends Props,
  KR extends keyof R,
  KP extends keyof P
>(
  spec: PropsTypeC<R, P>,
  reqKeys: readonly KR[],
  optKeys: readonly KP[],
): PropsTypeC<Omit<R, KR>, Omit<P, KP>> {
  return props(omit(spec.required, reqKeys), omit(spec.optional, optKeys))
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

export function reqToOpt<P extends Props>(spec: ReqTypeC<P>): OptTypeC<P> {
  return opt(spec.props)
}

export function propsToOpt<R extends Props, P extends Props>(
  spec: PropsTypeC<R, P>,
): OptTypeC<P & R> {
  return opt(spec.props)
}

export function optToReq<P extends Props>(spec: OptTypeC<P>): ReqTypeC<P> {
  return req(spec.props)
}

export function propsToReq<R extends Props, P extends Props>(
  spec: PropsTypeC<R, P>,
): ReqTypeC<P & R> {
  return req(spec.props)
}

export function toProps<R extends Props, P extends Props>(
  req: ReqTypeC<R>,
  opt: OptTypeC<P>,
): PropsTypeC<R, P> {
  return props(req.props, opt.props)
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
