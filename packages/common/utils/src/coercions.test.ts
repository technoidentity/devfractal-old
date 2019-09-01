import { toBoolean, toDate, toInt, toNumber } from './coercions'

describe('coercions from string', () => {
  it('to Boolean', () => {
    expect(toBoolean('true')).toBe(true)
    expect(toBoolean('false')).toBe(false)
    expect(() => toBoolean('hello')).toThrow()
    expect(() => toBoolean('10')).toThrow()
    expect(() => toBoolean('')).toThrow()
  })

  it('to Number', () => {
    expect(toNumber('1.1')).toBe(1.1)
    expect(toNumber('0.25')).toBe(0.25)
    expect(toNumber('1000')).toBe(1000)
    expect(toNumber('-1')).toBe(-1)
    expect(toNumber('0')).toBe(0)
    expect(() => toNumber('hello')).toThrow()
    expect(() => toNumber('')).toThrow()
  })

  it('to Int', () => {
    expect(toInt('0')).toBe(0)
    expect(toInt('1')).toBe(1)
    expect(toInt('1000')).toBe(1000)
    expect(toInt('-1')).toBe(-1)
    expect(() => toInt('0.25')).toThrow()
    expect(() => toInt('hello')).toThrow()
    expect(() => toInt('')).toThrow()
  })

  it('to Date from ISO string', () => {
    expect(toDate('1973, 11 ,30')).toEqual(new Date(1973, 10, 30))
    expect(toDate('1960,6,2')).toEqual(new Date(1960, 5, 2))
    expect(toDate('1913,1,24')).toEqual(new Date(1913, 0, 24))
    expect(() => toDate('hello')).toThrow()
    expect(() => toDate('')).toThrow()
  })
})
