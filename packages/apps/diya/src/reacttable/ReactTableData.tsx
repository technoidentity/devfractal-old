import { FilterOptions, ReactTableColumnValues } from './models'
import { DefaultColumnFilter, SelectColumnFilter } from './ReactTableFilters'
interface FilterProps {
  readonly headers: ReadonlyArray<string>
  readonly index: number
  readonly filterOption?: ReadonlyArray<FilterOptions>
}

interface TableDataProps<D> {
  readonly data: readonly D[]
  readonly headerNames?: ReadonlyArray<string>
  readonly filterOption?: ReadonlyArray<FilterOptions>
}

const getFilter = ({ headers, index, filterOption }: FilterProps) => {
  const filter =
    filterOption &&
    filterOption.map((filterOption: FilterOptions) =>
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

export function generateReactTableData<D>({
  data,
  headerNames,
  filterOption,
}: TableDataProps<D>) {
  const [first] = data
  const headers: ReadonlyArray<string> = first ? Object.keys(first) : []

  const headerData = headerNames
    ? headerNames.map((headerName: string, index: number) => ({
        Header: headerName,
        accessor: headers[index],
        Filter: getFilter({ headers, index, filterOption }),
      }))
    : headers.map((headerName: string, index) => ({
        Header: headerName,
        accessor: headerName,
        Filter: getFilter({ headers, index, filterOption }),
      }))

  const columns: ReactTableColumnValues[] = [
    {
      Header: 'Table Information',
      columns: (headerData && [...headerData]) || [],
    },
  ]
  return columns as []
}
