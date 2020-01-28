import * as t from '@stp/utils'
import { assertCast } from '@stp/utils'
import React from 'react'

export function component<Spec extends t.Mixed>(
  spec: Spec,
  inner: React.FC<t.TypeOf<Spec>>,
  displayName?: string,
): React.FC<t.TypeOf<Spec>> {
  const Comp: React.FC<t.TypeOf<Spec>> = (props: t.TypeOf<Spec>) => {
    assertCast(spec, props)
    return React.createElement(inner, props)
  }
  // tslint:disable-next-line: no-object-mutation
  Comp.displayName = displayName

  return Comp
}
