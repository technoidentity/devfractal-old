import { Props, ReadonlyC, TypeC } from 'io-ts'
import React from 'react'
import { api, Crud } from '../lib'

export interface SimpleCrudProps<T extends Props> {
  readonly baseUrl: string
  readonly resource: string
  readonly value: ReadonlyC<TypeC<T>>
  readonly id: keyof T
  readonly basePath?: string
}

export const SimpleCrud: <T extends Props>(
  args: SimpleCrudProps<T>,
) => JSX.Element = ({ basePath = '', ...props }) => (
  <Crud id="id" api={api(props)} basePath={basePath} />
)
