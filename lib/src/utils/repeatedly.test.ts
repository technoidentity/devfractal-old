import { repeatedly } from 'utils'

it('repeatedly', () => {
  const alwaysOne: () => number = () => 1

  expect(repeatedly(0, alwaysOne)).toEqual([])
  expect(repeatedly(5, alwaysOne)).toEqual([1, 1, 1, 1, 1])

  let x: number = 1
  const keepIncrementing: () => number = () => x++

  expect(repeatedly(0, keepIncrementing)).toEqual([])
  expect(repeatedly(5, keepIncrementing)).toEqual([1, 2, 3, 4, 5])
})
