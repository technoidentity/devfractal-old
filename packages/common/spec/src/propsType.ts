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
  TypeOf,
} from 'io-ts'

// tslint:disable no-class no-parameter-properties readonly-array typedef no-this

export class PropsType<
  R extends Props | undefined,
  P extends Props | undefined,
  A,
  O = A,
  I = unknown
> extends Type<A, O, I> {
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

// type RT<P extends Props> = ReadonlyC<TypeC<P>>
// type RP<P extends Props> = ReadonlyC<PartialC<P>>
// type RPT<P extends Props, T extends Props> = IntersectionC<[RT<T>, RP<P>]>

export function propsType<P extends Props>(args: {
  readonly optional: P
  readonly name?: string
}): PropsType<{}, P, TypeOf<ReadonlyC<PartialC<P>>>>

export function propsType<R extends Props>(args: {
  readonly required: R
  readonly name?: string
}): PropsType<R, {}, TypeOf<ReadonlyC<TypeC<R>>>>

export function propsType<R extends Props, P extends Props>(args: {
  readonly name?: string
  readonly optional: P
  readonly required: R
}): PropsType<
  R,
  P,
  TypeOf<IntersectionC<[ReadonlyC<PartialC<P>>, ReadonlyC<TypeC<R>>]>>
>

export function propsType<R extends Props, P extends Props>(args: {
  readonly optional?: P | undefined
  readonly required?: R | undefined
  readonly name?: string
}): PropsType<R, P, any> {
  const { name, required, optional } = args

  if (required && optional) {
    const spec = intersection([
      readonly(partial(optional)),
      readonly(type(required)),
    ])

    return new PropsType(required, optional, spec, name || 'Props')
  }

  if (required) {
    const spec = readonly(type(required))

    return new PropsType(required, {} as any, spec, name || 'Props')
  }

  if (optional) {
    const spec = readonly(partial(optional))

    return new PropsType({} as any, optional, spec, name || 'Props')
  }

  throw new Error('props should be passed at least one of required, optional')
}

// const req = intersection([type({ x: number, y: number }), unknown])
// const opt = intersection([partial({ x: number, y: number }), unknown])
// const p = intersection([type({ x: number }), partial({ y: number })])
// const u = intersection([unknown, unknown])

// const req = props({ required: { x: number, y: number } })
// const opt = props({ optional: { x: number, y: number } })
// const p = props({ required: { x: number }, optional: { y: number } })

// type Req = TypeOf<typeof req>
// type Opt = TypeOf<typeof opt>
// type P = TypeOf<typeof p>
