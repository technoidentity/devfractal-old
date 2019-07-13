import { range, repeatedly, today } from './common'

it('test for range function', () => {
  expect(range(0, -2)).toEqual([])
  expect(range(0, -3, 1)).toEqual([])
  expect(range(0, 1)).toEqual([0])
  expect(range(2, 5)).toEqual([2, 3, 4])
  expect(range(5, 10, 2)).toEqual([5, 7, 9])
  expect(range(0, 5, 1)).toEqual([0, 1, 2, 3, 4])
  expect(range(0, 30, 5)).toEqual([0, 5, 10, 15, 20, 25])
  expect(range(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  expect(range(0, 10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
})

it('repeatedly', () => {
  const one: () => number = () => 1

  expect(repeatedly(0, one)).toEqual([])
  expect(repeatedly(5, one)).toEqual([1, 1, 1, 1, 1])

  {
    let x: number = 1
    const inc: () => number = () => x++

    expect(repeatedly(0, inc)).toEqual([])
    expect(repeatedly(5, inc)).toEqual([1, 2, 3, 4, 5])
  }
})

it('today', () => {
  expect(today()).toEqual(expect.any(Date))
})
