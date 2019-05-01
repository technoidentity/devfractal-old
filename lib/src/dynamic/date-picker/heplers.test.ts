import {
  calenderDates,
  daysInMonth,
  firstDayOfMonth,
  nextMonth,
  previousMonth,
  toISODate,
  zeroPad,
} from './helpers'

test('zeroPad pads a string value with leading zeros until length is reached', () => {
  expect(zeroPad(1, 2)).toBe('01')
  expect(zeroPad(1, 3)).toBe('001')
  expect(zeroPad(45, 2)).toBe('45')
  expect(zeroPad(452, 2)).toBe('452')
})

describe('daysInMonth', () => {
  test('January has 31 days', () => {
    expect(daysInMonth(1, 2019)).toBe(31)
  })
  test('February in non leap year has 28 days', () => {
    expect(daysInMonth(2, 2019)).toBe(28)
  })
  test('February in a leap year has 28 days', () => {
    expect(daysInMonth(2, 2016)).toBe(29)
  })
  test('April has 30 days', () => {
    expect(daysInMonth(4, 2016)).toBe(30)
  })
})

test('firstDayOfMonth', () => {
  expect(firstDayOfMonth(3, 2019)).toBe(6)
  expect(firstDayOfMonth(4, 2019)).toBe(2)
  expect(firstDayOfMonth(2, 2019)).toBe(6)
  expect(firstDayOfMonth(1, 2018)).toBe(2)
})

test('toISODate', () => {
  expect(toISODate(new Date(2019, 1, 1))).toBe('2019-02-01')
  expect(toISODate(new Date(2019, 0, 1))).toBe('2019-01-01')
  expect(toISODate(new Date(2019, 11, 1))).toBe('2019-12-01')
})

test('getPreviousMonth', () => {
  expect(previousMonth(1, 2019)).toMatchObject({ month: 12, year: 2018 })
  expect(previousMonth(4, 2019)).toMatchObject({ month: 3, year: 2019 })
  expect(previousMonth(12, 2019)).toMatchObject({ month: 11, year: 2019 })
})

test('get next month and year for given month and year ', () => {
  expect(nextMonth(12, 2018)).toMatchObject({ month: 1, year: 2019 })
  expect(nextMonth(4, 2019)).toMatchObject({ month: 5, year: 2019 })
  expect(nextMonth(1, 2019)).toMatchObject({ month: 2, year: 2019 })
})

describe('Calendar dates for a month in the specified year', () => {
  test('calendar days for march 2019', () => {
    expect(calenderDates(3, 2019)).toEqual([
      [2019, '02', '24'],
      [2019, '02', '25'],
      [2019, '02', '26'],
      [2019, '02', '27'],
      [2019, '02', '28'],
      [2019, '03', '01'],
      [2019, '03', '02'],
      [2019, '03', '03'],
      [2019, '03', '04'],
      [2019, '03', '05'],
      [2019, '03', '06'],
      [2019, '03', '07'],
      [2019, '03', '08'],
      [2019, '03', '09'],
      [2019, '03', '10'],
      [2019, '03', '11'],
      [2019, '03', '12'],
      [2019, '03', '13'],
      [2019, '03', '14'],
      [2019, '03', '15'],
      [2019, '03', '16'],
      [2019, '03', '17'],
      [2019, '03', '18'],
      [2019, '03', '19'],
      [2019, '03', '20'],
      [2019, '03', '21'],
      [2019, '03', '22'],
      [2019, '03', '23'],
      [2019, '03', '24'],
      [2019, '03', '25'],
      [2019, '03', '26'],
      [2019, '03', '27'],
      [2019, '03', '28'],
      [2019, '03', '29'],
      [2019, '03', '30'],
      [2019, '03', '31'],
      [2019, '04', '01'],
      [2019, '04', '02'],
      [2019, '04', '03'],
      [2019, '04', '04'],
      [2019, '04', '05'],
      [2019, '04', '06'],
    ])
  })

  test('calendar days for january 2019', () => {
    expect(calenderDates(1, 2019)).toEqual([
      [2018, '12', '30'],
      [2018, '12', '31'],
      [2019, '01', '01'],
      [2019, '01', '02'],
      [2019, '01', '03'],
      [2019, '01', '04'],
      [2019, '01', '05'],
      [2019, '01', '06'],
      [2019, '01', '07'],
      [2019, '01', '08'],
      [2019, '01', '09'],
      [2019, '01', '10'],
      [2019, '01', '11'],
      [2019, '01', '12'],
      [2019, '01', '13'],
      [2019, '01', '14'],
      [2019, '01', '15'],
      [2019, '01', '16'],
      [2019, '01', '17'],
      [2019, '01', '18'],
      [2019, '01', '19'],
      [2019, '01', '20'],
      [2019, '01', '21'],
      [2019, '01', '22'],
      [2019, '01', '23'],
      [2019, '01', '24'],
      [2019, '01', '25'],
      [2019, '01', '26'],
      [2019, '01', '27'],
      [2019, '01', '28'],
      [2019, '01', '29'],
      [2019, '01', '30'],
      [2019, '01', '31'],
      [2019, '02', '01'],
      [2019, '02', '02'],
      [2019, '02', '03'],
      [2019, '02', '04'],
      [2019, '02', '05'],
      [2019, '02', '06'],
      [2019, '02', '07'],
      [2019, '02', '08'],
      [2019, '02', '09'],
    ])
  })
})
