import React from 'react'
import { classNamesHelper, El, Helpers } from '../base'

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  /**
   * The container width for each display screen
   */
  readonly breakpoint?: 'widescreen' | 'fullhd'
  /**
   * If you don't want to have a maximum width but want to keep the 32px margin on the left and right sides,add fluid
   */
  readonly fluid?: boolean
}

export const Container: React.FC<ContainerProps> = ({
  children,
  fluid,
  breakpoint,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'container', {
    'is-fluid': fluid,
    [`is-${breakpoint}`]: breakpoint,
  })

  return (
    <El {...props} className={classes}>
      {children}
    </El>
  )
}
