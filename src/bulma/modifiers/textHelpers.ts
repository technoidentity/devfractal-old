import classNames from 'classnames'
import { Omit } from '../../types'

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
    [`has-text-${textWeight}`]: textWeight,
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
