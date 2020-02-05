import React from 'react'
import { classNamesHelper, El, Helpers } from '../base'

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {
  /**
   * To change the spacing
   */
  readonly modifier?: 'medium' | 'large'
}

export const Section: React.FC<SectionProps> = ({
  modifier,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'section', {
    [`is-${modifier}`]: modifier,
  })
  return (
    <El as="section" {...props} className={classes}>
      {children}
    </El>
  )
}
