import { commonHelpersClasses, responsiveClass } from './commonHelpers'

it('helper classes', () => {
  expect(
    commonHelpersClasses({
      floating: 'pulled-left',
      marginLess: true,
      srOnly: true,
    }) === 'is-pulled-left is-marginless is-sr-only',
  )
})

it('responsiveClasses', () => {
  expect(responsiveClass('inline-flex') === 'is-inline-flex')
  expect(responsiveClass('flex', 'tablet-only') === 'is-flex-tablet-only')
  expect(
    responsiveClass('flex', 'tablet-only', true) ===
      'is-hidden-flex-tablet-only',
  )
})
