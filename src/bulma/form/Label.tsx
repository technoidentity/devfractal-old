import * as React from 'react'

import { Helpers, removeHelpers, classNamesHelper, Div } from '../modifiers'

export type LabelSize = 'small' | 'medium' | 'large'

interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    Helpers {
  readonly size?: LabelSize
}

export const Label: React.SFC<LabelProps> = ({ size, children, ...props }) => {
  const classes: string = classNamesHelper(props, 'label', {
    [`is-${size}`]: size,
  })

  return (
    <Div as="label" {...removeHelpers(props)} className={classes}>
      {children}
    </Div>
  )
}
