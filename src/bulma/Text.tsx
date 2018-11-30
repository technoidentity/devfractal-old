import * as React from 'react'
import classNames from 'classnames'

type TextSize = '1' | '2' | '3' | '4' | '5' | '6' | '7'

type TextFontFamily =
  | 'sans-serif'
  | 'monospace'
  | 'primary'
  | 'secondary'
  | 'code'

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

interface TextProps {
  readonly color?: TextColor
  readonly size?: TextSize
  readonly alignment?: TextAlignment
  readonly transformation?: TextTransformation
  readonly weight?: TextWeight
  readonly fontFamily?: TextFontFamily
  readonly responsiveSize?: TextResponsiveSize
  readonly responsiveAlignment?: TextResponsiveAlignment
}

export const Text: React.SFC<TextProps> = ({
  color,
  size,
  alignment,
  transformation,
  weight,
  fontFamily,
  responsiveSize,
  responsiveAlignment,
  children,
}) => {
  const cnSize: string = responsiveSize
    ? `is-size-${size}-${responsiveSize}`
    : `is-size-${size}`

  const cnAlignment: string = responsiveAlignment
    ? `has-text-${alignment}-${responsiveAlignment}`
    : `has-text-${alignment}`

  const classes: string = classNames(cnSize, cnAlignment, {
    [`has-text-${color}`]: color,
    [`has-text-${weight}`]: weight,
    [`is-${transformation}`]: transformation,
    [`is-family-${fontFamily}`]: fontFamily,
    [`has-text-${alignment}`]: alignment,
  })
  return <span className={classes}>{children}</span>
}
