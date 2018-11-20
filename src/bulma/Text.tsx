import * as React from 'react'

type TextSize = '1' | '2' | '3' | '4' | '5' | '6' | '7'

interface TextProps {
  readonly size: TextSize
  readonly children: React.ReactChild
}

export const Text: React.SFC<TextProps> = (props: TextProps) => (
  <h1 className={`is-size-${props.size}`}>{props.children}</h1>
)
