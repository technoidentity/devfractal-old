import React from 'react'

export const DefaultColumnFilter = ({
  column: { filterValue, preFilteredRows, setFilter },
}: any) => {
  const count = preFilteredRows && preFilteredRows.length
  return (
    <input
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined)
      }}
      placeholder={`Search ${count} records...`}
    />
  )
}

interface ColumnFilterProps {
  readonly column: SelectColumnFilterProps
}

interface SelectColumnFilterProps {
  readonly filterValue: string
  readonly id: string
  // tslint:disable-next-line:readonly-array
  readonly preFilteredRows: []
  setFilter(val: string): any
}

export const SelectColumnFilter = ({
  column: { filterValue, setFilter, preFilteredRows, id },
}: ColumnFilterProps) => {
  const options: ReadonlyArray<any> = React.useMemo(() => {
    const options = new Set<ReadonlyArray<any>>()
    // tslint:disable-next-line:no-unused-expression
    preFilteredRows &&
      preFilteredRows.forEach((row: any) => {
        options.add(row.values[id])
      })
    return Array.from(options)
  }, [id, preFilteredRows])
  return (
    <select
      value={filterValue}
      onChange={e => {
        setFilter(e.target.value)
      }}
    >
      <option value="">All</option>
      {options &&
        options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
    </select>
  )
}
