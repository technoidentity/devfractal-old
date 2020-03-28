import React from 'react'
import { RowClickEvent, useCrudComponents } from 'technoidentity-core'
import { isFunction } from 'technoidentity-utils/src'
import { Get } from '../api'

export interface SimpleTableProps<
  T extends Record<string, any>,
  EK extends string,
  Select extends keyof T = keyof T
> {
  readonly select?: readonly Select[]
  readonly override?: Partial<Record<Select, string>>
  readonly extra?: readonly EK[]
  readonly data: readonly T[] | (() => Promise<readonly T[]>)
  onRowClicked?(value: RowClickEvent<T>): void
  children?(key: keyof T | EK, value: T): React.ReactNode
}

export function SimpleTable<
  T extends Record<string, any>,
  EK extends string,
  Select extends keyof T = keyof T
>(args: SimpleTableProps<T, EK, Select>): JSX.Element {
  const { data, ...props } = args
  const { TableView } = useCrudComponents()

  return isFunction(data) ? (
    <Get asyncFn={data}>{data => <TableView {...props} data={data} />}</Get>
  ) : (
    <TableView data={data} {...props} />
  )
}
