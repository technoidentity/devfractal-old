import { classNames } from '../../utils/classNames'
import { ClassNameArg } from '../../utils/classNames'
import {
  CommonHelpers,
  commonHelpersClasses,
  CommonHelpersRemoved,
  removeCommonHelpers,
} from './commonHelpers'
import {
  removeResponsiveHelpers,
  responsiveClass,
  ResponsiveHelpers,
  ResponsiveHelpersRemoved,
} from './responsiveHelpers'
import {
  removeTextHelpers,
  TextHelpers,
  textHelpersClasses,
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
