import { BooleanFromString } from 'io-ts-types/lib/BooleanFromString'
import { DateFromISOString } from 'io-ts-types/lib/DateFromISOString'
import { IntFromString } from 'io-ts-types/lib/IntFromString'
import { NumberFromString } from 'io-ts-types/lib/NumberFromString'
import { cast } from './iotsUtils'

export function toInt(from: string): number {
  return cast(IntFromString, from)
}

export function toBoolean(from: string): boolean {
  return cast(BooleanFromString, from)
}

export function toNumber(from: string): number {
  return cast(NumberFromString, from)
}

export function toDate(from: string): Date {
  return cast(DateFromISOString, from)
}
