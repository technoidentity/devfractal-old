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
    [`is-marginless`]: helpers.marginLess,
    [`is-paddingless}`]: helpers.paddingLess,
    [`is-overlay`]: helpers.overlay,
    [`is-clipped`]: helpers.clipped,
    [`is-radiusless}`]: helpers.radiusLess,
    [`is-shadowless`]: helpers.shadowLess,
    [`is-unselectable`]: helpers.unSelectable,
    [`is-invisible`]: helpers.invisible,
    [`is-sr-only}`]: helpers.srOnly,
  })

export type HelpersRemoved<T> = Pick<T, Exclude<keyof T, keyof Helpers>>

export function removeHelpers<T extends Helpers>(props: T): HelpersRemoved<T> {
  const {
    floating,
    marginLess,
    paddingLess,
    overlay,
    clipped,
    radiusLess,
    shadowLess,
    unSelectable,
    invisible,
    srOnly,
    ...result
  } = props
  return result
}

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
