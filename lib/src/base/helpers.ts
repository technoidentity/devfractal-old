import { RouteComponentProps } from 'react-router'
import {
  ClassNameArg,
  classNames,
  CommonHelpers,
  Omit,
  ResponsiveHelpers,
  TextHelpers,
} from '../index'

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

export type CommonHelpersRemoved<T> = Omit<T, keyof CommonHelpers>

export const removeCommonHelpers: <T extends CommonHelpers>(
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

export type RouteComponentPropsRemoved<T> = Omit<T, keyof RouteComponentProps>

export const removeRouteComponentProps: <T extends RouteComponentProps>(
  props: T,
) => RouteComponentPropsRemoved<T> = ({
  match,
  location,
  history,
  staticContext,
  ...result
}) => result

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

export type ResponsiveHelpersRemoved<T> = Omit<T, keyof ResponsiveHelpers>

export function removeResponsiveHelpers<T extends ResponsiveHelpers>(
  props: T,
): ResponsiveHelpersRemoved<T> {
  const { display, breakpoint, responsiveVisibility, ...result } = props
  return result
}

export const textHelpersClasses: (textHelpers: TextHelpers) => string = ({
  textColor,
  textBackgroundColor,
  textSize,
  textAlignment,
  textTransformation,
  textWeight,
  textResponsiveSize,
  textResponsiveAlignment,
}) => {
  const cnSize: string = textResponsiveSize
    ? `is-size-${textSize}-${textResponsiveSize}`
    : textSize
    ? `is-size-${textSize}`
    : ''

  const cnAlignment: string = textResponsiveAlignment
    ? `has-text-${textAlignment}-${textResponsiveAlignment}`
    : textAlignment
    ? `has-text-${textAlignment}`
    : ''

  return classNames(cnSize, cnAlignment, {
    [`has-text-${textColor}`]: textColor,
    [`has-background-${textBackgroundColor}`]: textBackgroundColor,
    [`has-text-weight-${textWeight}`]: textWeight,
    [`is-${textTransformation}`]: textTransformation,
    [`has-text-${textResponsiveAlignment}`]: textResponsiveAlignment,
  })
}

export type TextHelpersRemoved<T> = Omit<T, keyof TextHelpers>

export const removeTextHelpers: <T extends TextHelpers>(
  props: T,
) => TextHelpersRemoved<T> = ({
  textColor,
  textBackgroundColor,
  textSize,
  textAlignment,
  textTransformation,
  textWeight,
  textResponsiveSize,
  textResponsiveAlignment,
  ...result
}) => result

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
