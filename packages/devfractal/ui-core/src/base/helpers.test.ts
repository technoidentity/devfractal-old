import { helpersClasses } from './helpers'

it('helper classes', () => {
  expect(
    helpersClasses({
      floating: 'pulled-left',
      marginLess: true,
      srOnly: true,
    }) === 'is-pulled-left is-marginless is-sr-only',
  )
})

it('responsiveClass', () => {
  expect(helpersClasses({ display: 'inline-flex' }) === 'is-inline-flex')
  expect(
    helpersClasses({ display: 'flex', breakpoint: 'tablet-only' }) ===
      'is-flex-tablet-only',
  )
  expect(
    helpersClasses({
      display: 'flex',
      breakpoint: 'tablet-only',
      responsiveVisibility: true,
    }) === 'is-hidden-flex-tablet-only',
  )
})
