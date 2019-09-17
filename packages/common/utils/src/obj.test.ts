import { isRight } from 'fp-ts/lib/Either'
import { Branded, Int, IntBrand, number, TypeOf } from 'io-ts'
import { IntFromString } from 'io-ts-types/lib/IntFromString'
import { NumberFromString } from 'io-ts-types/lib/NumberFromString'
import {
  combine,
  exactProps,
  objOmit,
  objPick,
  opt,
  props,
  req,
  toOpt,
  toReq,
} from './obj'

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
    const Point = props({ y: number }, { x: number })
    type Point = TypeOf<typeof Point>
    const point: Point = { x: 1, y: 2 }
    expect(Point.decode(point)._tag).toEqual('Right')
    expect(Point.decode({ y: 'hello', x: 2 })._tag).toEqual('Left')
    expect(Point.decode({ x: 1 })._tag).toEqual('Right')
    expect(Point.decode({ y: 2 })._tag).toEqual('Left')
    expect(Point.decode({})._tag).toEqual('Left')
  })

  it('exactProps', () => {
    const Point = exactProps({ y: number }, { x: number })
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
    const Point3D = props({ y: number, z: number }, { x: number })
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
    const Point3D = props({ y: number, z: number }, { x: number })
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
    const Point3D = props({ y: number, z: number }, { x: number })
    const Point = objOmit(Point3D, ['z'])

    const Size = props({ width: Int }, { height: number })

    const Rect = combine(Point, Size)

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
    const Point3D = props({ y: Int, z: number }, { x: IntFromString })
    const Point = objOmit(Point3D, ['z'])

    const Size = props({ height: NumberFromString }, { width: number })

    const Rect = combine(Point, Size)

    type Rect = TypeOf<typeof Rect>

    expect(
      Rect.decode({ x: '1', y: 2, width: 100, height: '200' })._tag,
    ).toEqual('Right')
    expect(Rect.decode({ x: 1, width: 100, height: 'hello' })._tag).toEqual(
      'Left',
    )
  })

  it('toReq', () => {
    const Point3D = props({ y: number, z: number }, { x: number })
    const Point = objOmit(Point3D, ['z'])
    const Size = props({ height: number }, { width: number })
    const Rect = toReq(combine(Point, Size))

    type Rect = TypeOf<typeof Rect>
    const rect: Rect = { x: 1, y: 2, width: 100, height: 200 }
    expect(Rect.decode(rect)._tag).toEqual('Right')
    expect(Rect.decode({ x: 1, width: 100 })._tag).toEqual('Left')
  })

  it('toOpt', () => {
    const Point3D = props({ y: number, z: number }, { x: number })
    const Point = objOmit(Point3D, ['z'])
    const Size = props({ height: number }, { width: number })
    const Rect = toOpt(combine(Point, Size))

    type Rect = TypeOf<typeof Rect>
    const rect: Rect = { x: 1, y: 2, width: 100, height: 200 }
    expect(Rect.decode(rect)._tag).toEqual('Right')
    expect(Rect.decode({ x: 1, width: 100 })._tag).toEqual('Right')
    expect(Rect.decode({})._tag).toEqual('Right')
  })
})
