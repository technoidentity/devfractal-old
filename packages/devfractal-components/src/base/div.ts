import React from 'react'
import { Helpers, removeHelpers } from '../lib'

export interface DivProps
  extends React.AllHTMLAttributes<HTMLElement>,
    Helpers {
  readonly as?: keyof React.ReactHTML
}

export function Div({
  as = 'div',
  className,
  ...props
}: DivProps): JSX.Element {
  return React.createElement(as, { ...removeHelpers(props), className })
}
