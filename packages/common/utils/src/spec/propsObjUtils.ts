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
  TypeOf,
} from 'io-ts'
import { PickByValue } from 'utility-types'
import { buildObject, omit, pick } from '../common'
import { exactObj } from './obj'
import {
  props,
  PropsC,
  propsObj,
  propsOpt,
  propsReq,
  WrapOption,
} from './propsObj'

export function propsPick<P extends Props, K extends keyof PropsC<P>['props']>(
  spec: PropsC<P>,
  keys: readonly K[],
  name?: string,
): PropsC<Pick<P, K>> {
  return props(pick(spec.props, keys), name) as any
}

export function propsOmit<P extends Props, K extends keyof TypeOf<PropsC<P>>>(
  spec: PropsC<P>,
  keys: readonly K[],
  name?: string,
): PropsC<Omit<P, K>> {
  return props(omit(spec.props, keys), name) as any
}

// export function propsPick<
//   Opt extends Props,
//   Req extends Props,
//   KP extends keyof Opt,
//   KR extends keyof Req
// >(
//   { optional, required }: PropsC<P>,
//   optKeys: readonly KP[] = [],
//   reqKeys: readonly KR[] = [],
//   name?: string,
// ): PropsC<Pick<Opt, KP>, Pick<Req, KR>> {
//   return obj(pick(optional, optKeys), pick(required, reqKeys), name)
// }

// export function propsOmit<
//   Opt extends Props,
//   Req extends Props,
//   KP extends keyof Opt,
//   KR extends keyof Req
// >(
//   { optional, required }: PropsC<P>,
//   optKeys: readonly KP[] = [],
//   reqKeys: readonly KR[] = [],
//   name?: string,
// ): PropsC<Omit<Opt, KP>, Omit<Req, KR>> {
//   return obj(omit(optional, optKeys), omit(required, reqKeys), name)
// }

export function propsCombine<P extends Props, P2 extends Props>(
  p: PropsC<P>,
  p2: PropsC<P2>,
  name?: string,
): PropsC<P & P2> {
  return props({ ...p.props, ...p2.props }, name) as any
}

export function propsToOpt<P extends Props>(
  spec: PropsC<P>,
  name?: string,
): PropsC<WrapOption<P>> {
  return propsOpt(spec.props, name) as any
}

export function propsToReq<P extends Props>(
  spec: PropsC<P>,
  name?: string,
): PropsC<P> {
  return propsReq(spec.props, name) as any
}

export function propsToExact<P extends Props>(
  spec: PropsC<P>,
  name?: string,
): PropsC<P> {
  return exactObj(spec.optional, spec.required, name)
}

// export function pickByValue

export type PropsPropsCPickBy<P extends Props, ValueType> = PropsC<
  PickByValue<P, ValueType>
>

export function propsPickBy<P extends Props, Picks extends Mixed[]>(
  spec: PropsC<P>,
  ...picks: Picks
): PropsPropsCPickBy<P, typeof picks[number]> {
  function isSpec(
    names: readonly string[],
  ): (spec: Mixed) => Mixed | undefined {
    return spec => (names.includes(spec.name) ? spec : undefined)
  }

  return propsObj(
    buildObject(spec.required, isSpec(picks.map(s => s.name))),
    buildObject(spec.optional, isSpec(picks.map(s => s.name))),
  ) as any
}

export function propsPickStrings<P extends Props>(
  spec: PropsC<P>,
): PropsPropsCPickBy<P, StringC> {
  return propsPickBy(spec, string)
}

export function propsPickNumbers<P extends Props>(
  spec: PropsC<P>,
): PropsPropsCPickBy<P, NumberC> {
  return propsPickBy(spec, number)
}

export function propsPickInts<P extends Props>(
  spec: PropsC<P>,
): PropsPropsCPickBy<P, BrandC<NumberC, IntBrand>> {
  return propsPickBy(spec, Int)
}

export function propsPickNumeric<P extends Props>(
  spec: PropsC<P>,
): PropsPropsCPickBy<P, NumberC | BrandC<NumberC, IntBrand>> {
  return propsPickBy(spec, number, Int)
}

export function propsPickStringly<P extends Props>(
  spec: PropsC<P>,
): PropsPropsCPickBy<
  P,
  NumberC | BrandC<NumberC, IntBrand> | StringC | BooleanC
> {
  return propsPickBy(spec, Int, number, string, boolean)
}
