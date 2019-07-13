import Chance from 'chance'
import t, { Any, Constructor, Irreducible } from 'tcomb'
import { invariant } from './assertions'
import { buildObject, repeatedly } from './common'
import { defaultOptions, FakeOptions } from './fake'
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

// tslint:disable typedef

const chance = new Chance()

// tslint:disable-next-line: readonly-array
const all = [t.Number, t.String, t.Boolean, t.Date, t.Object, t.Array]

function fakeFromIrreducible(
  spec: Irreducible<any>,
  options: FakeOptions,
): any {
  invariant(spec.meta.kind === 'irreducible', 'spec must be irreducible')

  switch (spec.meta.name) {
    case 'Number':
      return chance.floating(options.floating)

    case 'Any':
      return chance.pickone(all)

    case 'String':
      return chance.sentence(options.sentence)

    case 'Boolean':
      return chance.bool()

    case 'Date':
      return chance.date()

    case 'Function':
      return (..._: any[]) => fakeFromTcomb(Any, options)

    case 'Nil':
      // tslint:disable-next-line: no-null-keyword
      return chance.pickone([undefined, null])

    case 'Error':
      return new Error('fake error')

    case 'Object':
      const kn = chance.integer({ min: 4, max: 8 })

      const keys = repeatedly(kn, () =>
        chance.word({ length: chance.integer({ min: 4, max: 8 }) }),
      )
      const values = repeatedly(kn, () =>
        fakeFromTcomb(chance.pickone(all), options),
      )
      const result: any = {}
      for (let i: number = 0; i < kn; ++i) {
        // tslint:disable-next-line: no-object-mutation
        result[keys[i]] = values[i]
      }
      return result

    case 'Array':
      const n: number = chance.integer({
        min: options.array.minLength,
        max: options.array.maxLength,
      })

      return repeatedly(n, () => fakeFromTcomb(chance.pickone(all), options))

    default:
      throw new Error(
        `Unsupported tcomb type: ${spec.meta.kind}: ${spec.meta.name}`,
      )
  }
}

export function fakeFromTcomb(
  spec: Constructor<any>,
  options: FakeOptions = defaultOptions,
): any {
  if (!isType(spec)) {
    console.log(spec.name)
    throw new Error('I have no idea about what do with a function')
  }

  invariant(spec && spec.meta && spec.meta.kind)

  if (isInteger(spec)) {
    return chance.integer(options.integer)
  }

  if (isStruct(spec)) {
    return spec(buildObject(spec.meta.props, p => fakeFromTcomb(p, options)))
  }

  if (isInterface(spec)) {
    return buildObject(spec.meta.props, p => fakeFromTcomb(p, options))
  }

  if (isList(spec)) {
    const n: number = chance.integer({
      min: options.array.minLength,
      max: options.array.maxLength,
    })

    return repeatedly(n, () => fakeFromTcomb(spec.meta.type, options))
  }

  if (isDict(spec)) {
    return {}
  }

  if (isIntersection(spec)) {
    return spec.meta.types
      .map(p => fakeFromTcomb(p, options))
      .reduce((acc, x) => ({ ...acc, ...x }))
  }

  if (isMaybe(spec)) {
    return chance.pickone([fakeFromTcomb(spec.meta.type), undefined])
  }

  if (isUnion(spec)) {
    return chance.pickone(spec.meta.types.map(p => fakeFromTcomb(p, options)))
  }

  if (isEnums(spec)) {
    return chance.pickone(Object.keys(spec.meta.map))
  }

  if (isTuple(spec)) {
    return spec.meta.types.map(p => fakeFromTcomb(p, options))
  }

  if (isIrreducible(spec)) {
    return fakeFromIrreducible(spec, options)
  }

  throw new Error(`Unsupported tcomb type: ${spec.meta.kind}`)
}
