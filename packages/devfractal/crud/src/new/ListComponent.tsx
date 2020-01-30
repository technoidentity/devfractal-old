import { Mixed, TypeOf } from '@stp/utils'
import { cast } from '@stp/utils'
import React from 'react'
import { listProps } from './common'

export interface ListProps<T> {
  readonly data: readonly T[]
  readonly page: number
  onPageChange(page: number): void
}

export function listComponent<Spec extends Mixed>(
  spec: Spec,
  Component: React.FC<ListProps<TypeOf<Spec>>>,
): React.FC<ListProps<TypeOf<Spec>>> {
  return props => <Component {...cast(listProps(spec), props)} />
}
