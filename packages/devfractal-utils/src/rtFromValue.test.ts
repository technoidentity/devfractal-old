import { today } from './common'
import { rtFromValue } from './rtFromValue'

// tslint:disable no-null-keyword typedef

it.only('rtFromValue', () => {
  const value = {
    number: 0.5,
    integer: 10,
    string: 'hello',
    boolean: true,
    date: today(),
    null: null,
    array: [1, 3, 4],
    anyArray: [],
    object: { a: { b: 100 }, c: ['world'] },
  }

  expect(rtFromValue(value)(value)).toBeTruthy()
})
