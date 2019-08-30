import { Repository } from 'devfractal-crud'
import { assert, Number } from 'tcomb'
import { Either, isRight } from 'technoidentity-spec'
import t from 'technoidentity-spec'
import { rejected, toPromise } from 'technoidentity-utils'
import { fakeTodoList } from './fakeTodoList'
import { Todo, TodoListRT, TodoRT } from './types'

// tslint:disable no-let
let staticTodoList: ReadonlyArray<Todo> = fakeTodoList(5)
let nextID: number = 1000
// tslint:enable no-let

export const inMemoryAPI: Repository<Todo, 'id'> = {
  all: async () => toPromise(TodoListRT.decode(staticTodoList)),

  one: async id =>
    toPromise(TodoRT.decode(staticTodoList.find(t => t.id === +id))),

  create: async value => {
    const todo: Either<t.Errors, Todo> = TodoRT.decode({
      id: nextID,
      ...value,
    })

    if (isRight(todo)) {
      staticTodoList = [...staticTodoList, todo.right]
      return todo.right
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
