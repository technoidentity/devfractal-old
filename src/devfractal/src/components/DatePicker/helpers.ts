export const thisYear: number = new Date().getFullYear()

export const thisMonth: number = new Date().getMonth() + 1

// tslint:disable
// ts-ignore
export const calendarMonths = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec',
}

export const caledarWeeks = 6

export const zeroPad = (value: number, length: number) =>
  `${value}`.padStart(length, '0')

export const getDaysInMonth: (month?: number, year?: number) => number = (
  month = thisMonth,
  year = thisYear,
) => new Date(year, month, 0).getDate()

export const getMonthFirstDay: (month?: number, year?: number) => number = (
  month = thisMonth,
  year = thisYear,
) => {
  return +new Date(`${year}-${zeroPad(month, 2)}-01`).getDay() + 1
}

export const isDate: (date: Date) => boolean = (date: Date) => {
  const isDate = Object.prototype.toString.call(date) === '[object Date]'
  const isValidDate = date && !Number.isNaN(date.valueOf())

  return isDate && isValidDate
}

export const isSameMonth = (date: Date, basedate = new Date()) => {
  if (!(isDate(date) && isDate(basedate))) {
    return false
  } else {
    const basedateMonth = +basedate.getMonth() + 1
    const basedateYear = basedate.getFullYear()

    const dateMonth = +date.getMonth() + 1
    const dateYear = date.getFullYear()

    return +basedateMonth === +dateMonth && +basedateYear === +dateYear
  }
}

export const isSameDay = (date: Date, basedate = new Date()) => {
  if (!(isDate(date) && isDate(basedate))) {
    return false
  } else {
    const basedateDate = basedate.getDate()
    const basedateMonth = +basedate.getMonth() + 1
    const basedateYear = basedate.getFullYear()

    const dateDate = date.getDate()
    const dateMonth = +date.getMonth() + 1
    const dateYear = date.getFullYear()

    return (
      +basedateDate === +dateDate &&
      +basedateMonth === +dateMonth &&
      +basedateYear === +dateYear
    )
  }
}

export const getDateISO: (date?: Date) => string | null = (
  date = new Date(),
) => {
  return isDate(date)
    ? [
        date.getFullYear(),
        zeroPad(+date.getMonth() + 1, 2),
        zeroPad(+date.getDate(), 2),
      ].join('-')
    : null
}

export const getPreviousMonth = (month: number, year: number) => {
  const prevMonth = month > 1 ? month - 1 : 12
  const prevMonthYear = month > 1 ? year : year - 1

  return { month: prevMonth, year: prevMonthYear }
}

export const getNextMonth = (month: number, year: number) => {
  const nextMonth = month < 12 ? month + 1 : 1
  const nextMonthYear = month < 12 ? year : year + 1

  return { month: nextMonth, year: nextMonthYear }
}

export const getCalendarDates: (
  month?: number,
  year?: number,
) => ReadonlyArray<ReadonlyArray<string | number>> = (
  month = thisMonth,
  year = thisYear,
) => {
  const monthDays = getDaysInMonth(month, year)
  const monthFirstDay = getMonthFirstDay(month, year)

  const daysFromPreviousMonth = monthFirstDay - 1
  const daysFromNextMonth =
    caledarWeeks * 7 - (monthDays + daysFromPreviousMonth)

  const { month: prevMonth, year: prevMonthYear } = getPreviousMonth(
    month,
    year,
  )
  const { month: nextMonth, year: nextMonthYear } = getNextMonth(month, year)

  const prevMonthDays = getDaysInMonth(prevMonth, prevMonthYear)

  const previousMonthDates = Array.from(
    Array(daysFromPreviousMonth).keys(),
  ).map((index: number) => {
    const day = index + 1 + (prevMonthDays - daysFromPreviousMonth)
    return [prevMonthYear, zeroPad(prevMonth, 2), zeroPad(day, 2)]
  })

  const thisMonthDates = Array.from(Array(monthDays).keys()).map(
    (index: number) => {
      const day = index + 1
      return [year, zeroPad(month, 2), zeroPad(day, 2)]
    },
  )

  const nexMonthDates = Array.from(Array(daysFromNextMonth).keys()).map(
    (index: number) => {
      const day = index + 1
      return [nextMonthYear, zeroPad(nextMonth, 2), zeroPad(day, 2)]
    },
  )
  return [...previousMonthDates, ...thisMonthDates, ...nexMonthDates]
}
