import { Any, Mixed, OutputOf, Type, TypeOf } from 'io-ts'

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
  extends OneType<C, TypeOf<C>, OutputOf<C>> {}

export const one = <C extends Mixed>(
  codec: C,
  name: string = `One<${codec.name}>`,
): OneC<C> => {
  return new OneType(name, codec.is, codec.validate, codec.encode, codec)
}

export function isOne(spec: Mixed): spec is OneC<any> {
  return spec instanceof OneType
}
