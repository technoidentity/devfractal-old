import date_fns from 'date-fns'

export const currentYear: () => number = () => new Date().getFullYear()

export const currentMonth: () => number = () => new Date().getMonth() + 1

export const calendarMonths: ReadonlyArray<String> = [
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

export const weekDays: ReadonlyArray<String> = [
  'SUN',
  'MON',
  'TUE',
  'WED',
  'THU',
  'FRI',
  'SAT',
]

export const calendarWeeks: number = 6

export const zeroPad: (value: number, length: number) => string = (
  value,
  length,
) => `${value}`.padStart(length, '0')

export const daysInMonth: (month: number, year: number) => number = (
  month,
  year,
) => date_fns.getDaysInMonth(new Date(year, month - 1))

export const firstDayOfMonth: (month: number, year: number) => number = (
  month,
  year,
) => new Date(`${year}-${zeroPad(month, 2)}-01`).getDay() + 1

export const isDate: (date: Date) => boolean = date =>
  date_fns.isDate(date) && date_fns.isValid(date)

export const isSameDay: (date: Date, baseDate?: Date) => boolean = (
  date: Date,
  baseDate = new Date(),
) => date_fns.isSameDay(date, baseDate)

export const isThisMonth: (date: Date) => boolean = (date: Date) =>
  date_fns.isThisMonth(date)

export const toISODate: (date: Date) => string | undefined = date => {
  return isDate(date)
    ? [
        date_fns.getISOYear(date),
        zeroPad(date_fns.getMonth(date) + 1, 2),
        zeroPad(date_fns.getDate(date), 2),
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
  const monthDays: number = daysInMonth(month, year)
  const monthFirstDay: number = firstDayOfMonth(month, year)

  const daysFromPreviousMonth: number = monthFirstDay - 1
  const daysFromNextMonth: number =
    calendarWeeks * 7 - (monthDays + daysFromPreviousMonth)

  const { month: prevMonth, year: prevMonthYear } = previousMonth(month, year)
  const { month: nxtMonth, year: nextMonthYear } = nextMonth(month, year)

  const prevMonthDays: number = daysInMonth(prevMonth, prevMonthYear)

  const previousMonthDates: Array<Array<string | number>> = Array.from(
    Array(daysFromPreviousMonth).keys(),
  ).map(index => [
    prevMonthYear,
    zeroPad(prevMonth, 2),
    zeroPad(index + 1 + (prevMonthDays - daysFromPreviousMonth), 2),
  ])

  const currentMonthDates: Array<Array<string | number>> = Array.from(
    Array(monthDays).keys(),
  ).map(index => [year, zeroPad(month, 2), zeroPad(index + 1, 2)])

  const nextMonthDates: Array<Array<string | number>> = Array.from(
    Array(daysFromNextMonth).keys(),
  ).map((index: number) => [
    nextMonthYear,
    zeroPad(nxtMonth, 2),
    zeroPad(index + 1, 2),
  ])

  return [...previousMonthDates, ...currentMonthDates, ...nextMonthDates]
}
