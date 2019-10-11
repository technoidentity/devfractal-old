import React from 'react'
import { TableProps } from './models'
import { ReactTableBody } from './ReactTableBody'
import { ReactTableHead } from './ReactTableHead'

export const ReactTable: React.FC<TableProps> = ({
  getTableProps,
  headerGroups,
  page,
  prepareRow,
  sorting,
}) => {
  return (
    <table {...getTableProps()}>
      <ReactTableHead headerGroups={headerGroups} sorting={sorting} />
      <ReactTableBody page={page} prepareRow={prepareRow} />
    </table>
  )
}
