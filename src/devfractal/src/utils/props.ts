import {
  intersection,
  IntersectionC,
  Mixed,
  partial,
  PartialC,
  Props,
  readonly,
  ReadonlyC,
  type,
  TypeC,
  TypeOf,
} from 'io-ts'
import { reporter } from 'io-ts-reporters'
import { warning } from './internal'

export const optionalProps: <P extends Props>(
  props: P,
  name?: string,
) => ReadonlyC<PartialC<P>> = props => readonly(partial(props))

export const requiredProps: <P extends Props>(
  props: P,
  name?: string,
) => ReadonlyC<TypeC<P>> = obj => readonly(type(obj))

export const props: <O extends Props, R extends Props>(
  optional: O,
  // @TODO: make 'required' optional to drop requiredProps, optionalProps
  required: R,
) => IntersectionC<[ReadonlyC<PartialC<O>>, ReadonlyC<TypeC<R>>]> = (
  optional,
  required,
) => intersection([readonly(partial(optional)), readonly(type(required))])

export const warnProps: <Type extends Mixed, Value extends TypeOf<Type>>(
  type: Type,
  args: Value,
) => Value = (type, args) => {
  warning(type.is(args), reporter(type.decode(args)).join('\n'))
  return args
}
