import { Array, boolean, number, Props, ReadonlyC, string, TypeC } from 'io-ts'

const emptyValue: (v: unknown) => unknown = v => {
  if (number.is(v)) {
    return 0
  }
  if (string.is(v)) {
    return ''
  }
  if (boolean.is(v)) {
    return false
  }
  if (Array.is(v)) {
    return []
  }
  return {}
}

export const emptyFromValue: <T extends object>(value: T) => T = value => {
  const result: any = {}
  // tslint:disable-next-line: no-object-mutation
  Object.keys(value).forEach(k => (result[k] = emptyValue(value[k])))
  return result
}

export function emptyFromType<T extends Props>(
  typeValue: ReadonlyC<TypeC<T>>,
): T {
  const props: T = typeValue.type.props
  const value: any = {}

  // tslint:disable no-object-mutation
  Object.keys(props).forEach(prop => {
    if (prop !== 'id') {
      if (props[prop].name === 'number') {
        value[prop] = 0
      } else if (props[prop].name === 'string') {
        value[prop] = ''
      } else if (props[prop].name === 'boolean') {
        value[prop] = false
        // @TODO: handle array and object
      } else {
        throw new Error(`Unsupported type ${props[prop]}`)
      }
    }
  })
  // tslint:enable no-object-mutation

  // typeValue check before return assertions?

  return value
}
