import { Constructor, Irreducible } from 'tcomb'
import { invariant } from './assertions'
import { buildObject, nop } from './common'
import {
  hasProps,
  isDict,
  isEnums,
  isInteger,
  isIntersection,
  isIrreducible,
  isList,
  isMaybe,
  isTuple,
  isType,
  isUnion,
} from './isTcomb'

function emptyFromIrreducible(spec: Irreducible<any>): any {
  invariant(spec.meta.kind === 'irreducible', 'spec must be irreducible')

  switch (spec.meta.name) {
    case 'Number':
      return 0

    case 'Any':
    case 'String':
      return ''

    case 'Boolean':
      return false

    case 'Date':
      return new Date()

    case 'Function':
      return nop

    case 'RegExp':
      return /(?:)/

    case 'Nil':
      return undefined

    case 'Error':
      return new Error('empty error')

    case 'Object':
      return {}

    case 'Array':
      return []
    default:
      throw new Error(
        `Unsupported tcomb type: ${spec.meta.kind}: ${spec.meta.name}`,
      )
  }
}

export function emptyFromTcomb(spec: Constructor<any>): any {
  if (!isType(spec)) {
    throw new Error('I have no idea about what do with a function')
  }

  invariant(spec && spec.meta && spec.meta.kind)

  if (isInteger(spec)) {
    return 0
  }

  if (hasProps(spec)) {
    return buildObject(spec.meta.props, emptyFromTcomb)
  }

  if (isList(spec)) {
    return []
  }

  if (isDict(spec)) {
    return {}
  }

  if (isIntersection(spec)) {
    return spec.meta.types
      .map(emptyFromTcomb)
      .reduce((acc, x) => ({ ...acc, ...x }))
  }

  if (isMaybe(spec)) {
    return emptyFromTcomb(spec.meta.type) // may be return undefined?
  }

  if (isUnion(spec)) {
    return emptyFromTcomb(spec.meta.types[0])
  }

  if (isEnums(spec)) {
    return Object.keys(spec.meta.map)[0]
  }

  // case 'subtype':
  //   return empty(spec.meta.type) // this is hard, how to satisfy predicate?

  // case 'func':
  //   return nop // need function returning value of correct type

  if (isTuple(spec)) {
    return emptyFromTcomb(spec.meta.types[0])
  }

  if (isIrreducible(spec)) {
    return emptyFromIrreducible(spec)
  }

  throw new Error(`Unsupported tcomb type: ${spec.meta.kind}`)
}
