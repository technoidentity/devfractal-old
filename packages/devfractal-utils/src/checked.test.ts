import * as t from 'io-ts'
import { asyncChecked, checked } from './checked'
import { range } from './common'

// tslint:disable typedef
it('checked', () => {
  const checkedAdd = checked(
    [t.number, t.number, t.number],
    t.number,
    (x, y, z) => x + y + z,
  )

  expect(checkedAdd(100, 100, 100)).toEqual(300)
  expect(() => checkedAdd(100, '100' as any, 100)).toThrow()

  const checkedTimes = checked([t.string, t.number], t.string, (s, n) =>
    range(n).reduce((acc, _) => acc + s, ''),
  )

  expect(checkedTimes('hello', 3)).toEqual('hellohellohello')
  expect(() => checkedTimes(5 as any, 5)).toThrow()
  expect(() => checkedTimes('hello', '5' as any)).toThrow()

  const Point = t.readonly(t.type({ x: t.number, y: t.number }))

  const checkedMoveBy = checked(
    [Point, t.number, t.number],
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

it('asyncChecked', async () => {
  const checkedAdd = asyncChecked(
    [t.number, t.number, t.number],
    t.number,
    async (x, y, z) => x + y + z,
  )

  await expect(checkedAdd(100, 100, 100)).resolves.toEqual(300)
  await expect(checkedAdd(100, '100' as any, 100)).rejects.toThrow()

  const checkedTimes = asyncChecked(
    [t.string, t.number],
    t.string,
    async (s, n) => range(n).reduce((acc, _) => acc + s, ''),
  )

  await expect(checkedTimes('hello', 3)).resolves.toEqual('hellohellohello')
  await expect(checkedTimes(5 as any, 5)).rejects.toThrow()
  await expect(checkedTimes('hello', '5' as any)).rejects.toThrow()

  const Point = t.readonly(t.type({ x: t.number, y: t.number }))

  const checkedMoveBy = asyncChecked(
    [Point, t.number, t.number],
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
