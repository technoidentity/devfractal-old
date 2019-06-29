import { Mixed, TypeOf } from 'io-ts'
import React from 'react'
import { assert } from 'tcomb'
import { api, Crud } from '../lib'

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
