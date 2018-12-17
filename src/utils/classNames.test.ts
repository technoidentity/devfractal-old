import { classNames } from './classNames'

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
