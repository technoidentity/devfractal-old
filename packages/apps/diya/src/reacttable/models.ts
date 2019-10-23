import {
  HeaderGroup,
  Row,
  TableInstance,
  UsePaginationValues,
} from 'react-table'

export interface FilterOptions {
  readonly columnName: string
  readonly filterType: 'select' | 'search'
}

export interface ReactTableProps<D> {
  // tslint:disable-next-line:readonly-array
  readonly tableData: D[]
  readonly headerNames?: ReadonlyArray<keyof D>
  readonly sorting: boolean
  readonly filterOption?: ReadonlyArray<FilterOptions>
  readonly headerLabels?: ReadonlyArray<string>
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
export interface ReactTableColumnValues<D> {
  readonly Header: string
  // tslint:disable-next-line:readonly-array
  readonly columns: Array<Columns<D>>
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
interface Columns<D> {
  readonly Header: string | keyof D
  readonly accessor: string | keyof D
  readonly Filter: any | undefined
}
interface SortingValues {
  readonly sorting: boolean
}
export type TableProps = TableInstance & UsePaginationValues & SortingValues
