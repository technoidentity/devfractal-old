import { format } from 'date-fns'
import React from 'react'
import { Table, TableBody, TableHead, Td, Tr } from '../../elements/Table'
import { CheckBox, Input } from '../../form'

interface Todo {
  readonly id: number
  readonly title: string
  readonly description: string
  readonly time: Date
  readonly done: boolean
}

type TodoList = ReadonlyArray<Todo>

export const TodoItem: React.SFC<Todo> = ({
  id,
  title,
  description,
  time,
  done,
}) => (
  <Tr>
    <Td>{id}</Td>
    <Td>{title}</Td>
    <Td>{description}</Td>
    <Td>
      <Input type="date" value={format(time, 'YYYY-MM-DD')} readOnly />
    </Td>
    <Td>
      <CheckBox readOnly checked={done} />
    </Td>
  </Tr>
)

interface TodoListViewProps {
  readonly todoList: TodoList
}

export const TodoListView: React.SFC<TodoListViewProps> = ({ todoList }) => (
  <Table>
    <TableHead>
      <Tr>
        <Td>Id</Td>
        <Td>Title</Td>
        <Td>Description</Td>
        <Td>Time</Td>
        <Td>Done</Td>
      </Tr>
    </TableHead>
    <TableBody>
      {todoList.map(item => (
        <TodoItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          time={item.time}
          done={item.done}
        />
      ))}
    </TableBody>
  </Table>
)

const todos: ReadonlyArray<Todo> = [
  {
    id: 1,
    title: 'helo',
    description: 'djfh',
    time: new Date(),
    done: true,
  },
  {
    id: 2,
    title: 'helo',
    description: 'djfh',
    time: new Date(),
    done: true,
  },
  {
    id: 3,
    title: 'helo',
    description: 'djfh',
    time: new Date(),
    done: true,
  },
]

export const TodoListApp: React.SFC = () => <TodoListView todoList={todos} />
