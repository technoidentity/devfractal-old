import { Either } from 'fp-ts/lib/Either'
import { Errors } from 'io-ts'
import { assert, Number } from 'tcomb'
import { rejected, Repository, toPromise } from '../devfractal'
import { fakeTodoList } from './fakeData'
import { Todo, TodoListValue, TodoValue } from './types'

// tslint:disable-next-line:readonly-array
const staticTodoList: Todo[] = fakeTodoList(5)

// tslint:disable-next-line:no-let
let id: number = 1000

export const InMemoryAPI: Repository<Todo> = {
  all: async () => toPromise(TodoListValue.decode(staticTodoList)),

  one: async id => {
    return toPromise(TodoValue.decode(staticTodoList.find(t => t.id === +id)))
  },

  create: async value => {
    const todo: Either<Errors, Todo> = TodoValue.decode({ id, ...value })

    if (todo.isRight()) {
      // tslint:disable-next-line: no-array-mutation
      staticTodoList.push(todo.value)
      return todo.value
    }
    ++id
    return rejected(todo)
  },

  remove: async id => {
    assert(Number.is(id))

    const i: number = staticTodoList.findIndex(t => id === t.id)
    if (i === -1) {
      return rejected(`no todo with id: ${id}`)
    }

    const todo: Todo = staticTodoList[i]
    // tslint:disable-next-line: no-array-mutation
    staticTodoList.splice(i, 1)
    return todo
  },
}
