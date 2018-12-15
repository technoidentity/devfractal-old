import classNames from 'classnames'

export interface CommonHelpers {
  readonly floating?: 'clearfix' | 'pulled-left' | 'pulled-right'
  readonly marginLess?: boolean
  readonly paddingLess?: boolean
  readonly overlay?: boolean
  readonly clipped?: boolean
  readonly radiusLess?: boolean
  readonly shadowLess?: boolean
  readonly unSelectable?: boolean
  readonly notVisible?: boolean
  readonly srOnly?: boolean
}

export const commonHelpersClasses: (
  helpers: CommonHelpers,
) => string = helpers =>
  classNames({
    [`is-${helpers.floating}`]: helpers.floating,
    [`is-marginless`]: helpers.marginLess,
    [`is-paddingless}`]: helpers.paddingLess,
    [`is-overlay`]: helpers.overlay,
    [`is-clipped`]: helpers.clipped,
    [`is-radiusless}`]: helpers.radiusLess,
    [`is-shadowless`]: helpers.shadowLess,
    [`is-unselectable`]: helpers.unSelectable,
    [`is-invisible`]: helpers.notVisible,
    [`is-sr-only}`]: helpers.srOnly,
  })

export type CommonHelpersRemoved<T> = Pick<
  T,
  Exclude<keyof T, keyof CommonHelpers>
>

export function removeCommonHelpers<T extends CommonHelpers>(
  props: T,
): CommonHelpersRemoved<T> {
  const {
    floating,
    marginLess,
    paddingLess,
    overlay,
    clipped,
    radiusLess,
    shadowLess,
    unSelectable,
    notVisible,
    srOnly,
    ...result
  } = props
  return result
}
