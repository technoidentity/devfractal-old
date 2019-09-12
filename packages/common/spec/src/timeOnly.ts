import { brand, Branded } from 'io-ts'
import { date } from 'io-ts-types/lib/date'
export interface TimeOnlyBrand {
  readonly TimeOnly: unique symbol
}

// tslint:disable-next-line: typedef
export const TimeOnly = brand(
  date,
  (n): n is Branded<Date, TimeOnlyBrand> => date.is(n),
  'TimeOnly',
)

export type TimeOnly = Branded<Date, TimeOnlyBrand>
