import Chance from 'chance'
import { Props, ReadonlyC, TypeC, TypeOf } from 'io-ts'
import { assert, Integer } from 'tcomb'
import { Todo, TodoList } from './types'

// tslint:disable typedef readonly-array no-loop-statement no-object-mutation no-array-mutation

const chance: Chance.Chance = new Chance()

const fakeID: () => number = () => chance.integer({ min: 1000, max: 10000 })

const fakeTitle: () => string = () => chance.sentence({ min: 2, max: 4 })

const fakeDone: () => boolean = () => chance.bool()

export const fakeTodo: () => Todo = () => ({
  id: fakeID(),
  title: fakeTitle(),
  done: fakeDone(),
})

export const fakeTodoList: (n: number) => TodoList = n => {
  assert(Integer.is(n) && n >= 0)

  const result: Todo[] = []
  for (let i = 0; i < n; ++i) {
    result.push(fakeTodo())
  }
  return result
}

export const defaultOptions = {
  preferInt: true,
  integer: { min: 100, max: 1000 },
  sentence: { min: 2, max: 4 },
}
export const fakeFromType: <T extends Props>(
  typeValue: ReadonlyC<TypeC<T>>,
  options?: typeof defaultOptions,
) => TypeOf<typeof typeValue> = (typeValue, options = defaultOptions) => {
  const props = typeValue.type.props
  const value: any = {}

  const int = () => chance.integer(defaultOptions.integer)
  Object.keys(props).forEach(prop => {
    if (props[prop].name === 'number') {
      value[prop] = options.preferInt
        ? int()
        : chance.bool()
        ? chance.floating()
        : int()
    } else if (props[prop].name === 'string') {
      value[prop] = chance.sentence(defaultOptions.sentence)
    } else if (props[prop].name === 'boolean') {
      value[prop] = chance.bool()
    } else {
      throw new Error(`Unsupported type ${props[prop]}`)
    }
  })

  return value
}
