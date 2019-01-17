import {
  camelCaseToHyphenated,
  camelCaseToLower,
  camelCaseToPhrase,
  camelCaseToSpaced,
  chop,
  extractSegment,
} from './stringUtils'

it('test for camelCaseToLower', () => {
  expect(camelCaseToLower('userName', '/')).toBe('user/name')
  expect(camelCaseToLower('user', '/')).toBe('user')
  expect(camelCaseToLower('', '/')).toBe('')
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
  expect(chop('tesla/')).toBe('tesla')
  expect(chop('hello')).toBe('hello')
  expect(chop('/hello')).toBe('/hello')
  expect(chop('/hello / world')).toBe('/hello / world')
  expect(chop('')).toBe('')
})

it('test for extractSegment', () => {
  expect(extractSegment('/hello / world-foo / bar', 8, '/')).toBe('world-foo')
  expect(extractSegment('/hello / world-foo', 8, '/')).toBe('world-foo')
  expect(extractSegment('/hello / world-foo', 0, '/')).toBe('')
  expect(extractSegment('/hello / world-foo', 1, '/')).toBe('hello')
})
