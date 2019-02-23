import { Props, ReadonlyC, TypeC } from 'io-ts'
import React from 'react'
import { api, Crud } from '../internal'

export interface SimpleCrudProps<T extends Props & { readonly id: any }> {
  readonly baseUrl: string
  readonly resource: string
  readonly value: ReadonlyC<TypeC<T>>
}

export const SimpleCrud: <T extends Props & { readonly id: any }>(
  args: SimpleCrudProps<T>,
  basePath: string,
) => JSX.Element = (args, basePath) => (
  <Crud api={api(args)} basePath={basePath} />
)
