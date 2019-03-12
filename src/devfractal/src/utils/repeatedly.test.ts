import { repeatedly } from './common'

it('repeatedly', () => {
  const alwaysOne = () => 1

  expect(repeatedly(0, alwaysOne)).toEqual([])
  expect(repeatedly(5, alwaysOne)).toEqual([1, 1, 1, 1, 1])

  let x = 1
  const keepIncrementing = () => x++

  expect(repeatedly(0, keepIncrementing)).toEqual([])
  expect(repeatedly(5, keepIncrementing)).toEqual([1, 2, 3, 4, 5])
})
