import { camelCaseToPhrase } from 'technoidentity-utils'
import { FilterOptions, ReactTableColumnValues } from './models'
import { DefaultColumnFilter, SelectColumnFilter } from './ReactTableFilters'
interface FilterProps<D> {
  readonly headers: ReadonlyArray<string | keyof D>
  readonly index: number
  readonly filterOption?: ReadonlyArray<FilterOptions>
}

interface TableDataProps<D> {
  readonly tableData: ReadonlyArray<D>
  readonly headerNames?: ReadonlyArray<keyof D>
  readonly filterOption?: ReadonlyArray<FilterOptions>
  readonly headerLabels?: ReadonlyArray<string>
}

function getFilter<D>({ headers, index, filterOption }: FilterProps<D>) {
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
  tableData,
  headerNames,
  filterOption,
}: TableDataProps<D>) {
  const [first] = tableData
  const headers = first ? Object.keys(first) : []
  const headerNamesWithAction = headerNames ? [...headerNames, 'actions'] : []
  const headerData =
    headerNamesWithAction.length > 0
      ? headerNamesWithAction.map((headerName, index: number) => ({
          Header: camelCaseToPhrase(headerName as string),
          accessor: headerName,
          Filter: getFilter<D>({
            headers: headerNamesWithAction,
            index,
            filterOption,
          }),
        }))
      : headers.map((headerName, index) => ({
          Header: camelCaseToPhrase(headerName),
          accessor: headerName,
          Filter: getFilter({
            headers,
            index,
            filterOption,
          }),
        }))

  const columns: Array<ReactTableColumnValues<D>> = [
    {
      Header: 'Table Information',
      columns: ([headerData] && [...headerData]) || [],
    },
  ]

  return { columns: columns as [] }
}