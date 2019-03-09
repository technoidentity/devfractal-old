import * as iots from 'io-ts'
import { date, DateType } from 'io-ts-types'
import tcomb from 'tcomb'
import { fake } from './iotsUtils'
// tslint:disable no-object-mutation

// const tcombFromPrimitiveValue: (
//   value: unknown,
// ) =>
//   | tcomb.Irreducible<any>
//   | tcomb.Irreducible<string>
//   | tcomb.Irreducible<boolean>
//   | tcomb.Irreducible<Date>
//   | tcomb.Irreducible<RegExp>
//   | tcomb.Irreducible<Function>
//   | tcomb.Irreducible<Error>
//   | tcomb.Irreducible<void | null> = value => {
//   if (tcomb.Integer.is(value)) {
//     return tcomb.Integer
//   }
//   if (tcomb.Number.is(value)) {
//     return tcomb.Number
//   }
//   if (tcomb.String.is(value)) {
//     return tcomb.String
//   }
//   if (tcomb.Boolean.is(value)) {
//     return tcomb.Boolean
//   }
//   if (tcomb.Boolean.is(value)) {
//     return tcomb.Date
//   }
//   if (tcomb.Boolean.is(value)) {
//     return tcomb.Date
//   }
//   if (tcomb.RegExp.is(value)) {
//     return tcomb.RegExp
//   }
//   if (tcomb.Function.is(value)) {
//     return tcomb.Function
//   }
//   if (tcomb.Error.is(value)) {
//     return tcomb.Error
//   }
//   if (tcomb.Nil.is(value)) {
//     return tcomb.Nil
//   }
//   throw new Error(`Unsupported #{value}`)
// }

// const tcombFromObjectValue: <T extends object>(
//   value: T,
// ) => tcomb.Irreducible<any> = value => {
//   const result: any = {}

//   for (const k of Object.keys(value)) {
//     if (tcomb.Array.is(value[k])) {
//       result[k] = tcomb.Array // element type?
//     } else if (tcomb.Object.is(value[k])) {
//       result[k] = tcombFromObjectValue(value[k])
//     } else {
//       result[k] = tcombFromPrimitiveValue(value[k])
//     }
//   }
//   return result
// }

// export const tcombFromValue: (
//   value: unknown,
// ) => tcomb.Irreducible<any> = value => {
//   if (tcomb.Array.is(value)) {
//     return tcomb.Array // element type?
//   }
//   if (tcomb.Object.is(value)) {
//     return tcombFromObjectValue(value)
//   }
//   return tcombFromPrimitiveValue(value)
// }

const tcombFromPrimitiveRT: (
  value: iots.Mixed,
) =>
  | tcomb.Irreducible<number>
  | tcomb.Irreducible<string>
  | tcomb.Irreducible<boolean>
  | tcomb.Irreducible<Function>
  | tcomb.Irreducible<Date>
  | tcomb.Enums = value => {
  if (value.name === 'Int') {
    return tcomb.Integer
  }
  if (value instanceof iots.NumberType) {
    return tcomb.Number
  }
  if (value instanceof iots.StringType) {
    return tcomb.String
  }
  if (value instanceof iots.BooleanType) {
    return tcomb.Boolean
  }
  if (value instanceof iots.FunctionType) {
    return tcomb.Function
  }
  if (value instanceof DateType) {
    return tcomb.Date
  }
  if (value instanceof iots.KeyofType) {
    return tcomb.enums.of(Object.keys(value.keys))
  }

  throw new Error(`Unsupported ${value.name}`)
}
const tcombFromObjectRT: <T extends iots.Props>(
  rt: iots.TypeC<T>,
) => tcomb.Struct<T> = rt => {
  const result: any = {}
  const props = rt.props
  for (const prop of Object.keys(props)) {
    if (props[prop] instanceof iots.ArrayType) {
      result[prop] = tcomb.Array // (tcombFromRT(rt[k].type)) // element type?
    } else {
      const p = props[prop]
      result[prop] =
        p instanceof iots.InterfaceType
          ? tcombFromObjectRT(p)
          : tcombFromPrimitiveRT(props[prop])
    }
  }

  return tcomb.struct(result, rt.name)
}

// tslint:disable readonly-array
export const tcombFromRT: (value: iots.Mixed) => any = value => {
  if (
    value instanceof iots.ArrayType ||
    value instanceof iots.ReadonlyArrayType
  ) {
    return tcomb.Array(tcombFromRT(value.type))
  }

  if (value instanceof iots.InterfaceType) {
    return tcombFromObjectRT(value)
  }

  return tcombFromPrimitiveRT(value)
}

// const io = iots.type({
//   fizz: iots.type({ x: iots.number, y: iots.number }),
//   buzz: iots.array(iots.boolean),
// })
// const io = iots.type({
//   fizz: iots.type({ x: iots.string, y: iots.boolean, z: date }),
//   buzz: iots.array(iots.Int),
// })

const io = iots.type({
  d: date,
  e: iots.keyof({ foo: 0, bar: 0 }),
  a: iots.array(iots.string),
  o: iots.type({ x: iots.number, y: iots.Int }),
  o2: iots.type({
    fizz: iots.array(iots.type({ buzz: iots.boolean })),
  }),
})

const value = fake(io)
const tc = tcombFromRT(io)
console.log(tc(value))
