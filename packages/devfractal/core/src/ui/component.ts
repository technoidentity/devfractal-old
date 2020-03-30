import React from 'react'
import * as t from 'srtp-utils'
import { AnyObj, assertCast } from 'srtp-utils'
import { getDisplayName } from './getDisplayName'

export function component<Spec extends AnyObj>(
  spec: Spec,
  inner: React.FC<t.TypeOf<Spec>>,
  displayName?: string,
): React.FC<t.TypeOf<Spec>> {
  const Comp: React.FC<t.TypeOf<Spec>> = (props: t.TypeOf<Spec>) => {
    assertCast(spec, props)

    return React.createElement(inner, props)
  }
  // tslint:disable no-object-mutation

  Comp.displayName =
    displayName || getDisplayName(Comp) || spec.name.endsWith('Props')
      ? spec.name.slice(0, spec.name.length - 'Props'.length)
      : spec.name

  // Comp.propTypes = getPropTypes(spec, { strict: false }) as any

  return Comp
}
