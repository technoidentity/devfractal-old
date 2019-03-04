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

export const calendarWeeks: number = 6

export const zeroPad: (value: number, length: number) => string = (
  value: number,
  length: number,
) => `${value}`.padStart(length, '0')

export const daysInMonth: (month?: number, year?: number) => number = (
  month = currentYear(),
  year = currentMonth(),
) => new Date(year, month, 0).getDate()

export const firstDayOfMonth: (month?: number, year?: number) => number = (
  month = currentMonth(),
  year = currentYear(),
) => new Date(`${year}-${zeroPad(month, 2)}-01`).getDay() + 1

export const isDate: (date: Date) => boolean = (date: Date) => {
  const isDate: boolean =
    Object.prototype.toString.call(date) === '[object Date]'
  const isValidDate: boolean = date && !Number.isNaN(date.valueOf())

  return isDate && isValidDate
}

export const isSameMonth: (date: Date, baseDate?: Date) => boolean = (
  date: Date,
  baseDate = new Date(),
) => {
  if (!(isDate(date) && isDate(baseDate))) {
    return false
  } else {
    const baseDateMonth: number = baseDate.getMonth() + 1
    const baseDateYear: number = baseDate.getFullYear()

    const dateMonth: number = date.getMonth() + 1
    const dateYear: number = date.getFullYear()

    return baseDateMonth === dateMonth && baseDateYear === dateYear
  }
}

export const isSameDay: (date: Date, baseDate?: Date) => boolean = (
  date: Date,
  baseDate = new Date(),
) => {
  if (!(isDate(date) && isDate(baseDate))) {
    return false
  } else {
    const baseDateDate: number = baseDate.getDate()
    const baseDateMonth: number = baseDate.getMonth() + 1
    const baseDateYear: number = baseDate.getFullYear()

    const dateDate: number = date.getDate()
    const dateMonth: number = date.getMonth() + 1
    const dateYear: number = date.getFullYear()

    return (
      baseDateDate === dateDate &&
      baseDateMonth === dateMonth &&
      baseDateYear === dateYear
    )
  }
}

export const toISODate: (date?: Date) => string | undefined = (
  date = new Date(),
) => {
  return isDate(date)
    ? [
        date.getFullYear(),
        zeroPad(+date.getMonth() + 1, 2),
        zeroPad(+date.getDate(), 2),
      ].join('-')
    : undefined
}

export const previousMonth: (
  month: number,
  year: number,
) => {
  readonly month: number
  readonly year: number
} = (month: number, year: number) => {
  const prevMonth: number = month > 1 ? month - 1 : 12
  const prevMonthYear: number = month > 1 ? year : year - 1

  return { month: prevMonth, year: prevMonthYear }
}

export const nextMonth: (
  month: number,
  year: number,
) => {
  readonly month: number
  readonly year: number
} = (month: number, year: number) => {
  const nextMonth: number = month < 12 ? month + 1 : 1
  const nextMonthYear: number = month < 12 ? year : year + 1

  return { month: nextMonth, year: nextMonthYear }
}

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
