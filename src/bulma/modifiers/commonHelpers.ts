import classNames from 'classnames'

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

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

export const commonHelpersClasses: (helpers: CommonHelpers) => string = ({
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
}) =>
  classNames({
    [`is-${floating}`]: floating,
    [`is-marginless`]: marginLess,
    [`is-paddingless}`]: paddingLess,
    [`is-overlay`]: overlay,
    [`is-clipped`]: clipped,
    [`is-radiusless}`]: radiusLess,
    [`is-shadowless`]: shadowLess,
    [`is-unselectable`]: unSelectable,
    [`is-invisible`]: notVisible,
    [`is-sr-only}`]: srOnly,
  })

export type CommonHelpersRemoved<T> = Omit<T, keyof CommonHelpers>

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
