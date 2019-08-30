import React from 'react'
import { Mixed, TypeOf } from 'technoidentity-spec'
import { cast } from 'technoidentity-utils'
import { listProps } from './common'

export interface ListProps<T> {
  readonly data: ReadonlyArray<T>
  readonly page: number
  onPageChange(page: number): void
}

export function listComponent<Spec extends Mixed>(
  spec: Spec,
  Component: React.FC<ListProps<TypeOf<Spec>>>,
): React.FC<ListProps<TypeOf<Spec>>> {
  return props => <Component {...cast(listProps(spec), props)} />
}
