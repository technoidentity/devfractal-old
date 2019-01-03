import React from 'react'
import { SimpleTable, SimpleViewer } from '../../../devfractal/simple'
// import { delay } from '../../../utils'
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

// const asyncTodoList: () => Promise<ReadonlyArray<Todo>> = async () => {
//   // tslint:disable-next-line: no-empty
//   // Route shouldn't change while delay, fix after presentation
//   // await delay(3000, () => {})
//   return Promise.resolve(todoList)
// }

// const rejectedTodoList: () => Promise<never> = async () => {
//   // tslint:disable-next-line: no-empty
//   await delay(3000, () => {})
//   return Promise.reject(new Error('no todos available right now!'))
// }

export const SimpleTodo: React.SFC = () => (
  <>
    <SimpleAddTodo />
    <SimpleViewer object={todoList[0]} />
    <SimpleTable headers={['id', 'title', 'done']} values={todoList} />
  </>
)
