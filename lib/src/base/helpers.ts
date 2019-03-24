import { RouteComponentProps } from 'react-router'
import { ClassNameArg, classNames, Omit, TextHelpers } from '../index'

export interface CommonHelpers {
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

export interface ResponsiveHelpers {
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

export type ResponsiveHelpersRemoved<T> = Omit<T, keyof ResponsiveHelpers>

export function removeResponsiveHelpers<T extends ResponsiveHelpers>(
  props: T,
): ResponsiveHelpersRemoved<T> {
  const { display, breakpoint, responsiveVisibility, ...result } = props
  return result
}

type TextSize = '1' | '2' | '3' | '4' | '5' | '6' | '7'

type TextAlignment = 'centered' | 'justified' | 'left' | 'right'

type TextResponsiveSize =
  | 'mobile'
  | 'tablet'
  | 'touch'
  | 'desktop'
  | 'widescreen'
  | 'fullhd'

type TextResponsiveAlignment =
  | 'mobile'
  | 'tablet'
  | 'touch'
  | 'desktop'
  | 'widescreen'
  | 'fullhd'

type TextColor =
  | 'white'
  | 'black'
  | 'light'
  | 'dark'
  | 'primary'
  | 'info'
  | 'link'
  | 'success'
  | 'warning'
  | 'danger'
  | 'black-bis'
  | 'black-ter'
  | 'grey-darker'
  | 'grey-dark'
  | 'grey'
  | 'grey-light'
  | 'grey-lighter'
  | 'white-ter'
  | 'white-bis'

type TextWeight = 'light' | 'normal' | 'semiBold' | 'bold'

type TextTransformation = 'capitalized' | 'lowercase' | 'uppercase' | 'italic'

export interface TextHelpers {
  readonly textColor?: TextColor
  readonly textBackgroundColor?: TextColor
  readonly textSize?: TextSize
  readonly textAlignment?: TextAlignment
  readonly textTransformation?: TextTransformation
  readonly textWeight?: TextWeight
  readonly textResponsiveSize?: TextResponsiveSize
  readonly textResponsiveAlignment?: TextResponsiveAlignment
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
