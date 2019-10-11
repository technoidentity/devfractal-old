import {
  HeaderGroup,
  Row,
  TableInstance,
  TableOptions,
  UsePaginationValues,
} from 'react-table'

export interface FilterOptions {
  readonly columnName: string
  readonly filterType: 'select' | 'search'
}

export interface ReactTableValues {
  readonly headerNames?: ReadonlyArray<string>
  readonly sorting: boolean
  readonly filterOption?: ReadonlyArray<FilterOptions>
  readonly pagination: boolean
}
export interface TableFilterHeadProps {
  readonly headerGroups: readonly HeaderGroup[]
}
export interface TableHeadProps {
  readonly sorting: boolean
  readonly headerGroups: readonly HeaderGroup[]
}
export interface TableBodyProps {
  readonly page: readonly Row[]
  prepareRow(row: Row): any
}
export interface PaginationProps {
  readonly canPreviousPage: boolean
  readonly canNextPage: boolean
  readonly pageOptions: ReadonlyArray<number>
  readonly pageCount: number
  readonly pageIndex: number
  readonly pageSize: number
  previousPage(): number
  gotoPage(page: number): number
  nextPage(): number
  setPageSize(size: number): number
}
export interface ReactTableColumnValues {
  readonly Header: string
  readonly columns: readonly Columns[]
}
export interface ColumnFilterProps {
  readonly column: SelectColumnFilterProps
}
interface SelectColumnFilterProps {
  readonly filterValue: string
  readonly id: string
  readonly preFilteredRows: readonly []
  setFilter(val: string): any
}
interface Columns {
  readonly Header: string
  readonly accessor: string
  readonly Filter: any | undefined
}
interface SortingValues {
  readonly sorting: boolean
}
export type TableProps = TableInstance & UsePaginationValues & SortingValues
export type ReactTableProps = Pick<TableOptions, 'data'> & ReactTableValues
