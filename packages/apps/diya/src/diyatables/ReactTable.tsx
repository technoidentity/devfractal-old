import {
  faArrowDown,
  faArrowsAltV,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons'
import { Icon } from 'devfractal-ui-core'
import React from 'react'
import {
  TableInstance,
  TableOptions,
  useFilters,
  usePagination,
  UsePaginationValues,
  useSortBy,
  useTable,
  useTableState,
} from 'react-table'
import { Pagination } from './Pagination'
import { DefaultColumnFilter, SelectColumnFilter } from './TableFilters'
// import { Sorting } from './SortingTable'

function isTablePagination(
  table: TableInstance | TableInstance & UsePaginationValues,
): table is TableInstance & UsePaginationValues {
  return (table as TableInstance & UsePaginationValues).page !== undefined
}

const getFilter = (
  headers: readonly any[],
  index: number,
  filterOptions?: ReadonlyArray<FilterOptions>,
) => {
  const filter =
    filterOptions &&
    filterOptions.map((filterOption: FilterOptions) =>
      filterOption.columnName === headers[index]
        ? filterOption.filterType === 'search'
          ? DefaultColumnFilter
          : filterOption.filterType === 'select'
          ? SelectColumnFilter
          : undefined
        : undefined,
    )
  return filter && filter.filter(it => it !== undefined)[0]
}

const generateReactTableData = (
  data: readonly any[],
  headerNames?: ReadonlyArray<string>,
  filterOptions?: ReadonlyArray<FilterOptions>,
) => {
  const [first] = data
  const headers = first ? Object.keys(first) : []

  const headerData = headerNames
    ? headerNames.map((headerName: string, index: number) => ({
        Header: headerName,
        accessor: headers[index],
        Filter: getFilter(headers, index, filterOptions),
      }))
    : headers.map((headerName: string, index) => ({
        Header: headerName,
        accessor: headerName,
        Filter: getFilter(headers, index, filterOptions),
      }))

  const columns: any[] = [
    {
      Header: 'Table Information',
      columns: (headerData && [...headerData]) || [],
    },
  ]
  return columns
}

interface FilterOptions {
  readonly columnName: string
  readonly filterType: 'select' | 'search'
}

interface TableProps {
  readonly headerNames?: ReadonlyArray<string>
  readonly isSorted: boolean
  readonly filterOption?: ReadonlyArray<FilterOptions>
  readonly pagination: boolean
}

export const ReactTable = ({
  data,
  filterOption,
  headerNames,
  isSorted,
  pagination,
}: Pick<TableOptions, 'data'> & TableProps) => {
  const columns = generateReactTableData(data, headerNames, filterOption)

  if (data.length > 0) {
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
      useSortBy,
      usePagination,
    )

    // Render the UI for your table
    if (isTablePagination(sampleTable)) {
      return (
        <>
          <table>
            <thead>
              {sampleTable.headerGroups.map((headerGroup, i) => (
                <tr key={i} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, i) => (
                    <th key={i} {...column.getHeaderProps()}>
                      {column.Filter ? (
                        <>
                          Search by {column.render('Header')} :{' '}
                          {column.render('Filter')}
                        </>
                      ) : (
                        undefined
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
          </table>
          <table {...sampleTable.getTableProps()}>
            <thead>
              {sampleTable.headerGroups.map((headerGroup, i) => (
                <tr key={i} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, i) =>
                    isSorted ? (
                      <th
                        key={i}
                        {...column.getHeaderProps()}
                        {...column.getHeaderProps(
                          column.getSortByToggleProps(),
                        )}
                      >
                        {column.render('Header')}
                        <span>
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <Icon icon={faArrowDown} />
                            ) : (
                              <Icon icon={faArrowUp} />
                            )
                          ) : (
                            <Icon icon={faArrowsAltV} />
                          )}
                        </span>
                      </th>
                    ) : (
                      <th key={i} {...column.getHeaderProps()}>
                        {column.render('Header')}
                      </th>
                    ),
                  )}
                </tr>
              ))}
            </thead>
            <tbody>
              {sampleTable.page.map(
                (row: any, i: number) =>
                  sampleTable.prepareRow(row) || (
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
          {pagination ? (
            <Pagination
              canPreviousPage={sampleTable.canPreviousPage}
              canNextPage={sampleTable.canNextPage}
              pageOptions={sampleTable.pageOptions}
              pageCount={sampleTable.pageCount}
              gotoPage={sampleTable.gotoPage}
              nextPage={sampleTable.nextPage}
              previousPage={sampleTable.previousPage}
              setPageSize={sampleTable.setPageSize}
              pageIndex={sampleTable.pageIndex}
              pageSize={sampleTable.pageSize}
            />
          ) : (
            <></>
          )}
        </>
      )
    } else {
      return <p>error</p>
    }
  }
  return <>loading</>
}
