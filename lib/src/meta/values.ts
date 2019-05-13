import { ArrayMT, EnumMT, Mixed, ObjectMT, PrimitiveMT } from './index'

export const MNumber: PrimitiveMT = { kind: 'number' }

export const MString: PrimitiveMT = { kind: 'string' }

export const MBool: PrimitiveMT = { kind: 'boolean' }

export const MDate: PrimitiveMT = { kind: 'date' }

export const MEnum: (values: ReadonlyArray<string>, name?: string) => EnumMT = (
  values,
  name,
) => ({ kind: 'enum', name, values })

export const MArray: (of: Mixed) => ArrayMT = of => ({ kind: 'array', of })

export const MObject: (
  properties: Record<string, Mixed>,
  name?: string,
) => ObjectMT = (properties, name) => ({ kind: 'object', name, properties })
