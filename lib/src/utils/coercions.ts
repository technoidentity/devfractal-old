import { Either } from 'fp-ts/lib/Either'
import * as t from 'io-ts'
import { reporter } from 'io-ts-reporters'
import {
  BooleanFromString,
  DateFromISOString,
  IntegerFromString,
  NumberFromString,
} from 'io-ts-types'
import { fatal } from '../lib'

export const toInt: (from: string) => number = from => {
  const decoded: Either<t.Errors, number> = IntegerFromString.decode(from)
  return decoded.isRight() ? decoded.value : fatal(reporter(decoded).join('\n'))
}

export const toBoolean: (from: string) => boolean = from => {
  const decoded: Either<t.Errors, boolean> = BooleanFromString.decode(from)
  return decoded.isRight() ? decoded.value : fatal(reporter(decoded).join('\n'))
}

export const toNumber: (from: string) => number = from => {
  const decoded: Either<t.Errors, number> = NumberFromString.decode(from)
  return decoded.isRight() ? decoded.value : fatal(reporter(decoded).join('\n'))
}

export const toDate: (from: string) => Date = from => {
  const decoded: Either<t.Errors, Date> = DateFromISOString.decode(from)
  return decoded.isRight() ? decoded.value : fatal(reporter(decoded).join('\n'))
}
