import React from 'react'
import { useFilters, useSortBy, useTable, useTableState } from 'react-table'
import { Filters } from './Filters'
import { ReactTableProps } from './models'
import { generateReactTableData } from './ReactTableData'

export function FilterData<D extends {}>({
  tableData,
  filterOption,
  component: Component,
}: Pick<ReactTableProps<D>, 'tableData' | 'filterOption'> & {
  readonly component: React.FC<{ readonly data: readonly any[] }>
}) {
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
    const data = reactTableData.rows.map(el => el.values)
    return (
      <>
        <Filters {...reactTableData} />
        <Component data={data} />
      </>
    )
  }
  return <>No data</>
}
