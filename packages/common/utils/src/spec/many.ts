import {
  Any,
  Mixed,
  OutputOf,
  readonlyArray,
  ReadonlyArrayC,
  Type,
  TypeOf,
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
    ReadonlyArrayC<C>,
    TypeOf<ReadonlyArrayC<C>>,
    OutputOf<ReadonlyArrayC<C>>
  > {}

export const many = <C extends Mixed>(
  codec: C,
  name: string = `Many<${codec.name}>`,
): ManyC<C> => {
  const type = readonlyArray(codec)

  return new ManyType(name, type.is, type.validate, type.encode, type)
}

export function isMany(spec: Mixed): spec is ManyC<any> {
  const type: any = spec

  return '_tag' in type && type._tag === 'ManyType'
}
