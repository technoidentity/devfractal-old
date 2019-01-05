import {
  camelCaseToHyphenated,
  camelCaseToLower,
  camelCaseToPhrase,
  camelCaseToSpaced,
} from './camelCaseToPhrase'

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
