import Chance from 'chance'
import tcomb, { assert } from 'tcomb'
import { range } from 'technoidentity-utils'
import { Todo, TodoList } from './types'

const chance: Chance.Chance = new Chance()

export const fakeTodo: () => Todo = () => ({
  id: chance.integer({ min: 1000, max: 10000 }),
  title: chance.sentence({ words: chance.integer({ min: 3, max: 8 }) }),
  done: chance.bool(),
})

export const fakeTodoList: (n: number) => TodoList = n => {
  assert(tcomb.Integer.is(n) && n >= 0)

  const result: Todo[] = []
  // tslint:disable no-array-mutation
  range(n).forEach(_ => result.push(fakeTodo()))

  return result
}
