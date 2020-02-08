import { Mixed, TypeOf } from 'stp-utils'
import { assert } from 'stp-utils'
import React from 'react'
import { api } from './apiFn'
import { Crud } from './Crud'

export interface SimpleCrudProps<RT extends Mixed> {
  readonly baseURL: string
  readonly value: RT
  readonly id: keyof TypeOf<RT>
  readonly resource?: string
  readonly basePath?: string
}

export const SimpleCrud: <T extends Mixed>(
  args: SimpleCrudProps<T>,
) => JSX.Element = ({ basePath = '', id, resource, ...props }) => {
  assert(id !== undefined || 'id' in props.value, 'no id defined')

  return (
    <Crud
      api={api({
        id,
        resource: resource || props.value.name,
        ...props,
      })}
      basePath={basePath}
    />
  )
}
