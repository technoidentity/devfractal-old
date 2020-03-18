import {
  Any,
  Mixed,
  OutputOf,
  Type,
  TypeOf,
  undefined as ioUndefined,
  UndefinedC,
  union,
  UnionC,
} from 'io-ts'

// tslint:disable readonly-array typedef no-class

export class OptionType<
  C extends Any,
  A = any,
  O = A,
  I = unknown
> extends Type<A, O, I> {
  readonly _tag: 'OptType' = 'OptType'
  constructor(
    name: string,
    is: OptionType<C, A, O, I>['is'],
    validate: OptionType<C, A, O, I>['validate'],
    encode: OptionType<C, A, O, I>['encode'],
    readonly spec: C,
  ) {
    super(name, is, validate, encode)
  }
}

export interface OptionC<C extends Mixed>
  extends OptionType<
    UnionC<[C, UndefinedC]>,
    TypeOf<UnionC<[C, UndefinedC]>>,
    OutputOf<UnionC<[C, UndefinedC]>>
  > {}

export const option = <C extends Mixed>(
  codec: C,
  name: string = `Opt<${codec.name}>`,
): OptionC<C> => {
  const type = union([codec, ioUndefined])

  return new OptionType(name, type.is, type.validate, type.encode, type)
}

export function isOption(spec: Mixed): spec is OptionC<any> {
  const type: any = spec

  return '_tag' in type && type._tag === 'OptionType'
}
