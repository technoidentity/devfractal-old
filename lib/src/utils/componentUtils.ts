import * as t from 'io-ts'
import React from 'react'
import { typeWarning } from './iotsUtils'

export const component: <T extends t.Mixed, P extends t.TypeOf<T>>(
  // displayName?: string,
  propsValue: T,
  inner: React.FC<P>,
) => React.FC<P> = (propsValue, inner) => props => {
  typeWarning(propsValue, props)
  return React.createElement(inner, props)
}

// tslint:disable-next-line: no-null-keyword
export const Null: React.FC = () => null
