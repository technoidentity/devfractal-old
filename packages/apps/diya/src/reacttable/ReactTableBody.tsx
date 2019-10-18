import React from 'react'
import { Cell, Row } from 'react-table'
import { TableBody, Td, Tr } from 'technoidentity-devfractal'
import { TableBodyProps } from './models'

export const ReactTableBody: React.FC<TableBodyProps> = ({
  page,
  prepareRow,
}) => {
  return (
    <TableBody>
      {page.map((row: Row, i: number) => {
        return (
          prepareRow(row) || (
            <Tr key={i} {...row.getRowProps()}>
              {row.cells.map((cell: Cell, i: number) => {
                return (
                  <Td key={i} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </Td>
                )
              })}
            </Tr>
          )
        )
      })}
    </TableBody>
  )
}
