import * as React from 'react'
import classNames from 'classnames'

type TextSize = '1' | '2' | '3' | '4' | '5' | '6' | '7'

type TextResponsiveSize =
  | 'none'
  | 'mobile'
  | 'tablet'
  | 'touch'
  | 'desktop'
  | 'widescreen'
  | 'fullhd'

interface TextProps {
  readonly size: TextSize
  readonly responsiveSize?: TextResponsiveSize
  readonly children: React.ReactChild
  readonly inline?: boolean
}

export const Text: React.SFC<TextProps> = ({
  size,
  responsiveSize = 'none',
  children,
  inline = false,
}: TextProps) => {
  const cnSize: string =
    responsiveSize === 'none'
      ? `is-size-${size}`
      : `is-size-${size}-${responsiveSize}`
  const classes: string = classNames(cnSize)
  return inline ? (
    <span className={classes}>{children}</span>
  ) : (
    <div className={classes}>{children}</div>
  )
}
