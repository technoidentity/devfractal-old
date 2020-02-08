import { getPropTypes, PropTypeable } from 'prop-types-ts'
import React from 'react'
import * as t from 'technoidentity-utils'
import { AnyObj, assertCast, isObj } from 'technoidentity-utils'
import { getDisplayName } from './getDisplayName'

type Propable = PropTypeable | AnyObj

export function component<Spec extends t.Mixed & Propable>(
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

  const propSpec: Propable = spec

  Comp.propTypes = isObj(propSpec)
    ? getPropTypes(t.interface(propSpec.props), { strict: false })
    : (getPropTypes(propSpec, { strict: false }) as any)
  return Comp
}
