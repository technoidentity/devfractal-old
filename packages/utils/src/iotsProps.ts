import {
  ExactType,
  InterfaceType,
  IntersectionType,
  Mixed,
  PartialType,
  Props,
  ReadonlyType,
} from 'io-ts'

export interface HasPropsReadonly
  extends ReadonlyType<HasProps, any, any, any> {}

export interface HasPropsIntersection  // tslint:disable-next-line: readonly-array
  extends IntersectionType<HasProps[], any, any, any> {}

export type HasProps =
  | HasPropsReadonly
  | HasPropsIntersection
  | InterfaceType<any, any, any, any>
  | ExactType<any, any, any, any>
  | PartialType<any, any, any, any>

export function getProps<T extends Mixed>(codec: T & HasProps): T['_O'] {
  switch (codec._tag) {
    case 'ReadonlyType':
    case 'ExactType':
      return getProps(codec.type)
    case 'InterfaceType':
    case 'PartialType':
      return codec.props
    case 'IntersectionType':
      return codec.types.reduce<Props>(
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
