import { brand, Branded } from 'io-ts'
import { date } from 'io-ts-types/lib/date'

export interface DateOnlyBrand {
  readonly DateOnly: unique symbol
}

// tslint:disable-next-line: typedef
export const DateOnly = brand(
  date,
  (n): n is Branded<Date, DateOnlyBrand> => date.is(n),
  'DateOnly',
)

export type DateOnly = Branded<Date, DateOnlyBrand>
