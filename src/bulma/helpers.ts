import classNames from 'classnames'

export interface Helpers {
  readonly floating?: 'clearfix' | 'pulled-left' | 'pulled-right'
  readonly marginLess?: boolean
  readonly paddingLess?: boolean
  readonly overlay?: boolean
  readonly clipped?: boolean
  readonly radiusLess?: boolean
  readonly shadowLess?: boolean
  readonly unSelectable?: boolean
  readonly invisible?: boolean
  readonly srOnly?: boolean
}

export const helpersClasses: (helpers: Helpers) => string = helpers =>
  classNames({
    [`is-${helpers.floating}`]: helpers.floating,
    [`is-margin-less`]: helpers.marginLess,
    [`is-padding-less}`]: helpers.paddingLess,
    [`is-overlay`]: helpers.overlay,
    [`is-clipped`]: helpers.clipped,
    [`is-radius-less}`]: helpers.radiusLess,
    [`is-shadow-less`]: helpers.shadowLess,
    [`is-unselectable`]: helpers.unSelectable,
    [`is-invisible`]: helpers.invisible,
    [`is-sr-only}`]: helpers.srOnly,
  })

export type Display =
  | 'block'
  | 'flex'
  | 'inline'
  | 'inline-block'
  | 'inline-flex'

export type ResponsiveModifier =
  | 'mobile'
  | 'tablet-only'
  | 'desktop-only'
  | 'widescreen-only'
  | 'touch'
  | 'tablet'
  | 'desktop'
  | 'widescreen'
  | 'fullhd'

export const responsiveClass: (
  display: Display,
  breakpoint?: ResponsiveModifier,
  hidden?: boolean,
) => string = (display, breakpoint, hidden = false) => {
  const hiddenClass: string = hidden ? `-${hidden}` : ''
  const breakpointClass: string = breakpoint ? `-${breakpoint}` : ''

  return `${display}${hiddenClass}${breakpointClass}`
}
