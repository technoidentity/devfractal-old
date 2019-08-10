import React from 'react'
import { Helpers, removeHelpers } from './helpers'

export interface DivProps
  extends React.AllHTMLAttributes<HTMLElement>,
    Helpers {
  readonly as?: keyof React.ReactHTML
}

export function El({ as = 'div', className, ...props }: DivProps): JSX.Element {
  return React.createElement(as, { ...removeHelpers(props), className })
}
