import { format } from 'date-fns'
import React from 'react'
import { withRouter } from 'react-router'
import {
  Button,
  ButtonLink,
  CheckBox,
  Field,
  Table,
  TableBody,
  TableHead,
  Td,
  Th,
  Tr,
} from 'technoidentity-devfractal'
import { boolean, capitalize, date } from 'technoidentity-utils'
import { Todo } from './common'

const Actions = withRouter(({ history, editTo }: any) => {
  return (
    <Field groupModifier="grouped-centered">
      <Button variant="warning" onClick={() => history.push(editTo)}>
        Edit
      </Button>
      <Button variant="danger">Del</Button>
    </Field>
  )
})

export interface TodoTableProps {
  readonly data: readonly Todo[]
}

export const TodoTable: React.FC<TodoTableProps> = ({ data }) => {
  const headers = ['title', 'scheduled', 'done']

  return (
    <>
      <ButtonLink variant="primary" to="/todos/new">
        Add Todo
      </ButtonLink>

      <Table fullWidth>
        <TableHead>
          <Tr>
            {headers.map(h => (
              <Th key={h}>{capitalize(h)}</Th>
            ))}
            <Th>Actions</Th>
          </Tr>
        </TableHead>

        <TableBody>
          {data.map((obj, i) => (
            <Tr key={i}>
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
              <Td>
                <Actions editTo={`/todos/${obj.id}/edit`} />
              </Td>
            </Tr>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
