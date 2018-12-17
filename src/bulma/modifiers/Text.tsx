import * as React from 'react'
import classNames from 'classnames'
import {
  CommonHelpers,
  CommonHelpersRemoved,
  removeCommonHelpers,
  commonHelpersClasses,
} from './commonHelpers'

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

type TextVariant =
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

interface TextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    CommonHelpers {
  readonly variant?: TextVariant
  readonly size?: TextSize
  readonly alignment?: TextAlignment
  readonly transformation?: TextTransformation
  readonly weight?: TextWeight
  readonly responsiveSize?: TextResponsiveSize
  readonly responsiveAlignment?: TextResponsiveAlignment
}

export const Text: React.SFC<TextProps> = ({
  variant,
  size,
  alignment,
  transformation,
  weight,
  responsiveSize,
  responsiveAlignment,
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const cnSize: string = responsiveSize
    ? `is-size-${size}-${responsiveSize}`
    : `is-size-${size}`

  const cnAlignment: string = responsiveAlignment
    ? `has-text-${alignment}-${responsiveAlignment}`
    : `has-text-${alignment}`

  const classes: string = classNames(
    cnSize,
    cnAlignment,
    {
      [`has-text-${variant}`]: variant,
      [`has-text-${weight}`]: weight,
      [`is-${transformation}`]: transformation,
      [`has-text-${alignment}`]: alignment,
    },
    className,
    commonHelpersClasses(props),
  )
  return (
    <span {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </span>
  )
}
