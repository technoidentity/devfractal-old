import { brand, BrandC, Branded } from 'io-ts'
import { date, DateC } from 'io-ts-types/lib/date'
export interface TimeOnlyBrand {
  readonly TimeOnly: unique symbol
}

export const TimeOnly: BrandC<DateC, TimeOnlyBrand> = brand(
  date,
  (n): n is Branded<Date, TimeOnlyBrand> => date.is(n),
  'TimeOnly',
)

export type TimeOnly = Branded<Date, TimeOnlyBrand>
