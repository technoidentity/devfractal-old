import React from 'react'
import { Button, CheckBox, Td, Tr } from 'technoidentity-devfractal'
import { FSTodo } from './todoAPI'

interface FSTodoItemProps {
  readonly todo: FSTodo
  onDeleteTodo(id: string): void
}

export const FSTodoItem: React.FC<FSTodoItemProps> = ({
  todo,
  onDeleteTodo,
}) => {
  return (
    <Tr>
      <Td>{todo.id}</Td>
      <Td>{todo.title}</Td>
      <Td>
        <CheckBox checked={todo.done} readOnly />
      </Td>
      <Td>
        <Button variant="danger" onClick={() => onDeleteTodo(todo.id)}>
          Delete
        </Button>
      </Td>
    </Tr>
  )
}
