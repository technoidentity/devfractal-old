import { camelCaseToPhrase } from 'technoidentity-utils'
import { FilterOptions, ReactTableColumnValues } from './models'
import {
  DefaultColumnFilter,
  SelectColumnFilter,
  SelectDateFilter,
} from './ReactTableFilters'
import { fuzzyTextFilterFn } from './utils'

interface FilterProps<D> {
  readonly headers: ReadonlyArray<string | keyof D>
  readonly index: number
  readonly filterOption?: ReadonlyArray<FilterOptions>
}

interface TableDataProps<D> {
  readonly tableData: ReadonlyArray<D>
  readonly headerNames?: ReadonlyArray<keyof D | string>
  readonly filterOption?: ReadonlyArray<FilterOptions>
  readonly headerLabels?: { readonly [index: string]: string }
}

function getFilter<D>({ headers, index, filterOption }: FilterProps<D>) {
  const filter =
    filterOption &&
    filterOption.map((filterOption: FilterOptions) =>
      filterOption.columnName === headers[index]
        ? filterOption.filterType === 'search'
          ? { Filter: DefaultColumnFilter }
          : filterOption.filterType === 'select'
          ? { Filter: SelectColumnFilter, filter: fuzzyTextFilterFn }
          : filterOption.filterType === 'date'
          ? { Filter: SelectDateFilter }
          : undefined
        : undefined,
    )
  return filter && filter.filter(it => it !== undefined)[0]
}

export function generateReactTableData<D>({
  tableData,
  headerNames,
  filterOption,
  headerLabels,
}: TableDataProps<D>) {
  const [first] = tableData
  const headers = first ? Object.keys(first) : []
  const headerNamesWithAction = headerNames ? [...headerNames, 'actions'] : []
  const headerData =
    headerNamesWithAction.length > 0
      ? headerNamesWithAction.map((headerName, index: number) => {
          return {
            Header:
              headerLabels && headerLabels[headerName as string]
                ? headerLabels[headerName as string]
                : camelCaseToPhrase(headerName as string),
            accessor: headerName,
            ...getFilter<D>({
              headers: headerNamesWithAction,
              index,
              filterOption,
            }),
          }
        })
      : headers.map((headerName, index) => ({
          Header: camelCaseToPhrase(headerName),
          accessor: headerName,
          ...getFilter({
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
