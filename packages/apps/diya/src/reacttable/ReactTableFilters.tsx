import React from 'react'
import { Row } from 'react-table'
import { ColumnFilterProps } from './models'

export const DefaultColumnFilter = ({
  column: { filterValue, preFilteredRows, setFilter },
}: ColumnFilterProps) => {
  const count = preFilteredRows && preFilteredRows.length
  return (
    <input
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value)
      }}
      placeholder={`Search ${count} records...`}
    />
  )
}

export const SelectColumnFilter = ({
  column: { filterValue, setFilter, preFilteredRows, id },
}: ColumnFilterProps) => {
  const options = React.useMemo(() => {
    const options = new Set<string[]>()
    preFilteredRows.forEach((row: Row) => {
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
