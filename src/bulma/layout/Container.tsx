import React from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly breakpoint?: 'widescreen' | 'fullhd'
  readonly fluid?: boolean
}

export const Container: React.SFC<ContainerProps> = ({
  children,
  fluid,
  breakpoint,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'container', {
    ['is-fluid']: fluid,
    [`is-${breakpoint}`]: breakpoint,
  })

  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}
