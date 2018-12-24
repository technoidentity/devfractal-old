import React from 'react'

import { classNamesHelper, Div, Helpers } from '../modifiers'

export type LabelSize = 'small' | 'medium' | 'large'

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    Helpers {
  readonly size?: LabelSize
}

export const Label: React.SFC<LabelProps> = ({ size, children, ...props }) => {
  const classes: string = classNamesHelper(props, 'label', {
    [`is-${size}`]: size,
  })

  return (
    <Div as="label" {...props} className={classes}>
      {children}
    </Div>
  )
}
