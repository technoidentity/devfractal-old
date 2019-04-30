import { ArrayMT, EnumMT, MT, ObjectMT, PrimitiveMT } from './types'

export const MNumber: PrimitiveMT = { kind: 'number' }

export const MString: PrimitiveMT = { kind: 'string' }

export const MBool: PrimitiveMT = { kind: 'boolean' }

export const MDate: PrimitiveMT = { kind: 'date' }

export const MEnum: (values: ReadonlyArray<string>, name?: string) => EnumMT = (
  values,
  name,
) => ({ kind: 'enum', name, values })

export const MArray: (of: MT) => ArrayMT = of => ({ kind: 'array', of })

export const MObject: (
  properties: Record<string, MT>,
  name?: string,
) => ObjectMT = (properties, name) => ({ kind: 'object', name, properties })
