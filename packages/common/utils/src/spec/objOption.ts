import { Any, Mixed, OutputOf, Type, TypeOf } from 'io-ts'

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
  extends OptionType<C, TypeOf<C>, OutputOf<C>> {}

export const option = <C extends Mixed>(
  codec: C,
  name: string = `Opt<${codec.name}>`,
): OptionC<C> => {
  return new OptionType(name, codec.is, codec.validate, codec.encode, codec)
}
