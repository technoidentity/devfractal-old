import {
  camelCaseToHyphenated,
  camelCaseToPhrase,
  camelCaseToSpaced,
  chop,
  extractSegment,
  toLower,
} from '../lib'
import { capitalize, capitalizeAll } from './stringUtils'

it('test for capitalize', () => {
  expect(capitalize('userName')).toBe('UserName')
  expect(capitalize('')).toBe('')
  expect(capitalize('helloworld')).toBe('Helloworld')
  expect(capitalize('Email')).toBe('Email')
})

it('test for capitalizeAll', () => {
  expect(capitalizeAll('user Name')).toBe('User Name')
  expect(capitalizeAll('hello world')).toBe('Hello World')
  expect(capitalizeAll('')).toBe('')
  expect(capitalizeAll('HEllo')).toBe('HEllo')
})

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
