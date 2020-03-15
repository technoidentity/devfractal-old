import {
  Any,
  Mixed,
  OutputOf,
  readonlyArray,
  ReadonlyArrayC,
  Type,
  TypeOf,
  undefined as ioUndefined,
  UndefinedC,
  union,
  UnionC,
} from 'io-ts'

// tslint:disable readonly-array typedef no-class

export class ManyType<C extends Any, A = any, O = A, I = unknown> extends Type<
  A,
  O,
  I
> {
  readonly _tag: 'ManyType' = 'ManyType'
  constructor(
    name: string,
    is: ManyType<C, A, O, I>['is'],
    validate: ManyType<C, A, O, I>['validate'],
    encode: ManyType<C, A, O, I>['encode'],
    readonly spec: C,
  ) {
    super(name, is, validate, encode)
  }
}

export interface ManyC<C extends Mixed>
  extends ManyType<
    UnionC<[ReadonlyArrayC<C>, UndefinedC]>,
    TypeOf<UnionC<[ReadonlyArrayC<C>, UndefinedC]>>,
    OutputOf<UnionC<[ReadonlyArrayC<C>, UndefinedC]>>
  > {}

export const many = <C extends Mixed>(
  codec: C,
  name: string = `Many<${codec.name}>`,
): ManyC<C> => {
  const type = union([readonlyArray(codec), ioUndefined])

  return new ManyType(name, type.is, type.validate, type.encode, type)
}
