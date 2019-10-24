import {
  EnhancedColumn,
  HeaderGroup,
  Row,
  TableInstance,
  UsePaginationValues,
} from 'react-table'

export interface FilterOptions {
  readonly columnName: string
  readonly filterType: 'select' | 'search'
}
export interface ReactTableActionsProps {
  editTo?(id: string): string
  assignTo?(id: string): string
  onDelete?(id: string): Promise<void>
}
export interface ReactTableActionsValues extends ReactTableActionsProps{
  readonly id: string
}

interface ReactSortingColumnValues {
  readonly actions?: ReactTableActionsProps
}
export type ReactColumnProps<D> = ReactSortingColumnValues & EnhancedColumn<D>
export interface ReactTableProps<D> {
  // tslint:disable-next-line:readonly-array
  readonly tableData: D[]
  readonly headerNames?: ReadonlyArray<keyof D | string>
  readonly sorting: boolean
  readonly filterOption?: ReadonlyArray<FilterOptions>
  readonly headerLabels?: ReadonlyArray<string>
  readonly pagination: boolean
  readonly actions?: ReactTableActionsProps
}
export interface TableFilterHeadProps {
  readonly headerGroups: readonly HeaderGroup[]
}
export interface TableHeadProps {
  readonly sorting: boolean
  readonly headerGroups: readonly HeaderGroup[]
  readonly actions?:ReactTableActionsProps
}
export interface TableBodyProps {
  readonly page: readonly Row[]
  prepareRow(row: Row): any
  readonly actions?: ReactTableActionsProps
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
  readonly Header: string
  readonly preFilteredRows?: readonly []
  setFilter(val: string): any
}
interface Columns<D> {
  readonly Header: string | keyof D
  readonly accessor: string | keyof D
  readonly Filter: any | undefined
}
interface SortingValues {
  readonly sorting: boolean
  readonly actions?: ReactTableActionsProps
}
export type TableProps = TableInstance &
  UsePaginationValues &
  SortingValues 
  