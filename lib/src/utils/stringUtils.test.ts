import {
  camelCaseToHyphenated,
  camelCaseToPhrase,
  camelCaseToSpaced,
  chop,
  extractSegment,
  range,
  toLower,
} from './index'

it('test for camelCaseToLower', () => {
  expect(toLower('userName', '-')).toBe('user-name')
  expect(toLower('HelloWorld', '-')).toBe('hello-world')
  expect(toLower('helloWorld', '-')).toBe('hello-world')
  expect(toLower('Hello', '/')).toBe('hello')
  expect(toLower('user', '/')).toBe('user')
  expect(toLower('', '/')).toBe('')
})

it('test for camelCaseToPhrase', () => {
  expect(camelCaseToPhrase('userName')).toBe('User name')
  expect(camelCaseToPhrase('emailAlongWithPassword')).toBe(
    'Email along with password',
  )
  expect(camelCaseToPhrase('')).toBe('')
})

it('test for camelCasetoHyphenated', () => {
  expect(camelCaseToHyphenated('fooBarBaz')).toBe('foo-bar-baz')
  expect(camelCaseToHyphenated('foo')).toBe('foo')
  expect(camelCaseToHyphenated('')).toBe('')
})

it('test for camelCaseToSpaced', () => {
  expect(camelCaseToSpaced('fooBarBaz')).toBe('foo bar baz')
  expect(camelCaseToSpaced('foo')).toBe('foo')
  expect(camelCaseToSpaced('')).toBe('')
})

it('test for chop function', () => {
  expect(chop('tesla/', '/')).toBe('tesla')
  expect(chop('hello', '-')).toBe('hello')
  expect(chop('/hello', '-')).toBe('/hello')
  expect(chop('/hello / world', '/')).toBe('/hello / world')
  expect(chop('', '')).toBe('')
})

it('test for extractSegment', () => {
  expect(extractSegment('/hello / world-foo / bar', 8, '/')).toBe('world-foo')
  expect(extractSegment('/hello / world-foo', 8, '/')).toBe('world-foo')
  expect(extractSegment('/hello / world-foo', 0, '/')).toBe('')
  expect(extractSegment('/hello / world-foo', 1, '/')).toBe('hello')
  expect(extractSegment('//form//checkbox', '//form'.length + 2, '//')).toBe(
    'checkbox',
  )
})

it('test for range function', () => {
  expect(range(0, 10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  expect(range(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  expect(range(0, 1)).toEqual([0])
  expect(range(2, 5)).toEqual([2, 3, 4])
  expect(range(0, -2)).toEqual([])
  expect(range(5, 10, 2)).toEqual([5, 7, 9])
  expect(range(0, 30, 5)).toEqual([0, 5, 10, 15, 20, 25])
  expect(range(0, 5, 1)).toEqual([0, 1, 2, 3, 4])
  expect(range(0, -3, 1)).toEqual([])
})
