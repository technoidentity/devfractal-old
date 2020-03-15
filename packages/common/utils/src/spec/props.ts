import {
  exact,
  OutputOf,
  PartialC,
  Props,
  readonly,
  type,
  Type,
  TypeC,
  TypeOf,
} from 'io-ts'
import { PickByValue } from 'utility-types'
import { ManyC } from './many'
import { OneC } from './one'
import { OptionC } from './option'

// tslint:disable readonly-array typedef no-class

export class PropsType<P extends Props, A, O, I> extends Type<A, O, I> {
  readonly _tag: 'PropsType' = 'PropsType'

  constructor(readonly props: P, readonly spec: Type<A, O, I>, name: string) {
    super(name, spec.is, spec.validate, spec.encode)
  }
}

type OptKeys<P extends Props> = keyof PickByValue<
  P,
  OptionC<any> | OneC<any> | ManyC<any>
>

type ReqKeys<P extends Props> = keyof Omit<P, OptKeys<P>>

type TypeOfProps<P extends Props> = Readonly<
  { [K in OptKeys<P>]?: TypeOf<P[K]> } & { [K in ReqKeys<P>]-?: TypeOf<P[K]> }
>

type OutputOfProps<P extends Props> = Readonly<
  { [K in OptKeys<P>]?: OutputOf<P[K]> } &
    { [K in ReqKeys<P>]-?: OutputOf<P[K]> }
>

export interface PropsC<
  P extends Props,
  A = TypeOfProps<P>,
  O = OutputOfProps<P>,
  I = unknown
> extends PropsType<P, A, O, I> {}

export function props<P extends Props>(props: P, name?: string): PropsC<P> {
  // At this point I am using spec as if this is tcomb, ignoring types.
  // May be some day I might decide to make it safe and have
  // optional, required, oneRef and manyRef specs instead
  const spec = readonly(exact(type(props))) as any

  return new PropsType(props, spec, name || type(props).name)
}

export function getProp<Spec extends AnyProps, K extends keyof TypeOf<Spec>>(
  spec: Spec,
  prop: K,
): Spec['props'][K] {
  return spec.props[prop]
}

export function getProps<Spec extends AnyProps, K extends keyof TypeOf<Spec>>(
  spec: Spec,
  props: readonly K[],
): Spec['props'][K] {
  return props.reduce<Spec['props']>((acc, v) => {
    // tslint:disable-next-line: no-object-mutation
    acc[v] = spec.props[v]
    return acc
  }, {})
}

// export function getOptional<Spec extends AnyProps>(spec: Spec) {
//   return getProps(spec)
// }

// export function getRequired<Spec extends AnyProps>(spec: Spec) {
//   return spec.props[prop]
// }

// export function getMany<Spec extends AnyProps>(spec: Spec) {
//   return spec.props[prop]
// }

// export function getOne<Spec extends AnyProps>(
//   spec: Spec,
//   prop: K,
// ): Spec['props'][K] {
//   return spec.props[prop]
// }

export type AnyProps = PropsC<any, any, any>

export type Of<P extends AnyProps> = TypeOf<P>

export type ReqOf<P extends AnyProps> = TypeOf<
  TypeC<Pick<P['props'], ReqKeys<P['props']>>>
>

export type OptOf<P extends AnyProps> = TypeOf<
  PartialC<Pick<P['props'], OptKeys<P['props']>>>
>

export type OptionOf<P extends AnyProps> = TypeOf<
  PartialC<PickByValue<P['props'], OptionC<any>>>
>

export type OneOf<P extends AnyProps> = TypeOf<
  PartialC<PickByValue<P['props'], OneC<any>>>
>

export type ManyOf<P extends AnyProps> = TypeOf<
  PartialC<PickByValue<P['props'], ManyC<any>>>
>

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
