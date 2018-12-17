import classNames from 'classnames'

import {
  commonHelpersClasses,
  removeCommonHelpers,
  CommonHelpers,
} from './commonHelpers'

import {
  responsiveClass,
  removeResponsiveHelpers,
  ResponsiveHelpers,
} from './responsiveHelpers'

import {
  textHelpersClasses,
  removeTextHelpers,
  TextHelpers,
} from './textHelpers'

interface Helpers extends CommonHelpers, ResponsiveHelpers, TextHelpers {}

export const helpersClasses: (helpers: Helpers) => string = helpers =>
  classNames(
    commonHelpersClasses(helpers),
    responsiveClass(helpers),
    textHelpersClasses(helpers),
  )

// tslint:disable-next-line:typedef
export function removeHelpers<T extends Helpers>(props: T) {
  return removeCommonHelpers(removeResponsiveHelpers(removeTextHelpers(props)))
}

export type HelpersRemoved = ReturnType<typeof removeHelpers>
