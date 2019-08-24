import { format } from 'date-fns'
import { boolean } from 'io-ts'
import { date } from 'io-ts-types/lib/date'
import React from 'react'
import {
  CheckBox,
  Table,
  TableBody,
  TableHead,
  Td,
  Th,
  Tr,
  useHistory,
} from 'technoidentity-devfractal'
import { capitalize } from 'technoidentity-utils'
import { Todo } from './common'
import { CreateLink } from './CreateLink'

export interface TodoTableProps {
  readonly data: readonly Todo[]
}

export const TodoTable: React.FC<TodoTableProps> = ({ data }) => {
  const { push } = useHistory()
  const headers = ['title', 'scheduled', 'done']

  return (
    <>
      <CreateLink createTo="/todos/new">Add Todo</CreateLink>
      <Table fullWidth>
        <TableHead>
          <Tr>
            {headers.map(h => (
              <Th key={h}>{capitalize(h)}</Th>
            ))}
          </Tr>
        </TableHead>
        <TableBody>
          {data.map((obj, i) => (
            <Tr onClick={() => push(`/todos/${obj.id}/edit`)} key={i}>
              {headers.map(k => (
                <Td key={k}>
                  {date.is(obj[k]) ? (
                    format(obj[k], 'yyyy-mm-dd')
                  ) : boolean.is(obj[k]) ? (
                    <CheckBox checked={obj[k]} readOnly />
                  ) : (
                    obj[k]
                  )}
                </Td>
              ))}
            </Tr>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
