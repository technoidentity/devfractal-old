import * as t from 'io-ts'
import React from 'react'
import { typeWarning } from 'technoidentity-utils'

export function component<
  T extends t.Mixed,
  P extends t.TypeOf<T> = t.TypeOf<T>
>(
  // displayName?: string,
  propsRT: T,
  inner: React.FC<P>,
): React.FC<P> {
  return props => {
    typeWarning(propsRT, props)
    return React.createElement(inner, props)
  }
}

// tslint:disable-next-line: no-null-keyword
export const Null: React.FC = () => null
