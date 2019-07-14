import {
  camelCaseToHyphenated,
  camelCaseToPhrase,
  camelCaseToSpaced,
  capitalize,
  capitalizeAll,
  chop,
  extractSegment,
  toLower,
} from './stringUtils'

it('capitalize', () => {
  expect(capitalize('')).toEqual('')
  expect(capitalize('hello world')).toEqual('Hello world')
  expect(capitalize('helloWorld')).toEqual('HelloWorld')
  expect(capitalize('Helloworld')).toEqual('Helloworld')
})

it('capitalize', () => {
  expect(capitalizeAll('')).toEqual('')
  expect(capitalizeAll('hello world')).toEqual('Hello World')
  expect(capitalizeAll('helloWorld')).toEqual('HelloWorld')
  expect(capitalizeAll('helloworld')).toEqual('Helloworld')
})

it('camelCase toLower', () => {
  expect(toLower('userName', '-')).toBe('user-name')
  expect(toLower('HelloWorld', '-')).toBe('hello-world')
  expect(toLower('helloWorld', '-')).toBe('hello-world')
  expect(toLower('Hello', '/')).toBe('hello')
  expect(toLower('user', '/')).toBe('user')
  expect(toLower('', '/')).toBe('')
})

it('camelCase toPhrase', () => {
  expect(camelCaseToPhrase('userName')).toBe('User name')
  expect(camelCaseToPhrase('emailAlongWithPassword')).toBe(
    'Email along with password',
  )
  expect(camelCaseToPhrase('')).toBe('')
})

it('camelCase toHyphenated', () => {
  expect(camelCaseToHyphenated('fooBarBaz')).toBe('foo-bar-baz')
  expect(camelCaseToHyphenated('foo')).toBe('foo')
  expect(camelCaseToHyphenated('')).toBe('')
})

it('camelCase toSpaced', () => {
  expect(camelCaseToSpaced('fooBarBaz')).toBe('foo bar baz')
  expect(camelCaseToSpaced('foo')).toBe('foo')
  expect(camelCaseToSpaced('')).toBe('')
})

it('chop function', () => {
  expect(chop('tesla/', '/')).toBe('tesla')
  expect(chop('hello', '-')).toBe('hello')
  expect(chop('/hello', '-')).toBe('/hello')
  expect(chop('/hello / world', '/')).toBe('/hello / world')
  expect(chop('', '')).toBe('')
})

it('extractSegment', () => {
  expect(extractSegment('/hello / world-foo / bar', 8, '/')).toBe('world-foo')
  expect(extractSegment('/hello / world-foo', 8, '/')).toBe('world-foo')
  expect(extractSegment('/hello / world-foo', 0, '/')).toBe('')
  expect(extractSegment('/hello / world-foo', 1, '/')).toBe('hello')
  expect(extractSegment('//form//checkbox', '//form'.length + 2, '//')).toBe(
    'checkbox',
  )
})
