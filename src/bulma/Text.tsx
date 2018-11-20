import * as React from 'react'
import classNames from 'classnames'

type TextSize = '1' | '2' | '3' | '4' | '5' | '6' | '7'

interface TextProps {
  readonly size: TextSize
  readonly children: React.ReactChild
  readonly inline?: boolean
}

export const Text: React.SFC<TextProps> = ({
  size,
  children,
  inline = false,
}: TextProps) => {
  const cnSize: string = `is-size-${size}`
  const classes: string = classNames(cnSize)
  return inline ? (
    <span className={classes}>{children}</span>
  ) : (
    <div className={classes}>{children}</div>
  )
}
