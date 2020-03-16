import { Props } from 'io-ts'
import { ObjC } from './obj'
import { OptProps, ReqProps } from './propsObj'

// tslint:disable readonly-array

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

export type ObjOutputOf<Opt extends Props, Req extends Props> = ObjC<
  Opt,
  Req
>['_O']

export type ObjInputOf<Opt extends Props, Req extends Props> = ObjC<
  Opt,
  Req
>['_I']

export type PropsInputOf<P extends Props> = ObjInputOf<OptProps<P>, ReqProps<P>>
export type PropsOutputOf<P extends Props> = ObjOutputOf<
  OptProps<P>,
  ReqProps<P>
>
