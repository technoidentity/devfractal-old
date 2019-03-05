import React from 'react'
import { classNamesHelper, Div, Helpers } from '../lib'

type SubTitleSize = '1' | '2' | '3' | '4' | '5' | '6' | '7'

export interface SubTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    Helpers {
  readonly size?: SubTitleSize
}

export const SubTitle: React.FunctionComponent<SubTitleProps> = ({
  size,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'subtitle', {
    [`is-${size}`]: size,
  })

  return (
    <Div as="h1" {...props} className={classes}>
      {children}
    </Div>
  )
}
