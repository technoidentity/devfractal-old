import {
  getDate,
  getDaysInMonth,
  getISOYear,
  getMonth,
  isDate,
  isValid,
} from 'date-fns'
import { range } from '../../lib'

export function currentYear(): number {
  return new Date().getFullYear()
}

export function currentMonth(): number {
  return new Date().getMonth() + 1
}

export const calendarMonths: ReadonlyArray<string> = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export const weekDays: ReadonlyArray<string> = [
  'SUN',
  'MON',
  'TUE',
  'WED',
  'THU',
  'FRI',
  'SAT',
]

export const calendarWeeks: number = 6

export function zeroPad(value: number, length: number): string {
  return `${value}`.padStart(length, '0')
}

export function daysInMonth(month: number, year: number): number {
  return getDaysInMonth(new Date(year, month - 1))
}

export function firstDayOfMonth(month: number, year: number): number {
  return new Date(`${year}-${zeroPad(month, 2)}-01`).getDay() + 1
}

export function isValidDate(date: Date): boolean {
  return isDate(date) && isValid(date)
}

export function toISODate(date: Date): string | undefined {
  return isValidDate(date)
    ? [
        getISOYear(date),
        zeroPad(getMonth(date) + 1, 2),
        zeroPad(getDate(date), 2),
      ].join('-')
    : undefined
}

export const previousMonth: (
  month: number,
  year: number,
) => {
  readonly month: number
  readonly year: number
} = (month, year) => ({
  month: month > 1 ? month - 1 : 12,
  year: month > 1 ? year : year - 1,
})

export const nextMonth: (
  month: number,
  year: number,
) => {
  readonly month: number
  readonly year: number
} = (month, year) => ({
  month: month < 12 ? month + 1 : 1,
  year: month < 12 ? year : year + 1,
})

export const calenderDates: (
  month?: number,
  year?: number,
) => ReadonlyArray<ReadonlyArray<string | number>> = (
  month = currentMonth(),
  year = currentYear(),
) => {
  const dim: number = daysInMonth(month, year)
  const firstDay: number = firstDayOfMonth(month, year)

  const daysFromPrevMonth: number = firstDay - 1

  const { month: prevMonth, year: prevYear } = previousMonth(month, year)
  const { month: nxtMonth, year: nxtYear } = nextMonth(month, year)

  const previousMonthDates: Array<Array<string | number>> = Array.from(
    Array(daysFromPrevMonth).keys(),
  ).map(index => [
    prevYear,
    zeroPad(prevMonth, 2),
    zeroPad(
      index + 1 + (daysInMonth(prevMonth, prevYear) - daysFromPrevMonth),
      2,
    ),
  ])

  const currentMonthDates: Array<Array<string | number>> = Array.from(
    Array(dim).keys(),
  ).map(index => [year, zeroPad(month, 2), zeroPad(index + 1, 2)])

  const daysFromNextMonth: number =
    calendarWeeks * 7 - (dim + daysFromPrevMonth)

  const nextMonthDates: Array<Array<string | number>> = range(
    daysFromNextMonth,
  ).map(i => [nxtYear, zeroPad(nxtMonth, 2), zeroPad(i + 1, 2)])

  return [...previousMonthDates, ...currentMonthDates, ...nextMonthDates]
}
