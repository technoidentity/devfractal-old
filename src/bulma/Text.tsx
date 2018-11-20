import * as React from 'react'
import classNames from 'classnames'

type TextSize = '1' | '2' | '3' | '4' | '5' | '6' | '7'

interface TextProps {
  readonly size: TextSize
  readonly children: React.ReactChild
}

export const Text: React.SFC<TextProps> = (props: TextProps) => {
  const size: string = `is-size-${props.size}`
  const classes: string = classNames(size)
  return <div className={classes}>{props.children}</div>
}
