import {
  Any,
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
import { PathReporter } from 'io-ts/lib/PathReporter'
import React from 'react'
import warning from 'tiny-warning'

// tslint:disable-next-line: no-null-keyword

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
  warning(type.is(args), PathReporter.report(type.decode(args)).join('\n'))
  return args
}

export type Properties<C extends Any> = C['_A']

export const component: <
  T extends Mixed,
  P extends Properties<T> = Properties<T>
>(
  propsValue: T,
  inner: React.ComponentType<P>,
) => React.SFC<P> = (propsValue, inner) => props => {
  const v: string = reporter(propsValue.decode(props)).join('\n')
  warning(v === '', v)

  // tslint:disable-next-line: typedef
  const Component = inner
  return <Component {...props} />
}
