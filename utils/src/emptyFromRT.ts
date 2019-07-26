import { Constructor, Irreducible } from 'tcomb'
import { verify } from './assertions'
import { buildObject, keys, nop } from './common'
import {
  isDict,
  isEnums,
  isInteger,
  isInterface,
  isIntersection,
  isIrreducible,
  isList,
  isMaybe,
  isStruct,
  isTuple,
  isType,
  isUnion,
} from './isTcomb'

function emptyFromIrreducible(rt: Irreducible<any>): any {
  verify(rt.meta.kind === 'irreducible', 'rt must be irreducible')

  switch (rt.meta.name) {
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
        `Unsupported tcomb type: ${rt.meta.kind}: ${rt.meta.name}`,
      )
  }
}

export function emptyFromRT(rt: Constructor<any>): any {
  if (!isType(rt)) {
    throw new Error('I have no idea about what do with a function')
  }

  verify(rt && rt.meta && rt.meta.kind)

  if (isInteger(rt)) {
    return 0
  }

  if (isStruct(rt)) {
    return rt(buildObject(rt.meta.props, emptyFromRT))
  }

  if (isInterface(rt)) {
    return buildObject(rt.meta.props, emptyFromRT)
  }

  if (isList(rt)) {
    return []
  }

  if (isDict(rt)) {
    return {}
  }

  if (isIntersection(rt)) {
    return rt.meta.types.map(emptyFromRT).reduce((acc, x) => ({ ...acc, ...x }))
  }

  if (isMaybe(rt)) {
    return emptyFromRT(rt.meta.type) // may be return undefined?
  }

  if (isUnion(rt)) {
    return emptyFromRT(rt.meta.types[0])
  }

  if (isEnums(rt)) {
    return keys(rt.meta.map)[0]
  }

  // case 'subtype':
  //   return empty(rt.meta.type) // this is hard, how to satisfy predicate?

  // case 'func':
  //   return nop // need function returning value of correct type

  if (isTuple(rt)) {
    return rt.meta.types.map(emptyFromRT)
  }

  if (isIrreducible(rt)) {
    return emptyFromIrreducible(rt)
  }

  throw new Error(`Unsupported tcomb type: ${rt.meta.kind}`)
}
