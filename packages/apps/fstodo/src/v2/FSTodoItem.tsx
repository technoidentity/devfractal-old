import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Button, CheckBox, Field, Icon, Td, Tr } from 'technoidentity-ui'
import { FSTodo } from '../common'

interface FSTodoItemProps {
  readonly todo: FSTodo
  onEdit(id: String): void
  onDelete(id: String): void
}

export const FSTodoItem: React.FC<FSTodoItemProps> = ({
  todo,
  onEdit,
  onDelete,
}) => {
  return (
    <Tr>
      <Td>{todo.id}</Td>
      <Td>{todo.title}</Td>
      <Td>
        <CheckBox checked={todo.done} readOnly />
      </Td>
      <Td>
        <Field grouped>
          <Button variant="info" onClick={() => onEdit(todo.id)}>
            <Icon icon={faEdit} />
          </Button>
          <Button variant="info" onClick={() => onDelete(todo.id)}>
            <Icon icon={faTrash} />
          </Button>
        </Field>
      </Td>
    </Tr>
  )
}
