import { number, readonly, string, type } from 'technoidentity-spec'
import { checked, checkedAsync } from './checked'
import { range } from './common'

// tslint:disable typedef
it('checked', () => {
  const checkedAdd = checked(
    [number, number, number],
    number,
    (x, y, z) => x + y + z,
  )

  expect(checkedAdd(100, 100, 100)).toEqual(300)
  expect(() => checkedAdd(100, '100' as any, 100)).toThrow()

  const checkedTimes = checked([string, number], string, (s, n) =>
    range(n).reduce((acc, _) => acc + s, ''),
  )

  expect(checkedTimes('hello', 3)).toEqual('hellohellohello')
  expect(() => checkedTimes(5 as any, 5)).toThrow()
  expect(() => checkedTimes('hello', '5' as any)).toThrow()

  const Point = readonly(type({ x: number, y: number }))

  const checkedMoveBy = checked(
    [Point, number, number],
    Point,
    (pt, dx, dy) => {
      return { x: pt.x + dx, y: pt.y + dy }
    },
  )
  expect(checkedMoveBy({ x: 1, y: 2 }, 1, 1)).toEqual({ x: 2, y: 3 })
  expect(() => checkedMoveBy({ x: 1, y: 2 }, false as any, 1)).toThrow()
  expect(() => checkedMoveBy({ x: 1, y: 2 }, 1, false as any)).toThrow()
  expect(() => checkedMoveBy({ x: 1, y: 'hello' as any }, 1, 1)).toThrow()
  expect(() => checkedMoveBy({ x: 'world' as any, y: 2 }, 1, 1)).toThrow()

  // @TODO: make checked work with decoders like DateFromIsoString

  // const checkedDateInc = checked(
  //   [DateFromISOString],
  //   DateFromISOString,
  //   s => addDays(new Date(s), 1).toISOString(),
  // )
  // const date = new Date().toISOString()
  // expect(checkedDateInc(date)).toEqual(addDays(date, 1).toISOString())
})

// tslint:disable no-floating-promises

it('checkedAsync', async () => {
  const checkedAdd = checkedAsync(
    [number, number, number],
    number,
    async (x, y, z) => x + y + z,
  )

  await expect(checkedAdd(100, 100, 100)).resolves.toEqual(300)
  await expect(checkedAdd(100, '100' as any, 100)).rejects.toThrow()

  const checkedTimes = checkedAsync([string, number], string, async (s, n) =>
    range(n).reduce((acc, _) => acc + s, ''),
  )

  await expect(checkedTimes('hello', 3)).resolves.toEqual('hellohellohello')
  await expect(checkedTimes(5 as any, 5)).rejects.toThrow()
  await expect(checkedTimes('hello', '5' as any)).rejects.toThrow()

  const Point = readonly(type({ x: number, y: number }))

  const checkedMoveBy = checkedAsync(
    [Point, number, number],
    Point,
    async (pt, dx, dy) => ({ x: pt.x + dx, y: pt.y + dy }),
  )
  await expect(checkedMoveBy({ x: 1, y: 2 }, 1, 1)).resolves.toEqual({
    x: 2,
    y: 3,
  })

  await expect(checkedMoveBy({ x: 1, y: 2 }, false as any, 1)).rejects.toThrow()
  await expect(checkedMoveBy({ x: 1, y: 2 }, 1, false as any)).rejects.toThrow()
  await expect(
    checkedMoveBy({ x: 1, y: 'hello' as any }, 1, 1),
  ).rejects.toThrow()
  await expect(
    checkedMoveBy({ x: 'world' as any, y: 2 }, 1, 1),
  ).rejects.toThrow()
})
