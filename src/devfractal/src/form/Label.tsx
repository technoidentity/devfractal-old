import React from 'react'
import { classNamesHelper, Div, Helpers } from '../lib'

export type LabelSize = 'small' | 'medium' | 'large'

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    Helpers {
  readonly size?: LabelSize
}

export const Label: React.FC<LabelProps> = args => {
  const { size, children, ...props } = args

  const classes: string = classNamesHelper(props, 'label', {
    [`is-${size}`]: size,
  })

  return (
    <Div as="label" {...props} className={classes}>
      {children}
    </Div>
  )
}
