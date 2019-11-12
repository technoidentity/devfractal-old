import React from 'react'
import { useFilters, useSortBy, useTable, useTableState } from 'react-table'
import { Filters } from './Filters'
import { ReactTableProps } from './models'
import { generateReactTableData } from './ReactTableData'

type FilterDataProps<D extends {}> = Pick<
  ReactTableProps<D>,
  'tableData' | 'filterOption'
> & { readonly component: React.FC<{ readonly data: readonly D[] }> }

export function FilterData<D>({
  tableData,
  filterOption,
  component: Component,
}: FilterDataProps<D>) {
  const { columns } = generateReactTableData<D>({
    tableData,
    filterOption,
  })

  const tableState = useTableState()

  const reactTableData = useTable<D>(
    {
      columns,
      data: tableData,
      loading: true,
      state: tableState,
    },
    useFilters,
    useSortBy,
  )
  if (reactTableData) {
    const data: D[] = reactTableData.rows.map(el => el.original)
    return (
      <>
        <Filters {...reactTableData} />
        <Component data={data} />
      </>
    )
  }
  return <>No data</>
}
