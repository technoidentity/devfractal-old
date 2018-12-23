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
import { ClassNameArg } from '../../utils/classNames'

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

export const removeHelpers: <T extends Helpers>(
  props: T,
) => HelpersRemoved<T> = props =>
  removeCommonHelpers(removeResponsiveHelpers(removeTextHelpers(props)))

interface ClassNamesHelperPropsArg extends Helpers {
  readonly className?: string
}

export const classNamesHelper: (
  props: ClassNamesHelperPropsArg,
  ...args: ClassNameArg[]
) => string = ({ className, ...props }, ...args) =>
  classNames(...args, helpersClasses(props), className)

export { Div } from './Div'
