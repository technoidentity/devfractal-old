import {
  Mixed,
  number,
  NumberC,
  OutputOf,
  string,
  StringC,
  Type,
  TypeOf,
} from 'io-ts'

// tslint:disable readonly-array typedef no-class

export class IDType<
  C extends NumberC | StringC,
  A,
  O,
  I = unknown
> extends Type<A, O, I> {
  readonly _tag: 'IDType' = 'IDType'
  constructor(
    name: string,
    is: IDType<C, A, O, I>['is'],
    validate: IDType<C, A, O, I>['validate'],
    encode: IDType<C, A, O, I>['encode'],
    readonly spec: C,
  ) {
    super(name, is, validate, encode)
  }
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IDC<C extends NumberC | StringC>
  extends IDType<NumberC | StringC, TypeOf<C>, OutputOf<C>> {}

const id = <C extends NumberC | StringC>(
  codec: C & Mixed,
  name: string = `Opt<${codec.name}>`,
): IDC<C> => {
  return new IDType(name, codec.is, codec.validate, codec.encode, codec)
}

export function isID(spec: Mixed): spec is IDC<any> {
  return spec instanceof IDType
}

export const NumID = id(number, 'NumID')
export const StrID = id(string, 'StrID')
