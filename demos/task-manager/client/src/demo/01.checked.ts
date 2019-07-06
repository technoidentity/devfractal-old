import { number, readonly, string, type } from 'io-ts'
import { checked, range } from 'technoidentity-utils'

const checkedAdd = checked(
  [number, number, number],
  number,
  (x, y, z) => x + y + z,
)

console.log(checkedAdd(100, 100, 100))

const checkedTimes = checked([string, number], string, (s, n) =>
  range(n).reduce((acc, _) => acc + s, ''),
)

console.log(checkedTimes('hello', 3))

const Point = readonly(type({ x: number, y: number }))

const checkedMoveBy = checked([Point, number, number], Point, (pt, dx, dy) => {
  return { x: pt.x + dx, y: pt.y + dy }
})
console.log(checkedMoveBy({ x: 1, y: 2 }, 1, 1))
