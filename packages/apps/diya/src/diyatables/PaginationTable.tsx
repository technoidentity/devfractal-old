import React from 'react'
import {
  TableInstance,
  TableOptions,
  usePagination,
  UsePaginationValues,
  useTable,
  useTableState,
} from 'react-table'
import { Pagination } from '../reacttable/Pagination'

function isTablePagination(
  table: TableInstance | TableInstance & UsePaginationValues,
): table is TableInstance & UsePaginationValues {
  return (table as TableInstance & UsePaginationValues).page !== undefined
}

export const PaginationTable = ({
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
    usePagination,
  )

  // Render the UI for your table
  if (isTablePagination(sampleTable)) {
    const {
      getTableProps,
      headerGroups,
      prepareRow,
      page,
      canPreviousPage,
      canNextPage,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      pageIndex,
      pageSize,
      pageOptions,
      setPageSize,
    } = sampleTable
    return (
      <>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, i) => (
              <tr key={i} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, i) => (
                  <th key={i} {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {page.map(
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
        <Pagination
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          pageOptions={pageOptions}
          pageCount={pageCount}
          gotoPage={gotoPage}
          nextPage={nextPage}
          previousPage={previousPage}
          setPageSize={setPageSize}
          pageIndex={pageIndex}
          pageSize={pageSize}
        />
      </>
    )
  } else {
    return <p>error</p>
  }
}
