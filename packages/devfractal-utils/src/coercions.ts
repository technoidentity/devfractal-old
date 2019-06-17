import {
  BooleanFromString,
  DateFromISOString,
  IntegerFromString,
  NumberFromString,
} from 'io-ts-types'
import { typeInvariant } from './iotsUtils'

export const toInt: (from: string) => number = from =>
  typeInvariant(IntegerFromString, from)

export const toBoolean: (from: string) => boolean = from =>
  typeInvariant(BooleanFromString, from)

export const toNumber: (from: string) => number = from =>
  typeInvariant(NumberFromString, from)

export const toDate: (from: string) => Date = from =>
  typeInvariant(DateFromISOString, from)
