import React from 'react'
import { Table } from 'technoidentity-devfractal'
import { TableProps } from './models'
import { ReactTableBody } from './ReactTableBody'
import { ReactTableHead } from './ReactTableHead'

export function ReactTable<
  D extends { readonly id: string; readonly vehicleId?: string }
>({
  getTableProps,
  headerGroups,
  page,
  prepareRow,
  sorting,
  actions,
}: TableProps<D>) {
  return (
    <Table fullWidth striped narrow {...getTableProps()}>
      <ReactTableHead
        headerGroups={headerGroups}
        sorting={sorting}
        actions={actions}
      />
      <ReactTableBody page={page} prepareRow={prepareRow} actions={actions} />
    </Table>
  )
}
