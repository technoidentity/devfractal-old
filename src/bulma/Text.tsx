import * as React from 'react'
import classNames from 'classnames'

type TextSize = '1' | '2' | '3' | '4' | '5' | '6' | '7'

type TextResponsiveSize =
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

interface TextProps {
  readonly size: TextSize
  readonly color?: TextColor
  readonly responsiveSize?: TextResponsiveSize
  readonly children: React.ReactChild
  readonly inline?: boolean
}

export const Text: React.SFC<TextProps> = ({
  size,
  responsiveSize,
  color,
  children,
  inline = false,
}) => {
  const cnSize: string = responsiveSize
    ? `is-size-${size}-${responsiveSize}`
    : `is-size-${size}`

  const classes: string = classNames(cnSize, {
    [`has-text-${color}`]: color,
  })
  return inline ? (
    <span className={classes}>{children}</span>
  ) : (
    <div className={classes}>{children}</div>
  )
}
