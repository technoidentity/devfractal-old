import {
  intersection,
  partial,
  PartialC,
  Props,
  readonly,
  type,
  TypeC,
  TypeOf,
} from 'io-ts'
import { PickByValue } from 'utility-types'
import { buildObject } from '../common'
import { AnyObj, obj, ObjC, ObjType, opt, req } from './obj'
import { ManyC } from './objMany'
import { OneC } from './objOne'
import { OptionC } from './objOption'

type Optional = OptionC<any> | OneC<any> | ManyC<any>
type OptKeys<P extends Props> = keyof PickByValue<P, Optional>
type ReqKeys<P extends Props> = keyof Omit<P, OptKeys<P>>

export type OptProps<P extends Props> = Pick<P, OptKeys<P>>
export type ReqProps<P extends Props> = Pick<P, ReqKeys<P>>

export type PropsC<P extends Props> = ObjC<OptProps<P>, ReqProps<P>>

// tslint:disable typedef
export function props<P extends Props>(
  props: P,
  name?: string,
): ObjC<OptProps<P>, ReqProps<P>> {
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

  return new ObjType(spec, name || spec.name) as any
}
// tslint:enable typedef

export type PropsTypeOf<P extends Props> = TypeOf<PropsC<P>>

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

type UnWrap<P extends Props> = { readonly [K in keyof P]: P[K]['_A'] }
export type PropsCompatC<P extends Props> = ObjC<
  UnWrap<OptProps<P>>,
  ReqProps<P>
>
export type WrapOption<P extends Props> = {
  readonly [K in keyof P]: OptionC<P[K]>
}

export function propsObj<Opt extends Props, Req extends Props>(
  optional: Opt,
  required: Req,
  name?: string,
): PropsC<WrapOption<Opt> & Req> {
  return obj(optional, required, name) as any
}

// export function exactObj<Opt extends Props, Req extends Props>(
//   optional: Opt,
//   required: Req,
//   name?: string,
// ): ObjC<Opt, Req> {
//   return newExactObj(optional, required, name)
// }

export function propsReq<Req extends Props>(
  required: Req,
  name?: string,
): PropsC<Req> {
  return req(required, name) as any
}

export function propsOpt<Opt extends Props>(
  optional: Opt,
  name?: string,
): PropsC<WrapOption<Opt>> {
  return opt(optional, name) as any
}

// const Rect = propsObj(
//   {
//     width: number,
//     height: number,
//   },
//   {
//     x: number,
//     y: number,
//   },
// )

// type Rect = TypeOf<typeof Rect>
// const rect: Rect = {
//   x: 1,
//   y: 2,
//   width: 3,
//   height: 4,
// }

// console.log(Rect.decode(rect))

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
