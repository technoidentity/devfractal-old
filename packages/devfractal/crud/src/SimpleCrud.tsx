import React from 'react'
import { Mixed, TypeOf } from 'technoidentity-spec'
import { assert } from 'technoidentity-utils'
import { simpleAPI } from './api'
import { Crud } from './Crud'

export interface SimpleCrudProps<Spec extends Mixed> {
  readonly baseURL: string
  readonly spec: Spec
  readonly id: keyof TypeOf<Spec>
  readonly resource?: string
  readonly basePath?: string
}

export const SimpleCrud: <T extends Mixed>(
  args: SimpleCrudProps<T>,
) => JSX.Element = ({ basePath = '', id, resource, ...props }) => {
  assert(id !== undefined || 'id' in props.spec, 'no id defined')

  return (
    <Crud
      api={simpleAPI({
        id,
        resource: resource || props.spec.name,
        ...props,
      })}
      basePath={basePath}
    />
  )
}
