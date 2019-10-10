import React from 'react'
import { TableOptions, useTable, useTableState } from 'react-table'

export function BasicTable({
  columns,
  data,
}: Pick<TableOptions, 'columns' | 'data'>) {
  const tableState = useTableState({ pageIndex: 0 })
  const { getTableProps, headerGroups, prepareRow, rows } = useTable({
    columns,
    data,
    state: tableState,
    loading: false,
  })
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th key={index}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {rows.map(
            row =>
              prepareRow(row) || (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell, index) => {
                    return (
                      <td key={index} {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              ),
          )}
        </tbody>
      </table>
    </>
  )
}
