import { number, readonly, string, type } from 'io-ts'
import { checked, checkedAsync, range } from 'technoidentity-utils'

export const checkedAdd = checked(
  [number, number, number],
  number,
  (x, y, z) => x + y + z,
)

console.log('checkedAdd: ', checkedAdd(10, 20, 30))

export const checkedTimes = checked([string, number], string, (s, n) =>
  range(n).reduce((acc, _) => acc + s, ''),
)

console.log('checkedTimes', checkedTimes('hello', 3))

export const Point = readonly(type({ x: number, y: number }))

export const checkedMoveBy = checked(
  [Point, number, number],
  Point,
  (pt, dx, dy) => {
    return { x: pt.x + dx, y: pt.y + dy }
  },
)

console.log(checkedMoveBy({ x: 1, y: 2 }, 10, 20))

export const acAdd = checkedAsync(
  [number, number, number],
  number,
  async (x, y, z) => x + y + z,
)

const asyncLog = (p: Promise<any>) => {
  p.then(console.log).catch(console.error)
}

asyncLog(acAdd(10, 20, 30))

export const acTimes = checkedAsync([string, number], string, async (s, n) =>
  range(n).reduce((acc, _) => acc + s, ''),
)

asyncLog(acTimes('hello', 3))

export const acMoveBy = checkedAsync(
  [Point, number, number],
  Point,
  async (pt, dx, dy) => ({ x: pt.x + dx, y: pt.y + dy }),
)

asyncLog(acMoveBy({ x: 1, y: 2 }, 10, 20))
