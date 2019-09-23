import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { Button, CheckBox, Icon, Td, Tr } from 'devfractal-ui-core'
import React from 'react'
import { FSTodo } from '../todoAPI'

interface FSTodoItemProps {
  readonly todo: FSTodo
  onEdit(id: String): void
}

export const FsTodoOne: React.FC<FSTodoItemProps> = ({ todo, onEdit }) => {
  return (
    <Tr>
      <Td>{todo.id}</Td>
      <Td>{todo.title}</Td>
      <Td>
        <CheckBox checked={todo.done} readOnly />
      </Td>
      <Td>
        <Button variant="info" onClick={() => onEdit(todo.id)}>
          <Icon icon={faEdit} />
        </Button>
      </Td>
    </Tr>
  )
}
