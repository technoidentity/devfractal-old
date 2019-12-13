import {
  EnhancedColumn,
  HeaderGroup,
  Row,
  TableInstance,
  UsePaginationValues,
} from 'react-table'

export interface FilterOptions {
  readonly columnName: string
  readonly filterType: 'select' | 'search' | 'date'
}
export interface ReactTableActionsProps {
  editTo?(id: string): string
  assignTo?(id: string): string
  onDelete?(id: string): void
  addTrip?(id: string): string
}
export interface ReactTableActionsValues extends ReactTableActionsProps {
  readonly id: string
  readonly vehicleId?: string
}

interface ReactSortingColumnValues {
  readonly actions?: ReactTableActionsProps
}
export type ReactColumnProps<D> = ReactSortingColumnValues & EnhancedColumn<D>
export interface ReactTableProps<D> {
  // disabled as react-table expects mutable array
  // tslint:disable-next-line:readonly-array
  readonly tableData: D[]
  readonly headerNames?: ReadonlyArray<keyof D | string>
  readonly sorting: boolean
  readonly filterOption?: ReadonlyArray<FilterOptions>
  readonly headerLabels?: any
  readonly pagination: boolean
  readonly actions?: ReactTableActionsProps
}
export interface TableFilterHeadProps<D> {
  readonly headerGroups: ReadonlyArray<HeaderGroup<D>>
}
export interface TableHeadProps<D> {
  readonly sorting: boolean
  readonly headerGroups: ReadonlyArray<HeaderGroup<D>>
  readonly actions?: ReactTableActionsProps
}
export interface TableBodyProps<D> {
  readonly page: ReadonlyArray<Row<D>>
  prepareRow(row: Row<D>): any
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
  readonly Filter?: any
  readonly filter?: any
}
interface SortingValues {
  readonly sorting: boolean
  readonly actions?: ReactTableActionsProps
}
export type TableProps<D extends { readonly id: string }> = TableInstance<D> &
  UsePaginationValues<D> &
  SortingValues
