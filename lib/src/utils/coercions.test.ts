import { toBoolean, toDate, toNumber } from 'utils'

it('Boolean from string', () => {
  expect(toBoolean('true')).toBe(true)
  expect(toBoolean('false')).toBe(false)
  expect(() => toBoolean('hello')).toThrow()
  expect(() => toBoolean('10')).toThrow()
})

it('Number from string', () => {
  expect(toNumber('1.1')).toBe(1.1)
  expect(toNumber('0.25')).toBe(0.25)
  expect(toNumber('1000')).toBe(1000)
  expect(toNumber('-1')).toBe(-1)
  expect(toNumber('0')).toBe(0)
  expect(() => toNumber('helo')).toThrow()
})

it('Date from ISOstring', () => {
  expect(toDate('1973, 11 ,30')).toEqual(new Date(1973, 10, 30))
  expect(toDate('1960,6,2')).toEqual(new Date(1960, 5, 2))
  expect(toDate('1913,1,24')).toEqual(new Date(1912, 12, 24))
  expect(() => toDate('helo')).toThrow()
})
