import { ArrayMT, EnumMT, MT, ObjectMT, SimpleMT } from './types'

export const NumberMeta: SimpleMT = { kind: 'number' }
export const StringMeta: SimpleMT = { kind: 'string' }
export const BooleanMeta: SimpleMT = { kind: 'boolean' }
export const DateMeta: SimpleMT = { kind: 'date' }

export const EnumMeta: (
  values: ReadonlyArray<string>,
  name: string,
) => EnumMT = (values, name) => ({ kind: 'enum', name, values })

export const ArrayMeta: (of: MT) => ArrayMT = of => ({ kind: 'array', of })

export const ObjectMeta: (
  properties: Record<string, MT>,
  name?: string,
) => ObjectMT = properties => ({
  kind: 'object',
  name,
  properties,
})
