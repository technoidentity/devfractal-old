import { Props, ReadonlyC, TypeC } from 'io-ts'
import React from 'react'
import { api, Crud } from '../lib'

export interface SimpleCrudProps<T extends Props & { readonly id: any }> {
  readonly baseUrl: string
  readonly resource: string
  readonly value: ReadonlyC<TypeC<T>>
  readonly basePath?: string
}

export const SimpleCrud: <T extends Props & { readonly id: any }>(
  args: SimpleCrudProps<T>,
) => JSX.Element = ({ basePath = '', ...props }) => (
  <Crud api={api(props)} basePath={basePath} />
)
