import React from 'react'
import { Table } from 'technoidentity-devfractal'
import { TableProps } from './models'
import { ReactTableBody } from './ReactTableBody'
import { ReactTableHead } from './ReactTableHead'

export function ReactTable ({
  getTableProps,
  headerGroups,
  page,
  prepareRow,
  sorting,
  actions
}:TableProps){
  return (
    <Table fullWidth striped narrow {...getTableProps()}>
      <ReactTableHead headerGroups={headerGroups} sorting={sorting} actions={actions}/>
      <ReactTableBody page={page} prepareRow={prepareRow} actions={actions}/>
    </Table>
  )
}
