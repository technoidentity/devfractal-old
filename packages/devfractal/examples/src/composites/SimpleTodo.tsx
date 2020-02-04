import { Viewer } from '@stp/crud'
import { SimpleTable } from '@stp/simple'
import React from 'react'
import { SimpleAddTodo } from './AddTodo'

interface Todo {
  readonly id: number
  readonly title: string
  readonly done: boolean
}

const todoList: readonly Todo[] = [
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
    <Viewer data={todoList[0]} />
    <SimpleTable select={['id', 'title', 'done']} data={todoList} />
  </>
)
