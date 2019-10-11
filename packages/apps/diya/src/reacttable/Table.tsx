import React from 'react'
import {
  TableInstance,
  useFilters,
  usePagination,
  UsePaginationValues,
  useSortBy,
  useTable,
  useTableState,
} from 'react-table'
import { Filters } from './Filters'
import { ReactTableProps } from './models'
import { Pagination } from './Pagination'
import { ReactTable } from './ReactTable'
import { generateReactTableData } from './ReactTableData'
function isPaginated(
  table: TableInstance | TableInstance & UsePaginationValues,
): table is TableInstance & UsePaginationValues {
  return (table as TableInstance & UsePaginationValues).page !== undefined
}

export const Table: React.FC<ReactTableProps> = ({
  data,
  filterOption,
  headerNames,
  sorting,
  pagination,
}) => {
  const columns = generateReactTableData({ data, headerNames, filterOption })

  const tableState = useTableState({ pageIndex: 0, pageSize: 10 })

  const reactTableData = useTable(
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
  if (data.length > 0) {
    if (isPaginated(reactTableData)) {
      return (
        <>
          <Filters {...reactTableData} />
          <ReactTable {...reactTableData} sorting={sorting} />
          {pagination ? (
            <Pagination
              canPreviousPage={reactTableData.canPreviousPage}
              canNextPage={reactTableData.canNextPage}
              pageOptions={reactTableData.pageOptions}
              pageCount={reactTableData.pageCount}
              gotoPage={reactTableData.gotoPage}
              nextPage={reactTableData.nextPage}
              previousPage={reactTableData.previousPage}
              setPageSize={reactTableData.setPageSize}
              pageIndex={reactTableData.pageIndex}
              pageSize={reactTableData.pageSize}
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
  return <>No data</>
}
