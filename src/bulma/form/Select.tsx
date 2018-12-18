import * as React from 'react'

import classNames from 'classnames'

import { Helpers, removeHelpers, helpersClasses } from '../modifiers'

type SelectVariant = 'primary' | 'info' | 'success' | 'warning' | 'danger'

type SelectSize = 'small' | 'medium' | 'large'

type SelectState = 'hovered' | 'focused'

interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    Helpers {
  readonly variant?: SelectVariant
  readonly rounded?: boolean
  readonly selectSize?: SelectSize
  readonly state?: SelectState
  readonly loading?: boolean
}

export const Select: React.SFC<SelectProps> = ({
  variant,
  selectSize,
  state,
  children,
  rounded,
  loading,
  className,
  ...props
}) => {
  const divClasses: string = classNames('select', {
    [`is-${variant}`]: variant,
    [`is-rounded`]: rounded,
    [`is-${selectSize}`]: selectSize,
    ['is-loading']: loading,
  })

  const classes: string = classNames(
    { [`is-${state}`]: state },
    helpersClasses(props),
    className,
  )

  return (
    <div className="control">
      <div className={divClasses}>
        <select {...removeHelpers(props)} className={classes}>
          {children}
        </select>
      </div>
    </div>
  )
}
