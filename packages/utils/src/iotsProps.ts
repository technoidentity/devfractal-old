import * as t from 'io-ts'

// tslint:disable readonly-array array-type readonly-keyword
export interface HasPropsReadonly
  extends t.ReadonlyType<HasProps, any, any, any> {}

export interface HasPropsIntersection  // tslint:disable-next-line: readonly-array
  extends t.IntersectionType<
    [HasProps, HasProps, ...Array<HasProps>],
    any,
    any,
    any
  > {}

export type HasPropsOnType = HasPropsReadonly | t.ExactType<any, any, any, any>

export type HasPropsOnProps =
  | t.InterfaceType<any, any, any, any>
  | t.PartialType<any, any, any, any>

export type HasProps = HasPropsIntersection | HasPropsOnProps | HasPropsOnType

export function getProps<T extends t.Mixed>(codec: T & HasProps): t.Props {
  switch (codec._tag) {
    case 'ReadonlyType':
    case 'ExactType':
      return getProps(codec.type)
    case 'InterfaceType':
    case 'PartialType':
      return codec.props
    case 'IntersectionType':
      return codec.types.reduce<t.Props>(
        (props, type) => ({ ...props, ...getProps(type) }),
        {},
      )
  }
}

// const t = type({ x: number, y: string })
// const rt = readonly(t)
// const st = exact(t)
// const int = intersection([rt, strict({ z: number })])

// let x = getProps(t)
// let x2 = getProps(rt)
// let x3 = getProps(st)
// let x4 = getProps(int)

// console.log(x, x2, x3, x4)
