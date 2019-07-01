import { Either } from 'fp-ts/lib/Either'
import t from 'io-ts'
import { assert, Number } from 'tcomb'
import { Repository } from 'technoidentity-devfractal'
import { eitherToPromise, rejected } from 'technoidentity-utils'
import { fakeTodoList } from './fakeTodoList'
import { Todo, TodoListRT, TodoRT } from './types'

// tslint:disable no-let
let staticTodoList: ReadonlyArray<Todo> = fakeTodoList(5)
let nextID: number = 1000
// tslint:enable no-let

export const inMemoryAPI: Repository<Todo, 'id'> = {
  all: async () => eitherToPromise(TodoListRT.decode(staticTodoList)),

  one: async id =>
    eitherToPromise(TodoRT.decode(staticTodoList.find(t => t.id === +id))),

  create: async value => {
    const todo: Either<t.Errors, Todo> = TodoRT.decode({
      id: nextID,
      ...value,
    })

    if (todo.isRight()) {
      staticTodoList = [...staticTodoList, todo.value]
      return todo.value
    }
    ++nextID
    return rejected(todo)
  },

  edit: async value => {
    const i: number = staticTodoList.findIndex(t => t.id === +value.id)
    if (i === -1) {
      return rejected(`no todo with id: ${nextID}`)
    }
    staticTodoList = [
      ...staticTodoList.slice(0, i),
      value,
      ...staticTodoList.slice(i + 1),
    ]
    return value
  },

  remove: async id => {
    assert(Number.is(id))

    const i: number = staticTodoList.findIndex(t => id === t.id)
    if (i === -1) {
      return rejected(`no todo with id: ${id}`)
    }

    const todo: Todo = staticTodoList[i]
    staticTodoList = [
      ...staticTodoList.slice(0, i),
      ...staticTodoList.slice(i + 1),
    ]
    return todo
  },
}
