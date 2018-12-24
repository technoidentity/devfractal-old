import React from 'react'

import { Helpers, classNamesHelper, Div } from '../modifiers'

export interface FieldBodyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const FieldBody: React.SFC<FieldBodyProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'field-body')

  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}
