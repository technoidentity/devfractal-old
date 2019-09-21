import { isRight } from 'fp-ts/lib/Either'
import { boolean, Branded, Int, IntBrand, number, string, TypeOf } from 'io-ts'
import { IntFromString } from 'io-ts-types/lib/IntFromString'
import { NumberFromString } from 'io-ts-types/lib/NumberFromString'
import { exactObj, obj, opt, req } from './obj'
import { objCombine, objOmit, objPick, pickBy, toOpt, toReq } from './objUtils'

// tslint:disable typedef

describe('ObjType', () => {
  it('req', () => {
    const Point = req({ x: number, y: number })
    type Point = TypeOf<typeof Point>
    const point: Point = { x: 1, y: 2 }
    expect(Point.decode(point)._tag).toEqual('Right')
    expect(Point.decode({ x: 'hello', y: 2 })._tag).toEqual('Left')
    expect(Point.decode({ x: 1 })._tag).toEqual('Left')
    expect(Point.decode({ y: 2 })._tag).toEqual('Left')
    expect(Point.decode({})._tag).toEqual('Left')
  })

  it('opt', () => {
    const Point = opt({ x: number, y: number })
    type Point = TypeOf<typeof Point>
    const point: Point = { x: 1, y: 2 }
    expect(Point.decode(point)._tag).toEqual('Right')
    expect(Point.decode({ x: 1 })._tag).toEqual('Right')
    expect(Point.decode({ y: 2 })._tag).toEqual('Right')
    expect(Point.decode({})._tag).toEqual('Right')
  })

  it('props', () => {
    const Point = obj({ y: number }, { x: number })
    type Point = TypeOf<typeof Point>
    const point: Point = { x: 1, y: 2 }
    expect(Point.decode(point)._tag).toEqual('Right')
    expect(Point.decode({ y: 'hello', x: 2 })._tag).toEqual('Left')
    expect(Point.decode({ x: 1 })._tag).toEqual('Right')
    expect(Point.decode({ y: 2 })._tag).toEqual('Left')
    expect(Point.decode({})._tag).toEqual('Left')
  })

  it('exactProps', () => {
    const Point = exactObj({ y: number }, { x: number })
    type Point = TypeOf<typeof Point>
    const point: Point = { x: 1, y: 2 }
    expect(Point.decode(point)._tag).toEqual('Right')
    expect(Point.decode({ y: 'hello', x: 2 })._tag).toEqual('Left')
    expect(Point.decode({ x: 1 })._tag).toEqual('Right')
    expect(Point.decode({ y: 2 })._tag).toEqual('Left')
    expect(Point.decode({})._tag).toEqual('Left')

    const decoded = Point.decode({ x: 1, y: 2, z: 'hello' })
    expect(isRight(decoded)).toBeTruthy()
    if (isRight(decoded)) {
      expect(decoded.right).toEqual({ x: 1, y: 2 })
    }
  })

  it('pick', () => {
    const Point3D = obj({ y: number, z: number }, { x: number })
    const Point = objPick(Point3D, ['x', 'y'])
    type Point = TypeOf<typeof Point>
    const point: Point = { x: 1, y: 2 }
    expect(Point.decode(point)._tag).toEqual('Right')
    expect(Point.decode({ x: 1, y: 2, z: 'hello' })._tag).toEqual('Right')
    expect(Point.decode({ y: 'hello', x: 2 })._tag).toEqual('Left')
    expect(Point.decode({ x: 1 })._tag).toEqual('Right')
    expect(Point.decode({ y: 2 })._tag).toEqual('Left')
    expect(Point.decode({})._tag).toEqual('Left')
  })

  it('omit', () => {
    const Point3D = obj({ y: number, z: number }, { x: number })
    const Point = objOmit(Point3D, ['z'])
    type Point = TypeOf<typeof Point>
    const point: Point = { x: 1, y: 2 }
    expect(Point.decode(point)._tag).toEqual('Right')
    expect(Point.decode({ x: 1, y: 2, z: 'hello' })._tag).toEqual('Right')
    expect(Point.decode({ y: 'hello', x: 2 })._tag).toEqual('Left')
    expect(Point.decode({ x: 1 })._tag).toEqual('Right')
    expect(Point.decode({ y: 2 })._tag).toEqual('Left')
    expect(Point.decode({})._tag).toEqual('Left')
  })

  it('combine', () => {
    const Point3D = obj({ y: number, z: number }, { x: number })
    const Point = objOmit(Point3D, ['z'])

    const Size = obj({ width: Int }, { height: number })

    const Rect = objCombine(Point, Size)

    type Rect = TypeOf<typeof Rect>
    const rect: Rect = {
      x: 1,
      y: 2,
      width: 100 as Branded<number, IntBrand>,
      height: 200,
    }
    expect(Rect.decode(rect)._tag).toEqual('Right')
    expect(Rect.decode({ x: 1, width: 100, height: 'hello' })._tag).toEqual(
      'Left',
    )
  })

  it('combine - prismatic values', () => {
    const Point3D = obj({ y: Int, z: number }, { x: IntFromString })
    const Point = objOmit(Point3D, ['z'])

    const Size = obj({ height: NumberFromString }, { width: number })

    const Rect = objCombine(Point, Size)

    type Rect = TypeOf<typeof Rect>

    expect(
      Rect.decode({ x: '1', y: 2, width: 100, height: '200' })._tag,
    ).toEqual('Right')
    expect(Rect.decode({ x: 1, width: 100, height: 'hello' })._tag).toEqual(
      'Left',
    )
  })

  it('toReq', () => {
    const Point3D = obj({ y: number, z: number }, { x: number })
    const Point = objOmit(Point3D, ['z'])
    const Size = obj({ height: number }, { width: number })
    const Rect = toReq(objCombine(Point, Size))

    type Rect = TypeOf<typeof Rect>
    const rect: Rect = { x: 1, y: 2, width: 100, height: 200 }
    expect(Rect.decode(rect)._tag).toEqual('Right')
    expect(Rect.decode({ x: 1, width: 100 })._tag).toEqual('Left')
  })

  it('toOpt', () => {
    const Point3D = obj({ y: number, z: number }, { x: number })
    const Point = objOmit(Point3D, ['z'])
    const Size = obj({ height: number }, { width: number })
    const Rect = toOpt(objCombine(Point, Size))

    type Rect = TypeOf<typeof Rect>
    const rect: Rect = { x: 1, y: 2, width: 100, height: 200 }
    expect(Rect.decode(rect)._tag).toEqual('Right')
    expect(Rect.decode({ x: 1, width: 100 })._tag).toEqual('Right')
    expect(Rect.decode({})._tag).toEqual('Right')
  })

  it('pickBy', () => {
    const pt = obj({ x: number, y: string }, { a: string, b: number, c: Int })
    const numbers = pickBy(pt, number)
    const strings = pickBy(pt, string)
    const ints = pickBy(pt, Int)
    const numerics = pickBy(pt, number, Int)
    const stringly = pickBy(pt, number, string, Int, boolean)

    expect(numbers.name).toMatchInlineSnapshot(
      `"(Readonly<Partial<{ b: number }>> & Readonly<{ x: number }>)"`,
    )
    expect(strings.name).toMatchInlineSnapshot(
      `"(Readonly<Partial<{ a: string }>> & Readonly<{ y: string }>)"`,
    )
    expect(ints.name).toMatchInlineSnapshot(
      `"(Readonly<Partial<{ c: Int }>> & Readonly<{  }>)"`,
    )
    expect(numerics.name).toMatchInlineSnapshot(
      `"(Readonly<Partial<{ b: number, c: Int }>> & Readonly<{ x: number }>)"`,
    )
    expect(stringly.name).toMatchInlineSnapshot(
      `"(Readonly<Partial<{ a: string, b: number, c: Int }>> & Readonly<{ x: number, y: string }>)"`,
    )

    const ns: TypeOf<typeof numbers> = { x: 1 }
    const ss: TypeOf<typeof strings> = { y: '' }
    const is: TypeOf<typeof ints> = { c: 10 as Int }
    const nss: TypeOf<typeof numerics> = { x: 100 }
    const sls: TypeOf<typeof stringly> = { x: 10, y: '' }

    expect(numbers.decode(ns)._tag).toEqual('Right')
    expect(strings.decode(ss)._tag).toEqual('Right')
    expect(ints.decode(is)._tag).toEqual('Right')
    expect(numerics.decode(nss)._tag).toEqual('Right')
    expect(stringly.decode(sls)._tag).toEqual('Right')
  })
})
