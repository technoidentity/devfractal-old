import { camelCaseToPhrase } from 'technoidentity-utils'
import { FilterOptions, ReactTableColumnValues } from './models'
import { DefaultColumnFilter, SelectColumnFilter } from './ReactTableFilters'
// import {formatDate} from '../common'
interface FilterProps {
  readonly headers: ReadonlyArray<string>
  readonly index: number
  readonly filterOption?: ReadonlyArray<FilterOptions>
}

interface TableDataProps<D> {
  readonly tableData: readonly D[]
  readonly headerNames?: ReadonlyArray<keyof D>
  readonly filterOption?: ReadonlyArray<FilterOptions>
  readonly headerLabels?: ReadonlyArray<string>
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
  tableData,
  headerNames,
  filterOption,
}: TableDataProps<D>) {
  const data =
    tableData && tableData.length > 0
      ? headerNames
        ? tableData.map(val =>
            // tslint:disable-next-line: no-inferred-empty-object-type
            headerNames.reduce((acc, h) => ({ ...acc, [h]: val[h] }), {}),
          )
        : tableData
      : []
  const [first] = data
  const headers = first ? Object.keys(first) : []
  const headerData = headerNames
    ? headerNames.map((headerName, index: number) => ({
        Header: camelCaseToPhrase(headerName as string),
        accessor: headers[index],
        Filter: getFilter({
          headers,
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
      columns: (headerData && [...headerData]) || [],
    },
  ]
  return columns as []
}
