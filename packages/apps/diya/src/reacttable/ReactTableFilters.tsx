import { Column, Input, Select } from 'devfractal-ui-core'
import React from 'react'
import { Row } from 'react-table'
import { ColumnFilterProps } from './models'

export const DefaultColumnFilter = ({
  column: { filterValue, setFilter, Header },
}: ColumnFilterProps) => {
  return (
    <Column>
      <Input
        value={filterValue || ''}
        onChange={e => {
          setFilter(e.target.value)
        }}
        placeholder={`Search by ${Header}`}
      />
    </Column>
  )
}

export const SelectColumnFilter = ({
  column: { filterValue, setFilter, preFilteredRows, id, Header },
}: ColumnFilterProps) => {
  const options = React.useMemo(() => {
    const options = new Set<string[]>()
    // tslint:disable-next-line:no-unused-expression
    preFilteredRows &&
      preFilteredRows.forEach((row: Row) => {
        options.add(row.values[id])
      })
    return Array.from(options)
  }, [id, preFilteredRows])
  return (
    <Column>
      <Select
        value={filterValue}
        onChange={e => {
          setFilter(e.target.value)
        }}
      >
        <option value="">{`Filter by ${Header}`}</option>
        {options &&
          options.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
      </Select>
    </Column>
  )
}

export const SelectDateFilter = ({
  column: { setFilter, Header },
}: ColumnFilterProps) => {
  return (
    <Column>
      <Input
        type="date"
        placeholder={`Filter by ${Header}`}
        onChange={e => {
          const date = e.target.value.replace(/-/g, '/')
          setFilter((date as unknown) as string)
        }}
      />
    </Column>
  )
}
