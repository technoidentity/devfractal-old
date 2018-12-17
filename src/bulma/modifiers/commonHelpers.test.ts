import { commonHelpersClasses } from './commonHelpers'
import { responsiveClass } from './responsiveHelpers'

it('helper classes', () => {
  expect(
    commonHelpersClasses({
      floating: 'pulled-left',
      marginLess: true,
      srOnly: true,
    }) === 'is-pulled-left is-marginless is-sr-only',
  )
})

it('responsiveClass', () => {
  expect(responsiveClass({ display: 'inline-flex' }) === 'is-inline-flex')
  expect(
    responsiveClass({ display: 'flex', breakpoint: 'tablet-only' }) ===
      'is-flex-tablet-only',
  )
  expect(
    responsiveClass({
      display: 'flex',
      breakpoint: 'tablet-only',
      hidden: true,
    }) === 'is-hidden-flex-tablet-only',
  )
})
