import * as t from 'io-ts'
import { Props, ReadonlyC, TypeC } from 'io-ts'
import { NumberFromString } from 'io-ts-types'
import React from 'react'
import { assert } from 'tcomb'
import { api, Crud } from '../lib'

export interface SimpleCrudProps<T extends Props> {
  readonly baseUrl: string
  readonly value: ReadonlyC<TypeC<T>>
  readonly id?: keyof T
  readonly idDecoder: t.Type<t.TypeOf<T[keyof T]>, string>
  readonly resource?: string
  readonly basePath?: string
}

export const SimpleCrud: <T extends Props>(
  args: SimpleCrudProps<T>,
) => JSX.Element = ({ basePath = '', id, resource, ...props }) => {
  assert(id !== undefined || 'id' in props.value, 'no id defined')

  return (
    <Crud
      api={api({
        id: id || 'id',
        idDecoder: t.union([NumberFromString, t.string]),
        resource: resource || props.value.name,
        ...props,
      })}
      basePath={basePath}
    />
  )
}
