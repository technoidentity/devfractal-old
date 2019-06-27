import * as t from 'io-ts'
import { range } from '../lib'
import { checked } from './checked'

// tslint:disable typedef
it('checked', () => {
  const checkedAdd = checked(
    t.tuple([t.number, t.number, t.number]),
    t.number,
    (x, y, z) => x + y + z,
  )

  expect(checkedAdd(100, 100, 100)).toEqual(300)
  expect(() => checkedAdd(100, '100' as any, 100)).toThrow()

  const checkedTimes = checked(
    t.tuple([t.string, t.number]),
    t.string,
    (s, n) => range(n).reduce((acc, _) => acc + s, ''),
  )

  expect(checkedTimes('hello', 3)).toEqual('hellohellohello')
  expect(() => checkedTimes(5 as any, 5)).toThrow()
  expect(() => checkedTimes('hello', '5' as any)).toThrow()
})
