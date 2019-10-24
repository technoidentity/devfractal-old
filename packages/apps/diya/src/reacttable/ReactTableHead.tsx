import React from 'react'
import { HeaderGroup } from 'react-table'
import { TableHead, Tr } from 'technoidentity-devfractal'
import { TableHeadProps } from './models'
import { ReactColumn } from './ReactColumn'
import { ReactSortingColumn } from './ReactSortingColumn'

export function ReactTableHead<D>({
  headerGroups,
  sorting,
  actions,
}: TableHeadProps<D>) {
  return (
    <TableHead>
      {headerGroups.map((headerGroup: HeaderGroup<D>, index: number) => (
        <Tr key={index} {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column, i) =>
            sorting ? (
              <ReactSortingColumn {...column} key={i} actions={actions} />
            ) : (
              <ReactColumn {...column} key={i} actions={actions} />
            ),
          )}
        </Tr>
      ))}
    </TableHead>
  )
}
