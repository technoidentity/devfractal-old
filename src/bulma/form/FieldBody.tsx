import * as React from 'react'

import classNames from 'classnames'

import { Helpers, removeHelpers, helpersClasses } from '../modifiers'

export interface FieldBodyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const FieldBody: React.SFC<FieldBodyProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'field-body',
    className,
    helpersClasses(props),
  )

  return (
    <div {...removeHelpers(props)} className={classes}>
      {children}
    </div>
  )
}
