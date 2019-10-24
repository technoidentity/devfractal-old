import React from 'react'
import { Cell, Row } from 'react-table'
import { TableBody, Td, Tr } from 'technoidentity-devfractal'
import { date } from 'technoidentity-utils'
import { TableBodyProps } from './models'
import { ReactTableActions } from './ReactTableActions'
import { formatDate } from './utils'
export function ReactTableBody<D extends { readonly id: string }>({
  page,
  prepareRow,
  actions,
}: TableBodyProps<D>) {
  return (
    <TableBody>
      {page.map((row: Row<D>, i: number) => {
        return (
          prepareRow(row) || (
            <Tr key={i} {...row.getRowProps()}>
              {row.cells.map((cell: Cell<D>, i: number) => {
                return (
                  <Td key={i} {...cell.getCellProps()}>
                    {cell.render('Cell').props.cell.value === 'actions' ? (
                      <>
                        {actions ? (
                          <ReactTableActions
                            onDelete={actions.onDelete}
                            // TODO: Property 'id' does not exist on type '{}'
                            id={row.original.id}
                            assignTo={actions.assignTo}
                            editTo={actions.editTo}
                          />
                        ) : (
                          <></>
                        )}
                      </>
                    ) : date.is(cell.render('Cell').props.cell.value) ? (
                      formatDate(cell.render('Cell').props.cell.value)
                    ) : (
                      cell.render('Cell')
                    )}
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
