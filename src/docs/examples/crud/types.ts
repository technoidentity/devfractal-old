import {
  boolean,
  number,
  readonly,
  readonlyArray,
  string,
  type,
  TypeOf,
} from 'io-ts'

// tslint:disable typedef

export const TodoValue = readonly(
  type({
    id: number,
    title: string,
    done: boolean,
  }),
)

export const TodoListValue = readonlyArray(TodoValue)

export type Todo = TypeOf<typeof TodoValue>

export type TodoList = TypeOf<typeof TodoListValue>
