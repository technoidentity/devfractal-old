import React from 'react'
import { FilterColumn } from './FilterColumn'
import { TableFilterHeadProps } from './models'

export const FilterHead: React.FC<TableFilterHeadProps> = ({
  headerGroups,
}) => {
  return (
    <thead>
      {headerGroups.map((headerGroup, i) => (
        <tr key={i} {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column, i) => (
            <th key={i} {...column.getHeaderProps()}>
              {column.Filter ? <FilterColumn {...column} /> : undefined}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  )
}
