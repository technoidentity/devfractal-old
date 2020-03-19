import { rest } from 'technoidentity-core'
import {
  boolean,
  ISODate,
  NumID,
  obj,
  string,
  TypeOf,
} from 'technoidentity-utils'

export const Todo = obj(
  { id: NumID },
  { title: string, scheduled: ISODate, done: boolean },
)

export type Todo = TypeOf<typeof Todo>

export const todoAPI = rest(Todo, ({ id }) => `${id}`, 'todos', {
  baseURL: 'http://localhost:3000',
})
