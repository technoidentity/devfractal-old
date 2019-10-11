import React from 'react'
import { Cell, Row } from 'react-table'
import { TableBodyProps } from './models'

export const ReactTableBody: React.FC<TableBodyProps> = ({
  page,
  prepareRow,
}) => {
  return (
    <tbody>
      {page.map(
        (row: Row, i: number) =>
          prepareRow(row) || (
            <tr key={i} {...row.getRowProps()}>
              {row.cells.map((cell: Cell, i: number) => {
                return (
                  <td key={i} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          ),
      )}
    </tbody>
  )
}
