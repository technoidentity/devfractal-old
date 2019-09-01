import Chance from 'chance'
import t, { Any, Constructor, Irreducible } from 'tcomb'
import {
  buildObject,
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
  repeatedly,
  verify,
} from 'technoidentity-utils'
import { defaultOptions, FakeOptions } from './fake'

// tslint:disable typedef

const chance = new Chance()

// tslint:disable-next-line: readonly-array
const primitives = [t.Number, t.String, t.Boolean, t.Date, t.Nil]

function fakeFromIrreducible(rt: Irreducible<any>, options: FakeOptions): any {
  verify(rt.meta.kind === 'irreducible', 'rt must be irreducible')

  switch (rt.meta.name) {
    case 'Number':
      return chance.floating(options.floating)

    case 'Any':
      return fakeFromRT(chance.pickone(primitives))

    case 'String':
      return chance.sentence(options.sentence)

    case 'Boolean':
      return chance.bool()

    case 'Date':
      return chance.date()

    case 'Function':
      return (..._: any[]) => fakeFromRT(Any, options)

    case 'Nil':
      // tslint:disable-next-line: no-null-keyword
      return chance.pickone([undefined, null])

    case 'Error':
      return new Error('fake error')

    case 'Object':
      const kn = chance.integer({ min: 4, max: 8 })

      const kv = repeatedly(kn, () => [
        chance.word({ length: chance.integer({ min: 4, max: 8 }) }),
        fakeFromRT(chance.pickone(primitives), options),
      ])

      return kv.reduce((acc, [k, v]) => ({ ...acc, [k]: v }))

    case 'Array':
      const n: number = chance.integer({
        min: options.array.minLength,
        max: options.array.maxLength,
      })

      return repeatedly(n, () =>
        fakeFromRT(chance.pickone(primitives), options),
      )

    default:
      throw new Error(
        `Unsupported tcomb type: ${rt.meta.kind}: ${rt.meta.name}`,
      )
  }
}

export function fakeFromRT(
  rt: Constructor<any>,
  options: FakeOptions = defaultOptions,
): any {
  if (!isType(rt)) {
    console.log(rt.name)
    throw new Error('I have no idea about what do with a function')
  }

  verify(rt && rt.meta && rt.meta.kind)

  if (isInteger(rt)) {
    return chance.integer(options.integer)
  }

  if (isStruct(rt)) {
    return rt(buildObject(rt.meta.props, p => fakeFromRT(p, options)))
  }

  if (isInterface(rt)) {
    return buildObject(rt.meta.props, p => fakeFromRT(p, options))
  }

  if (isList(rt)) {
    const n: number = chance.integer({
      min: options.array.minLength,
      max: options.array.maxLength,
    })

    return repeatedly(n, () => fakeFromRT(rt.meta.type, options))
  }

  if (isDict(rt)) {
    return {}
  }

  if (isIntersection(rt)) {
    return rt.meta.types
      .map(p => fakeFromRT(p, options))
      .reduce((acc, x) => ({ ...acc, ...x }))
  }

  if (isMaybe(rt)) {
    return chance.pickone([fakeFromRT(rt.meta.type), undefined])
  }

  if (isUnion(rt)) {
    return chance.pickone(rt.meta.types.map(p => fakeFromRT(p, options)))
  }

  if (isEnums(rt)) {
    return chance.pickone(Object.keys(rt.meta.map))
  }

  if (isTuple(rt)) {
    return rt.meta.types.map(p => fakeFromRT(p, options))
  }

  if (isIrreducible(rt)) {
    return fakeFromIrreducible(rt, options)
  }

  throw new Error(`Unsupported tcomb type: ${rt.meta.kind}`)
}
