import React from 'react'
import { Helpers, removeHelpers } from '../index'

export interface DivProps
  extends React.AllHTMLAttributes<HTMLElement>,
    Helpers {
  readonly as?: keyof React.ReactHTML
}

export const Div: React.FC<DivProps> = ({
  as = 'div',
  className,
  children,
  ...props
}) => React.createElement(as, { ...removeHelpers(props), className }, children)
