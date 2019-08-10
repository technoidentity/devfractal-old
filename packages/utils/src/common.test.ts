import { buildObject, omit, pick, range, repeatedly, today } from './common'

it('range', () => {
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

const square: (a: number) => number = a => a * a

it('buildObject', () => {
  expect(buildObject({ x: 2, y: 3 }, square)).toEqual({
    x: 4,
    y: 9,
  })
  expect(buildObject({ x: 1 }, value => value.toString())).toEqual({ x: '1' })
  expect(buildObject({ x: 1, y: 2, z: 4 }, value => value + 1)).toEqual({
    x: 2,
    y: 3,
    z: 5,
  })
  expect(buildObject({}, value => value * 1)).toEqual({})
  expect(buildObject({ x: 0, y: 0 }, value => value - 1)).toEqual({
    x: -1,
    y: -1,
  })
  expect(buildObject({ x: '0' }, Boolean)).toEqual({ x: true })
  expect(buildObject({ x: 'true' }, value => value.length)).toEqual({ x: 4 })
})

it('omit', () => {
  expect(omit({ x: 1, y: '2' }, ['x'])).toEqual({ y: '2' })
  expect(omit({ x: 1, y: '2' }, ['z'] as any)).toEqual({ x: 1, y: '2' })
  expect(omit({ x: 1, y: '2' }, ['x', 'y'])).toEqual({})
})

it('pick', () => {
  expect(pick({ x: 1, y: '2' }, ['x'])).toEqual({ x: 1 })
  expect(pick({ x: 1, y: '2' }, ['z'] as any)).toEqual({})
  expect(pick({ x: 1, y: '2' }, ['x', 'y'])).toEqual({ x: 1, y: '2' })
})
