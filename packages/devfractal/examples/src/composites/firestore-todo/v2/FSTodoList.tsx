// tslint:disable typedef
import { ButtonLink } from 'devfractal-crud'
import { useHistory } from 'devfractal-router'
import { Get } from 'devfractal-ui-api'
import {
  ButtonsGroup,
  component,
  Table,
  TableBody,
  TableHead,
  Th,
  Tr,
} from 'devfractal-ui-core'
import React from 'react'
import { fn, readonlyArray, req } from 'technoidentity-utils'
import { FSTodo, fsTodoAPI } from '../common'
import { FSTodoItem } from './FSTodoItem'

export const FSTodoListViewProps = req({
  todoList: readonlyArray(FSTodo),
  onEdit: fn<(id: string) => void>(),
  onDelete: fn<(id: string) => void>(),
})

export const FSTodoListView = component(
  FSTodoListViewProps,
  ({ todoList, onEdit, onDelete }) => (
    <>
      <ButtonsGroup alignment="right">
        <ButtonLink to="/todos/new" variant="primary">
          Add
        </ButtonLink>
      </ButtonsGroup>

      <Table fullWidth>
        <TableHead>
          <Tr>
            <Th>ID</Th>
            <Th>Title</Th>
            <Th>Done</Th>
            <Th>Actions</Th>
          </Tr>
        </TableHead>
        <TableBody>
          {todoList.map(todo => (
            <FSTodoItem
              todo={todo}
              key={todo.id}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </TableBody>
      </Table>
    </>
  ),
)

export const FSTodoList: React.FC = () => {
  const { push } = useHistory()

  const handleEdit: (id: string) => void = (id: string) => {
    push(`/todos/${id}/edit`)
  }

  return (
    <Get asyncFn={fsTodoAPI.many}>
      {(data, fetchAgain) => (
        <FSTodoListView
          todoList={data}
          onEdit={handleEdit}
          onDelete={async id => {
            await fsTodoAPI.del(id)
            fetchAgain()
          }}
        />
      )}
    </Get>
  )
}
