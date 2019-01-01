import { format } from 'date-fns'
import React from 'react'
import { Table, TableBody, TableHead, Td, Tr } from '../devfractal'
import { CheckBox, Input } from '../devfractal'

interface Todo {
  readonly id: number
  readonly title: string
  readonly description: string
  readonly time: Date
  readonly done: boolean
}

type TodoList = ReadonlyArray<Todo>

const TodoItem: React.SFC<Todo> = ({ id, title, description, time, done }) => (
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

const TodoListView: React.SFC<TodoListViewProps> = ({ todoList }) => (
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

const todoList: ReadonlyArray<Todo> = [
  {
    id: 1,
    title: 'bring milk',
    description: 'I love tea!',
    time: new Date(),
    done: true,
  },
  {
    id: 2,
    title: 'go for a walk',
    description: 'need to keep fit',
    time: new Date(),
    done: false,
  },
  {
    id: 3,
    title: 'read news',
    description: 'I really lack general knowledge',
    time: new Date(),
    done: false,
  },
]

export const Todo: React.SFC = () => <TodoListView todoList={todoList} />
