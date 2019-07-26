import * as t from 'io-ts'
import React from 'react'
import { assert } from 'technoidentity-utils'

export function component<Spec extends t.Mixed>(
  // displayName?: string,
  propsRT: Spec,
  inner: React.FC<t.TypeOf<Spec>>,
): React.FC<t.TypeOf<Spec>> {
  return props => {
    assert(propsRT, props)
    return React.createElement(inner, props)
  }
}
