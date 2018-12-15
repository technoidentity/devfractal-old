import classNames from 'classnames'

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
  readonly responsiveSize?: TextResponsiveSize
  readonly responsiveAlignment?: TextResponsiveAlignment
}

export const textHelpersClasses: (textHelpers: TextHelpers) => string = (
  helpers: TextHelpers,
) => {
  const cnSize: string = helpers.responsiveSize
    ? `is-size-${helpers.textSize}-${helpers.responsiveSize}`
    : `is-size-${helpers.textSize}`

  const cnAlignment: string = helpers.responsiveAlignment
    ? `has-text-${helpers.responsiveAlignment}-${helpers.responsiveAlignment}`
    : `has-text-${helpers.responsiveAlignment}`

  return classNames(cnSize, cnAlignment, {
    [`has-text-${helpers.textColor}`]: helpers.textColor,
    [`has-background-${helpers.textBackgroundColor}`]: helpers.textColor,
    [`has-text-${helpers.textWeight}`]: helpers.textWeight,
    [`is-${helpers.textTransformation}`]: helpers.textTransformation,
    [`has-text-${helpers.responsiveAlignment}`]: helpers.responsiveAlignment,
  })
}

export type TextHelpersRemoved<T> = Pick<T, Exclude<keyof T, keyof TextHelpers>>

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
    responsiveSize,
    responsiveAlignment,
    ...result
  } = props
  return result
}
