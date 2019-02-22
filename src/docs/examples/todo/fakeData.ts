import Chance from 'chance'
import { assert, Integer } from 'tcomb'
import { Todo } from './types'

// tslint:disable typedef readonly-array no-loop-statement no-array-mutation

const chance: Chance.Chance = new Chance()

const fakeID: () => number = () => chance.integer({ min: 1000, max: 10000 })

const fakeTitle: () => string = () => chance.sentence({ min: 2, max: 6 })

const fakeDone: () => boolean = () => chance.bool()

export const fakeTodo: () => Todo = () => ({
  id: fakeID(),
  title: fakeTitle(),
  done: fakeDone(),
})

export const fakeTodoList: (n: number) => Todo[] = n => {
  assert(Integer.is(n) && n >= 0)

  const result: Todo[] = []
  for (let i = 0; i < n; ++i) {
    result.push(fakeTodo())
  }
  return result
}
