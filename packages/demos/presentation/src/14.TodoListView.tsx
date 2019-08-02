import { format } from 'date-fns'
import {
  CheckBox,
  Table,
  TableBody,
  TableHead,
  Td,
  Th,
  Tr,
} from 'devfractal-ui-core'
import React from 'react'
import { Todo } from './11.todoAPI'

export const TodoItem: React.FC<Todo> = ({ id, title, scheduled, done }) => (
  <Tr>
    <Td>{id}</Td>
    <Td>{title}</Td>
    <Td>{format(scheduled, 'YYYY/MM/DD')}</Td>
    <Td>
      <CheckBox checked={done} readOnly />
    </Td>
  </Tr>
)

export interface TodoListViewProps {
  readonly todoList: ReadonlyArray<Todo>
}

export const TodoListView: React.FC<TodoListViewProps> = ({
  todoList: todoListProps,
}) => (
  <Table>
    <TableHead>
      <Tr>
        <Th>Id</Th>
        <Th>Title</Th>
        <Th>Scheduled</Th>
        <Th>Done</Th>
      </Tr>
    </TableHead>
    <TableBody>
      {todoListProps.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          scheduled={todo.scheduled}
          done={todo.done}
        />
      ))}
    </TableBody>
  </Table>
)
