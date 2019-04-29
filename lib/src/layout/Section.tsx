import { classNamesHelper, Div, Helpers } from 'base'
import React from 'react'

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
    <Div as="section" {...props} className={classes}>
      {children}
    </Div>
  )
}

// tslint:disable-next-line: no-default-export
export default Section
