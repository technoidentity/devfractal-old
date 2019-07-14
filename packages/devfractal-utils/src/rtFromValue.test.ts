import { today } from './common'
import { rtFromValue } from './rtFromValue'

// tslint:disable no-null-keyword

it('rtFromValue', () => {
  const value = {
    number: 0.5,
    integer: 10,
    string: 'hello',
    boolean: true,
    date: today(),
    null: null,
    array: [1, 3, 4],
    anyArray: [],
    object: { x: 1, y: 2, z: { x: 'hello', y: ['world', 'universe'] } },
  }

  rtFromValue(value)(value)
  // expect(rtFromValue(value).is(value)).toBeTruthy()
})
