import {
  BooleanFromString,
  DateFromISOString,
  IntFromString,
  NumberFromString,
} from './iots'
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
