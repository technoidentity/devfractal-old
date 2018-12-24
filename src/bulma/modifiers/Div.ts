import React from 'react'
import { removeHelpers, Helpers } from '.'

interface DivProps extends React.AllHTMLAttributes<HTMLElement>, Helpers {
  readonly as?: keyof React.ReactHTML
}

export const Div: React.SFC<DivProps> = ({
  as = 'div',
  className,
  children,
  ...props
}) => React.createElement(as, { ...removeHelpers(props), className }, children)
