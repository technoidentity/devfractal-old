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

export class OneType<C extends Any, A = any, O = A, I = unknown> extends Type<
  A,
  O,
  I
> {
  readonly _tag: 'OneType' = 'OneType'
  constructor(
    name: string,
    is: OneType<C, A, O, I>['is'],
    validate: OneType<C, A, O, I>['validate'],
    encode: OneType<C, A, O, I>['encode'],
    readonly spec: C,
  ) {
    super(name, is, validate, encode)
  }
}

export interface OneC<C extends Mixed>
  extends OneType<
    UnionC<[C, UndefinedC]>,
    TypeOf<UnionC<[C, UndefinedC]>>,
    OutputOf<UnionC<[C, UndefinedC]>>
  > {}

export const one = <C extends Mixed>(
  codec: C,
  name: string = `Opt<${codec.name}>`,
): OneC<C> => {
  const type = union([codec, ioUndefined])

  return new OneType(name, type.is, type.validate, type.encode, type)
}
