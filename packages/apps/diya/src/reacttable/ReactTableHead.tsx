import React from 'react'
import { HeaderGroup } from 'react-table'
import { TableHeadProps } from './models'
import { ReactColumn } from './ReactColumn'
import { ReactSortingColumn } from './ReactSortingColumn'

export const ReactTableHead: React.FC<TableHeadProps> = ({
  headerGroups,
  sorting,
}) => {
  return (
    <thead>
      {headerGroups.map((headerGroup: HeaderGroup, index: number) => (
        <tr key={index} {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column, i) =>
            sorting ? (
              <ReactSortingColumn {...column} key={i} />
            ) : (
              <ReactColumn {...column} key={i} />
            ),
          )}
        </tr>
      ))}
    </thead>
  )
}
