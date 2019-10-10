import React from 'react'
import { TableOptions, useFilters, useTable, useTableState } from 'react-table'

export const FilterTable = ({
  columns,
  data,
}: Pick<TableOptions, 'data' | 'columns'>) => {
  const tableState = useTableState({ pageIndex: 0, pageSize: 10 })
  // Use the state and functions returned from useTable to build your UI
  const sampleTable = useTable(
    {
      columns,
      data,
      loading: true,
      state: tableState,
    },
    useFilters,
  )

  // Render the UI for your table
  const { getTableProps, headerGroups, prepareRow, rows } = sampleTable
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, i) => (
          <tr key={i} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, i) => (
              <th key={i} {...column.getHeaderProps()}>
                {column.render('Header')}
                <div>{column.Filter ? column.render('Filter') : undefined}</div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {rows.map(
          (row: any, i: number) =>
            prepareRow(row) || (
              <tr key={i} {...row.getRowProps()}>
                {row.cells.map((cell: any, i: number) => {
                  return (
                    <td key={i} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            ),
        )}
      </tbody>
    </table>
  )
}
