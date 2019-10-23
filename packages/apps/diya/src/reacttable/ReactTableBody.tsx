import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Cell, Row } from 'react-table'
import {
  ButtonLink,
  Icon,
  Link,
  links,
  TableBody,
  Td,
  Tr,
} from 'technoidentity-devfractal'
import { TableBodyProps } from './models'
const driverLinks = links('drivers')

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
                    {cell.render('Cell').props.cell.value === 'actions' ? (
                      <>
                        <Link to={driverLinks.edit(row.original.id)}>
                          <Icon icon={faEdit} />
                        </Link>
                        <a
                          href="#!"
                          onClick={evt => {
                            evt.preventDefault()
                          }}
                        >
                          <Icon icon={faTrash} />
                        </a>
                        <ButtonLink
                          to={`/assignDriver/${row.original.id}`}
                          size="small"
                          variant="info"
                        >
                          Assign
                        </ButtonLink>
                      </>
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
