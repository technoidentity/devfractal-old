import classNames from 'classnames'

import { Omit } from './commonHelpers'

export type TextSize = '1' | '2' | '3' | '4' | '5' | '6' | '7'

export type TextAlignment = 'centered' | 'justified' | 'left' | 'right'

export type TextResponsiveSize =
  | 'mobile'
  | 'tablet'
  | 'touch'
  | 'desktop'
  | 'widescreen'
  | 'fullhd'

export type TextResponsiveAlignment =
  | 'mobile'
  | 'tablet'
  | 'touch'
  | 'desktop'
  | 'widescreen'
  | 'fullhd'

export type TextColor =
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

export type TextWeight = 'light' | 'normal' | 'semiBold' | 'bold'

export type TextTransformation =
  | 'capitalized'
  | 'lowercase'
  | 'uppercase'
  | 'italic'

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
  textResponsiveSize: responsiveSize,
  textResponsiveAlignment: responsiveAlignment,
}) => {
  const cnSize: string = responsiveSize
    ? `is-size-${textSize}-${responsiveSize}`
    : `is-size-${textSize}`

  const cnAlignment: string = responsiveAlignment
    ? `has-text-${responsiveAlignment}-${responsiveAlignment}`
    : `has-text-${responsiveAlignment}`

  return classNames(cnSize, cnAlignment, {
    [`has-text-${textColor}`]: textColor,
    [`has-text-${textAlignment}`]: textAlignment,
    [`has-background-${textBackgroundColor}`]: textColor,
    [`has-text-${textWeight}`]: textWeight,
    [`is-${textTransformation}`]: textTransformation,
    [`has-text-${responsiveAlignment}`]: responsiveAlignment,
  })
}

export type TextHelpersRemoved<T> = Omit<T, keyof TextHelpers>

export function removeTextHelpers<T extends TextHelpers>(
  props: T,
): TextHelpersRemoved<T> {
  const {
    textColor,
    textBackgroundColor,
    textSize,
    textAlignment,
    textTransformation,
    textWeight,
    textResponsiveSize: responsiveSize,
    textResponsiveAlignment: responsiveAlignment,
    ...result
  } = props
  return result
}
