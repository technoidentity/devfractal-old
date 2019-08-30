import {
  boolean,
  number,
  readonly,
  readonlyArray,
  string,
  type,
  TypeOf,
} from 'technoidentity-spec'

// tslint:disable typedef
export const TodoRT = readonly(
  type({
    id: number,
    title: string,
    done: boolean,
  }),
)

export const TodoListRT = readonlyArray(TodoRT)

export type Todo = TypeOf<typeof TodoRT>

export type TodoList = TypeOf<typeof TodoListRT>
