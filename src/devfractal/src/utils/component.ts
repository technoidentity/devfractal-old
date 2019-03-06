import { Any, Mixed } from 'io-ts'
import { reporter } from 'io-ts-reporters'
import React from 'react'
import { warning } from './internal'

export type Properties<C extends Any> = C['_A']

export const component: <
  T extends Mixed,
  P extends Properties<T> = Properties<T>
>(
  propsValue: T,
  inner: React.ComponentType<P>,
) => React.FunctionComponent<P> = (propsValue, inner) => props => {
  const v: string = reporter(propsValue.decode(props)).join('\n')
  warning(v === '', v)

  return React.createElement(inner, props)
}
