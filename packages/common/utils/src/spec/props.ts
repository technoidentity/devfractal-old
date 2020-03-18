import {
  boolean,
  BooleanC,
  BrandC,
  Int,
  IntBrand,
  Mixed,
  number,
  NumberC,
  OutputOf,
  Props,
  string,
  StringC,
  type,
  Type,
  TypeOf,
} from 'io-ts'
import { OmitByValue, PickByValue } from 'utility-types'
import { buildObject, omit, pick } from '../common'
import { isMany, ManyC } from './many'
import { isOne, OneC } from './one'
import { isOption, option, OptionC } from './option'

// tslint:disable readonly-array typedef no-class no-unnecessary-callback-wrapper

export class PropsType<P extends Props, A, O, I> extends Type<A, O, I> {
  readonly _tag: 'PropsType' = 'PropsType'

  constructor(readonly props: P, spec: Type<A, O, I>, name: string) {
    super(name, spec.is, spec.validate, spec.encode)
  }
}

type WrapOption<P extends Props> = {
  readonly [K in keyof P]: P[K] extends OptionC<any> ? P[K] : OptionC<P[K]>
}
type UnwrapOption<P extends Props> = {
  readonly [K in keyof P]: P[K] extends OptionC<any> ? OptionC<P[K]> : P[K]
}

export type OptKeys<P extends Props> = keyof PickByValue<P, OptionC<any>>
export type ReqKeys<P extends Props> = keyof Omit<P, OptKeys<P>>

export type OptProps<P extends Props> = { [K in OptKeys<P>]?: TypeOf<P[K]> }
export type ReqProps<P extends Props> = { [K in ReqKeys<P>]: TypeOf<P[K]> }
type AT<P extends Props> = Readonly<OptProps<P> & ReqProps<P>>

type OptOut<P extends Props> = { [K in OptKeys<P>]?: OutputOf<P[K]> }
type ReqOut<P extends Props> = { [K in ReqKeys<P>]: OutputOf<P[K]> }
type OT<P extends Props> = Readonly<OptOut<P> & ReqOut<P>>

export interface PropsC<P extends Props, A = AT<P>, O = OT<P>, I = unknown>
  extends PropsType<P, A, O, I> {}

export type PropsAny = PropsC<any, any, any>

export type PropsTypeOf<Spec extends PropsAny> = Spec['_A']

// export type OptionProps<P extends Props> = PickByValue<P, OptionC<any>>
// export type OneProps<P extends Props> = PickByValue<P, OneC<any>>
// export type ManyProps<P extends Props> = PickByValue<P, ManyC<any>>

// export type OptionOf<P extends PropsAny> = TypeOf<
//   PartialC<OptionProps<P['_A']>>
// >
// export type OneOf<P extends PropsAny> = TypeOf<TypeC<OneProps<P['_A']>>>
// export type ManyOf<P extends PropsAny> = TypeOf<TypeC<ManyProps<P['_A']>>>

export function props<P extends Props>(props: P, name?: string): PropsC<P> {
  // At this point I am using spec as if this is tcomb, ignoring types.
  // May be some day I might decide to make it safe and have
  // optional, required, oneRef and manyRef specs instead
  // deliberately avoiding readonly in spec. Avoiding 'freeze' by io-ts in dev mode
  const spec = type(props) as any

  return new PropsType(props, spec, name || spec.name)
}

export function getProp<P extends Props, K extends keyof P>(
  spec: PropsC<P>,
  prop: K,
): P[K] {
  return spec.props[prop]
}

export function getProps<P extends Props, K extends keyof P>(
  spec: PropsC<P>,
  props: readonly K[],
): P[K] {
  return props.reduce((acc, v) => {
    // tslint:disable-next-line: no-object-mutation
    acc[v] = spec.props[v]
    return acc
  }, {} as any)
}

export function propsPick<P extends Props, K extends keyof PropsC<P>['_A']>(
  spec: PropsC<P>,
  keys: readonly K[],
  name?: string,
): PropsC<Pick<P, K>> {
  return props(pick(spec.props, keys), name)
}

export function propsOmit<P extends Props, K extends keyof TypeOf<PropsC<P>>>(
  spec: PropsC<P>,
  keys: readonly K[],
  name?: string,
): PropsC<Omit<P, K>> {
  return props(omit(spec.props, keys), name)
}

export function propsCombine<P extends Props, P2 extends Props>(
  p: PropsC<P>,
  p2: PropsC<P2>,
  name?: string,
): PropsC<P & P2> {
  return props({ ...p.props, ...p2.props }, name)
}

export function toOpt<P extends Props>(
  spec: PropsC<P>,
  name?: string,
): PropsC<WrapOption<PropsC<P>['props']>> {
  return props(
    buildObject(spec.props, v => (isOption(v) ? v : option(v))),
    name,
  ) as any
}

export function toReq<P extends Props>(
  spec: PropsC<P>,
  name?: string,
): PropsC<UnwrapOption<PropsC<P>['props']>> {
  return props(
    buildObject(spec.props, v => (isOption(v) ? v.spec : v)),
    name,
  ) as any
}

// export function propsToExact<P extends Props>(
//   spec: PropsC<P>,
//   name?: string,
// ): PropsC<P> {
//   return exactObj(spec.optional, spec.required, name)
// }

// export function pickByValue

export type PropsCPickBy<P extends Props, ValueType> = PropsC<
  PickByValue<P, ValueType>
>

export function propsPickBy<P extends Props, Picks extends Mixed[]>(
  spec: PropsC<P>,
  ...picks: Picks
): PropsCPickBy<P, typeof picks[number]> {
  const names = picks.map(s => (isOption(s) ? s.spec.name : s.name))
  const picked = (s: Mixed) => (names.includes(s.name) ? s : undefined)

  return props(buildObject(spec.props, picked)) as any
}

export function propsPickStrings<P extends Props>(
  spec: PropsC<P>,
): PropsCPickBy<P, StringC> {
  return propsPickBy(spec, string)
}

export function propsPickNumbers<P extends Props>(
  spec: PropsC<P>,
): PropsCPickBy<P, NumberC> {
  return propsPickBy(spec, number)
}

export function propsPickInts<P extends Props>(
  spec: PropsC<P>,
): PropsCPickBy<P, BrandC<NumberC, IntBrand>> {
  return propsPickBy(spec, Int)
}

export function propsPickNumeric<P extends Props>(
  spec: PropsC<P>,
): PropsCPickBy<P, NumberC | BrandC<NumberC, IntBrand>> {
  return propsPickBy(spec, number, Int)
}

export function propsPickStringly<P extends Props>(
  spec: PropsC<P>,
): PropsCPickBy<P, NumberC | BrandC<NumberC, IntBrand> | StringC | BooleanC> {
  return propsPickBy(spec, Int, number, string, boolean)
}

export function getOpt<P extends Props>(
  spec: PropsC<P>,
): PickByValue<P['_A'], OptionC<any>> {
  return buildObject(spec.props, v => (isOption(v) ? v : undefined)) as any
}

export function getReq<P extends Props>(
  spec: PropsC<P>,
): OmitByValue<P['_A'], OptionC<any>> {
  return buildObject(spec.props, v => (isOption(v) ? undefined : v)) as any
}

export function objProps<Opt extends Props, Req extends Props>(
  optional: Opt,
  required: Req,
  name?: string,
): PropsC<Req & WrapOption<Opt>> {
  return props(
    { ...(buildObject(optional, o => option(o)) as any), ...required },
    name,
  )
}

// export function exactObj<Opt extends Props, Req extends Props>(
//   optional: Opt,
//   required: Req,
//   name?: string,
// ): ObjC<Opt, Req> {
//   return newExactObj(optional, required, name)
// }

export function reqProps<Req extends Props>(
  required: Req,
  name?: string,
): PropsC<Req> {
  return props(required, name)
}

export function optProps<Opt extends Props>(
  optional: Opt,
  name?: string,
): PropsC<WrapOption<Opt>> {
  return props(buildObject(optional, o => option(o)) as any, name)
}

export function getManyProps<P extends Props>(
  spec: PropsC<P>,
): PickByValue<UnwrapOption<P>, ManyC<any>> {
  return buildObject(spec.props, p =>
    isMany(p) ? p : isOption(p) ? (isMany(p.spec) ? p : undefined) : undefined,
  ) as any
}

export function getOneProps<P extends Props>(
  spec: PropsC<P>,
): PickByValue<UnwrapOption<P>, OneC<any>> {
  return buildObject(spec.props, p =>
    isOne(p) ? p : isOption(p) ? (isOne(p.spec) ? p : undefined) : undefined,
  ) as any
}

// const Rect = props({
//   x: one(number),
//   y: number,
//   width: many(Int),
//   height: option(Int),
// })

// type Rect = TypeOf<typeof Rect>

// const rect: Rect = { x: 1, width: [10 as Int], height: 20 as Int, y: 2 }

// console.log(Rect.decode(rect))

// type TR = typeof Rect

// type AT = Of<TR>
// type TT = OptOf<TR>
// type RT = ReqOf<TR>
// type PT = OptionOf<TR>
// type MT = ManyOf<TR>
// type OT = OneOf<TR>
