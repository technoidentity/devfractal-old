import React from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'
import { Label } from './Label'

type FieldLabelSize = 'small' | 'normal' | 'medium' | 'large'

export interface FieldLabelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly fieldLabelSize?: FieldLabelSize
}

export const FieldLabel: React.SFC<FieldLabelProps> = ({
  children,
  fieldLabelSize,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'field-label', {
    [`is-${fieldLabelSize}`]: fieldLabelSize,
  })
  return (
    <Div {...props} className={classes}>
      <Label>{children}</Label>
    </Div>
  )
}
