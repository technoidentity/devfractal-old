import React from 'react'
import { classNamesHelper, El, Helpers } from '../base'

type SubTitleSize = '1' | '2' | '3' | '4' | '5' | '6'

export interface SubTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    Helpers {
  /**
   * Resize the SubTitle element
   */
  readonly size?: SubTitleSize
}

export const SubTitle: React.FC<SubTitleProps> = ({
  size,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'subtitle', {
    [`is-${size}`]: size,
  })

  return (
    <El as="h1" {...props} className={classes}>
      {children}
    </El>
  )
}
