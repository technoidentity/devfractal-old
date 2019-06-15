import React, { OlHTMLAttributes } from 'react'
import { classNamesHelper, Div, Helpers } from '../lib'

type OlModifier = 'lower-alpha' | 'lower-roman' | 'upper-alpha' | 'upper-roman'

export interface OlProps extends OlHTMLAttributes<HTMLOListElement>, Helpers {
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
    <Div as="ol" {...props} className={classes}>
      {children}
    </Div>
  )
}

// tslint:disable-next-line: no-default-export
export default Ol
