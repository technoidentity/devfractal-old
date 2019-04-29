import {
  removeTextHelpers,
  TextHelpers,
  textHelpersClasses,
  TextHelpersRemoved,
} from 'base'
import { ClassNameArg, classNames, Omit } from 'utils'

interface CommonHelpers {
  readonly floating?: 'clearfix' | 'pulled-left' | 'pulled-right'
  readonly marginLess?: boolean
  readonly paddingLess?: boolean
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
  clipped,
  radiusLess,
  shadowLess,
  unSelectable,
  invisible,
  srOnly,
}) =>
  classNames({
    [`is-${floating}`]: floating,
    'is-marginless': marginLess,
    'is-paddingless': paddingLess,
    'is-clipped': clipped,
    'is-radiusless': radiusLess,
    'is-shadowless': shadowLess,
    'is-unselectable': unSelectable,
    'is-invisible': invisible,
    'is-sr-only': srOnly,
  })

type CommonHelpersRemoved<T> = Omit<T, keyof CommonHelpers>

const removeCommonHelpers: <T extends CommonHelpers>(
  props: T,
) => CommonHelpersRemoved<T> = ({
  floating,
  marginLess,
  paddingLess,
  clipped,
  radiusLess,
  shadowLess,
  unSelectable,
  invisible,
  srOnly,
  ...result
}) => result

type Display = 'block' | 'flex' | 'inline' | 'inline-block' | 'inline-flex'

type ResponsiveModifier =
  | 'mobile'
  | 'tablet-only'
  | 'desktop-only'
  | 'widescreen-only'
  | 'touch'
  | 'tablet'
  | 'desktop'
  | 'widescreen'
  | 'fullhd'

interface ResponsiveHelpers {
  readonly display?: Display
  readonly breakpoint?: ResponsiveModifier
  readonly responsiveVisibility?: boolean
}

export const responsiveClass: (helpers: ResponsiveHelpers) => string = ({
  display,
  breakpoint,
  responsiveVisibility,
}) => {
  const hiddenClass: string = responsiveVisibility
    ? `-${responsiveVisibility}`
    : ''
  const breakpointClass: string = breakpoint ? `-${breakpoint}` : ''

  return display ? `${display}${hiddenClass}${breakpointClass}` : ''
}

type ResponsiveHelpersRemoved<T> = Omit<T, keyof ResponsiveHelpers>

function removeResponsiveHelpers<T extends ResponsiveHelpers>(
  props: T,
): ResponsiveHelpersRemoved<T> {
  const { display, breakpoint, responsiveVisibility, ...result } = props
  return result
}

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
