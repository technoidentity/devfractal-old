import { range, repeatedly } from './common'

it('tests for range', () => {
  expect(range(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  expect(range(1, 8)).toEqual([1, 2, 3, 4, 5, 6, 7])
  expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9])
  expect(range(0, 10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  expect(range(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  expect(range(0, 1)).toEqual([0])
  expect(range(2, 5)).toEqual([2, 3, 4])
  expect(range(0, -2)).toEqual([])
  expect(range(5, 10, 2)).toEqual([5, 7, 9])
  expect(range(0, 30, 5)).toEqual([0, 5, 10, 15, 20, 25])
  expect(range(0, 5, 1)).toEqual([0, 1, 2, 3, 4])
  expect(range(0, -3, 1)).toEqual([])
})

it('repeatedly', () => {
  const alwaysOne: () => number = () => 1

  expect(repeatedly(0, alwaysOne)).toEqual([])
  expect(repeatedly(5, alwaysOne)).toEqual([1, 1, 1, 1, 1])

  let x: number = 1
  const keepIncrementing: () => number = () => x++

  expect(repeatedly(0, keepIncrementing)).toEqual([])
  expect(repeatedly(5, keepIncrementing)).toEqual([1, 2, 3, 4, 5])
})
