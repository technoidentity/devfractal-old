import * as React from 'react'
import classNames from 'classnames'
import { Helpers, helpersClasses, removeHelpers } from '../modifiers'

export type LabelSize = 'small' | 'medium' | 'large'

interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    Helpers {
  readonly size?: LabelSize
}

export const Label: React.SFC<LabelProps> = ({
  size,
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'label',
    { [`is-${size}`]: size },
    helpersClasses(props),
    className,
  )

  return (
    <label {...removeHelpers(props)} className={classes}>
      {children}
    </label>
  )
}
