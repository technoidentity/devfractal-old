import * as t from 'io-ts'

export interface HasPropsReadonly
  extends t.ReadonlyType<HasProps, any, any, any> {}

export interface HasPropsIntersection  // tslint:disable-next-line: readonly-array
  extends t.IntersectionType<HasProps[], any, any, any> {}

export type HasProps =
  | HasPropsIntersection
  | HasPropsReadonly
  | t.ExactType<any, any, any, any>
  | t.InterfaceType<any, any, any, any>
  | t.PartialType<any, any, any, any>

type OfProps<
  T extends
    | t.InterfaceType<any, any, any, any>
    | t.PartialType<any, any, any, any>
> = T['props']

// tslint:disable readonly-keyword readonly-array
export type OfIntersection<
  CS extends [HasProps, HasProps, ...HasProps[]]
> = CS extends {
  length: 2
}
  ? Of<CS[0]> & Of<CS[1]>
  : CS extends {
      length: 3
    }
  ? Of<CS[0]> & Of<CS[1]> & Of<CS[2]>
  : CS extends {
      length: 4
    }
  ? Of<CS[0]> & Of<CS[1]> & Of<CS[2]> & Of<CS[3]>
  : CS extends {
      length: 5
    }
  ? Of<CS[0]> & Of<CS[1]> & Of<CS[2]> & Of<CS[3]> & Of<CS[4]>
  : unknown

// tslint:enable readonly-keyword readonly-array

type OfType<
  T extends HasPropsReadonly | t.ExactType<any, any, any, any>
> = T['type']['props']

type Of<T extends HasProps> = T extends
  | t.InterfaceType<any, any, any, any>
  | t.PartialType<any, any, any, any>
  ? OfProps<T>
  : T extends HasPropsReadonly | t.ExactType<any, any, any, any>
  ? OfType<T>
  : unknown

export function getProps<T extends t.Mixed>(
  codec: T & HasProps,
): Of<typeof codec> {
  switch (codec._tag) {
    case 'ReadonlyType':
    case 'ExactType':
      return getProps(codec.type)
    case 'InterfaceType':
    case 'PartialType':
      return codec.props
    case 'IntersectionType':
      return codec.types.reduce<any>(
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
