import { Mixed, TypeOf } from 'io-ts'
import React from 'react'
import { cast } from 'technoidentity-utils'
import { listProps } from './common'

interface ListProps<Spec extends Mixed> {
  readonly data: ReadonlyArray<TypeOf<Spec>>
  readonly page: number
  readonly createTo: string
  editTo(id: string | number | undefined): string
  onPageChange(page: number): void
}

export function listComponent<Spec extends Mixed>(
  spec: Spec,
  inner: React.FC<ListProps<Spec>>,
): React.FC<ListProps<Spec>> {
  // tslint:disable-next-line: typedef
  const Component = inner

  return (props: ListProps<Spec>) => (
    <Component {...cast(listProps(spec), props)} />
  )
}
