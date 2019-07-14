import { BooleanFromString } from 'io-ts-types/lib/BooleanFromString'
import { DateFromISOString } from 'io-ts-types/lib/DateFromISOString'
import { IntFromString } from 'io-ts-types/lib/IntFromString'
import { NumberFromString } from 'io-ts-types/lib/NumberFromString'
import { specInvariant } from './iotsUtils'

export function toInt(from: string): number {
  return specInvariant(IntFromString, from)
}

export function toBoolean(from: string): boolean {
  return specInvariant(BooleanFromString, from)
}

export function toNumber(from: string): number {
  return specInvariant(NumberFromString, from)
}

export function toDate(from: string): Date {
  return specInvariant(DateFromISOString, from)
}
