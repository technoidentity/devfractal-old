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

export function toInt(from: string): number {
  const decoded: Either<t.Errors, number> = IntegerFromString.decode(from)
  return decoded.isRight() ? decoded.value : fatal(reporter(decoded).join('\n'))
}

export function toBoolean(from: string): boolean {
  const decoded: Either<t.Errors, boolean> = BooleanFromString.decode(from)
  return decoded.isRight() ? decoded.value : fatal(reporter(decoded).join('\n'))
}

export function toNumber(from: string): number {
  const decoded: Either<t.Errors, number> = NumberFromString.decode(from)
  return decoded.isRight() ? decoded.value : fatal(reporter(decoded).join('\n'))
}

export function toDate(from: string): Date {
  const decoded: Either<t.Errors, Date> = DateFromISOString.decode(from)
  return decoded.isRight() ? decoded.value : fatal(reporter(decoded).join('\n'))
}
