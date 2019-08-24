import { number, readonly, string, type } from 'io-ts'
import { checked, checkedAsync, range } from 'technoidentity-utils'

export const checkedAdd = checked(
  [number, number, number],
  number,
  (x, y, z) => x + y + z,
)

export const checkedTimes = checked([string, number], string, (s, n) =>
  range(n).reduce((acc, _) => acc + s, ''),
)

export const Point = readonly(type({ x: number, y: number }))

export const checkedMoveBy = checked(
  [Point, number, number],
  Point,
  (pt, dx, dy) => {
    return { x: pt.x + dx, y: pt.y + dy }
  },
)

export const acAdd = checkedAsync(
  [number, number, number],
  number,
  async (x, y, z) => x + y + z,
)

export const acTimes = checkedAsync([string, number], string, async (s, n) =>
  range(n).reduce((acc, _) => acc + s, ''),
)

export const acMoveBy = checkedAsync(
  [Point, number, number],
  Point,
  async (pt, dx, dy) => ({ x: pt.x + dx, y: pt.y + dy }),
)
console.log(checkedMoveBy({ x: 1, y: 2 }, 1, 1))
