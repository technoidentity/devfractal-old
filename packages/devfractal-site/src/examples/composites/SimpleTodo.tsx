import React from 'react'
import { SimpleTable, SimpleViewer } from 'technoidentity-devfractal'
import { SimpleAddTodo } from './AddTodo'

interface Todo {
  readonly id: number
  readonly title: string
  readonly done: boolean
}

const todoList: ReadonlyArray<Todo> = [
  {
    id: 1,
    title: 'bring milk',
    done: true,
  },
  {
    id: 2,
    title: 'go for a walk',
    done: false,
  },
  {
    id: 3,
    title: 'read news',
    done: false,
  },
]

export const SimpleTodo: React.FC = () => (
  <>
    <SimpleAddTodo />
    <SimpleViewer data={todoList[0]} />
    <SimpleTable headers={['id', 'title', 'done']} data={todoList} />
  </>
)