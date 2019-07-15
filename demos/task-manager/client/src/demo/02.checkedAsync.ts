import { number, readonly, string, type } from 'io-ts'
import { checkedAsync, range } from 'technoidentity-utils'

const checkedAdd = checkedAsync(
  [number, number, number],
  number,
  async (x, y, z) => x + y + z,
)

console.log(checkedAdd(100, 100, 100))

const checkedTimes = checkedAsync([string, number], string, async (s, n) =>
  range(n).reduce((acc, _) => acc + s, ''),
)

console.log(checkedTimes('hello', 3))

const Point = readonly(type({ x: number, y: number }))

const checkedMoveBy = checkedAsync(
  [Point, number, number],
  Point,
  async (pt, dx, dy) => ({ x: pt.x + dx, y: pt.y + dy }),
)
console.log(checkedMoveBy({ x: 1, y: 2 }, 1, 1))
