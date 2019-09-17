import { brand, BrandC, Branded } from 'io-ts'
import { date, DateC } from 'io-ts-types/lib/date'

export interface DateOnlyBrand {
  readonly DateOnly: unique symbol
}

export const DateOnly: BrandC<DateC, DateOnlyBrand> = brand(
  date,
  (n): n is Branded<Date, DateOnlyBrand> => date.is(n),
  'DateOnly',
)

export type DateOnly = Branded<Date, DateOnlyBrand>
