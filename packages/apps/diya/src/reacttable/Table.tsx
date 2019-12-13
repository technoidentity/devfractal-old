import { Column, Columns } from 'devfractal-ui-core'
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

function isPaginated<D>(
  table: TableInstance<D> | TableInstance<D> & UsePaginationValues<D>,
): table is TableInstance<D> & UsePaginationValues<D> {
  return (table as TableInstance<D> & UsePaginationValues<D>).page !== undefined
}

export function Table<
  D extends { readonly id: string; readonly vehicleId?: string }
>({
  tableData,
  filterOption,
  headerNames,
  sorting,
  pagination,
  headerLabels,
  actions,
}: ReactTableProps<D>) {
  const { columns } = generateReactTableData<D>({
    tableData,
    headerNames,
    headerLabels,
    filterOption,
  })

  const tableState = useTableState({ pageIndex: 0, pageSize: 10 })

  const reactTableData = useTable<D>(
    {
      columns,
      data: tableData,
      loading: true,
      state: tableState,
    },
    useFilters,
    useSortBy,
    usePagination,
  )
  if (tableData.length > 0) {
    if (isPaginated(reactTableData)) {
      return (
        <Columns>
          <Column>
            <Filters {...reactTableData} />
            <ReactTable
              {...reactTableData}
              sorting={sorting}
              actions={actions}
            />
            {pagination ? (
              <Column style={{ paddingLeft: '40px' }}>
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
              </Column>
            ) : (
              <></>
            )}
          </Column>
        </Columns>
      )
    } else {
      return <p>error</p>
    }
  }
  return <>No data</>
}
