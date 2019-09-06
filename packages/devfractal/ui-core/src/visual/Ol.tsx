import React from 'react'
import { classNamesHelper, El, Helpers } from '../base'

type OlModifier = 'lower-alpha' | 'lower-roman' | 'upper-alpha' | 'upper-roman'

export interface OlProps
  extends React.OlHTMLAttributes<HTMLOListElement>,
    Helpers {
  /**
   * different types of items markers
   */
  readonly modifier?: OlModifier
}

export const Ol: React.FC<OlProps> = ({ modifier, children, ...props }) => {
  const classes: string = classNamesHelper(props, {
    [`is-${modifier}`]: modifier,
  })
  return (
    <El as="ol" {...props} className={classes}>
      {children}
    </El>
  )
}
