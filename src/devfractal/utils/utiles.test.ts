import {
  camelCaseToHyphenated,
  camelCaseToPhrase,
  camelCaseToSpaced,
  chop,
  classNames,
  extractSegment,
  range,
  toLower,
} from './internal'

// tslint:disable:no-null-keyword

it('classNames works with strings', () => {
  expect(classNames('', [''], '')).toBe('')
  expect(classNames('foo', 'bar', 'baz')).toBe('foo bar baz')
})

it('classNames for arrays', () => {
  expect(classNames([])).toBe('')
  expect(classNames(['foo', 'bar'])).toBe('foo bar')
  expect(classNames(['foo', 'bar'], [])).toBe('foo bar')
})

it('classNames works with object', () => {
  expect(classNames({})).toBe('')
  expect(classNames({ foo: true, bar: false, baz: 0, pew: 1 })).toBe('foo pew')
})

it('classNames works with array of objects', () => {
  expect(classNames({ foo: true }, { bar: true })).toBe('foo bar')
  expect(
    classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }),
  ).toBe('foo bar baz quux')
})

it('classNames works with falsy values', () => {
  expect(classNames(null, 'bar', undefined, { baz: null }, '')).toBe('bar')
})

it('classNames for complex args', () => {
  expect(
    classNames(
      'foo',
      'bar',
      {},
      [[], { x: 1, y: 0 }, 'abc', ['def', { w: 1, z: 0 }], {}],
      {
        a: true,
        b: false,
        c: [1, 2, 3] as ReadonlyArray<number>,
      },
      [],
    ),
  ).toEqual('foo bar x abc def w a c')
})

it('classNames throws for wrong arguments', () => {
  expect(() => classNames(100 as any)).toThrow()
  expect(() => classNames(false as any)).toThrow()
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
