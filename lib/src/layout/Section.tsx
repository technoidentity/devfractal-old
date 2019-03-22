import React from 'react'
import { classNamesHelper, Div, Helpers } from '../index'

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {
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
    <Div as="section" {...props} className={classes}>
      {children}
    </Div>
  )
}
