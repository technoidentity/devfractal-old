import { BooleanFromString } from 'io-ts-types/lib/BooleanFromString'
import { DateFromISOString } from 'io-ts-types/lib/DateFromISOString'
import { IntFromString } from 'io-ts-types/lib/IntFromString'
import { NumberFromString } from 'io-ts-types/lib/NumberFromString'
import { typeInvariant } from './iotsUtils'

export const toInt: (from: string) => number = from =>
  typeInvariant(IntFromString, from)

export const toBoolean: (from: string) => boolean = from =>
  typeInvariant(BooleanFromString, from)

export const toNumber: (from: string) => number = from =>
  typeInvariant(NumberFromString, from)

export const toDate: (from: string) => Date = from =>
  typeInvariant(DateFromISOString, from)
