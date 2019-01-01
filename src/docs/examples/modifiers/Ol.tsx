import React, { OlHTMLAttributes } from 'react'
import { classNamesHelper, Div, Helpers } from '../../../devfractal/modifiers'

type OlModifier = 'lower-alpha' | 'lower-roman' | 'upper-alpha' | 'upper-roman'

export interface OlProps extends OlHTMLAttributes<HTMLOListElement>, Helpers {
  readonly modifier?: OlModifier
}

export const Ol: React.SFC<OlProps> = ({ modifier, children, ...props }) => {
  const classes: string = classNamesHelper(props, {
    [`is-${modifier}`]: modifier,
  })
  return (
    <Div as="ol" {...props} className={classes}>
      {children}
    </Div>
  )
}
