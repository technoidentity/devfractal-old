import classNames from 'classnames'
import { Omit } from '../../types'

export interface CommonHelpers {
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

export const commonHelpersClasses: (helpers: CommonHelpers) => string = ({
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
    [`is-invisible`]: invisible,
    [`is-sr-only}`]: srOnly,
  })

export type CommonHelpersRemoved<T> = Omit<T, keyof CommonHelpers>

export const removeCommonHelpers: <T extends CommonHelpers>(
  props: T,
) => CommonHelpersRemoved<T> = ({
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
}) => result
