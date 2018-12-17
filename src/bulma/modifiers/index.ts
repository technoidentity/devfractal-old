import classNames from 'classnames'

import {
  commonHelpersClasses,
  removeCommonHelpers,
  CommonHelpers,
  CommonHelpersRemoved,
} from './commonHelpers'

import {
  responsiveClass,
  removeResponsiveHelpers,
  ResponsiveHelpers,
  ResponsiveHelpersRemoved,
} from './responsiveHelpers'

import {
  textHelpersClasses,
  removeTextHelpers,
  TextHelpers,
  TextHelpersRemoved,
} from './textHelpers'

export interface Helpers
  extends CommonHelpers,
    ResponsiveHelpers,
    TextHelpers {}

export const helpersClasses: (helpers: Helpers) => string = helpers =>
  classNames(
    commonHelpersClasses(helpers),
    responsiveClass(helpers),
    textHelpersClasses(helpers),
  )

export type HelpersRemoved<T> = CommonHelpersRemoved<
  ResponsiveHelpersRemoved<TextHelpersRemoved<T>>
>

export function removeHelpers<T extends Helpers>(props: T): HelpersRemoved<T> {
  return removeCommonHelpers(removeResponsiveHelpers(removeTextHelpers(props)))
}
