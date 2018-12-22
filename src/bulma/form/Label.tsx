import * as React from 'react'
import classNames from 'classnames'
import { Helpers, helpersClasses, removeHelpers } from '../modifiers'

type Size = 'small' | 'medium' | 'large'

interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    Helpers {
  readonly size?: Size
}

export const Label: React.SFC<LabelProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('label', helpersClasses(props), className)

  return (
    <label {...removeHelpers(props)} className={classes}>
      {children}
    </label>
  )
}
