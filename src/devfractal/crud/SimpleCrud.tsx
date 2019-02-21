import { Props, ReadonlyC, TypeC } from 'io-ts'
import React from 'react'
import { api } from './api'
import { Crud } from './Crud'

export interface SimpleCrudProps<T extends Props & { readonly id: any }> {
  readonly baseUrl: string
  readonly resource: string
  readonly value: ReadonlyC<TypeC<T>>
}

export const SimpleCrud: <T extends Props & { readonly id: any }>(
  args: SimpleCrudProps<T>,
) => JSX.Element = args => <Crud api={api(args)} />
