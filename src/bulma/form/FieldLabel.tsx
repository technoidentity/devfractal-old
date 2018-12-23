import * as React from 'react'

import classNames from 'classnames'

import { Helpers, removeHelpers, helpersClasses } from '../modifiers'
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
  className,
  ...props
}) => {
  const classes: string = classNames(
    'field-label',
    [`is-${fieldLabelSize}`],
    helpersClasses(props),
    className,
  )
  return (
    <div {...removeHelpers(props)} className={classes}>
      <Label>{children}</Label>
    </div>
  )
}
