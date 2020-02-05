import { rest } from '@stp/core'
import { boolean, number, string, TypeOf } from '@stp/utils'
import { ISODate, obj } from '@stp/utils'

export const Todo = obj(
  { id: number },
  { title: string, scheduled: ISODate, done: boolean },
)

export type Todo = TypeOf<typeof Todo>

export const todoAPI = rest(Todo, 'id', 'todos', {
  baseURL: 'http://localhost:3000',
})
