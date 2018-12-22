import * as React from 'react'

import classNames from 'classnames'

import { Helpers, removeHelpers, helpersClasses } from '../modifiers'
import { ControlHelpers, removeControlHelpers, Control } from './ControlHelpers'
import { IconHelpers, removeIconHelpers } from './iconHelpers'

type SelectVariant = 'primary' | 'info' | 'success' | 'warning' | 'danger'

type SelectSize = 'small' | 'medium' | 'large'

type SelectState = 'hovered' | 'focused'

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    Helpers,
    ControlHelpers,
    IconHelpers {
  readonly variant?: SelectVariant
  readonly rounded?: boolean
  readonly selectSize?: SelectSize
  readonly state?: SelectState
  readonly loading?: boolean
  readonly noControl?: true
}

export const Select: React.SFC<SelectProps> = ({
  fullWidth,
  noControl,
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
    ['is-fullwidth']: fullWidth,
  })

  const classes: string = classNames(
    { [`is-${state}`]: state },
    helpersClasses(props),
    className,
  )
  const select: JSX.Element = (
    <div className={divClasses}>
      <select
        {...removeIconHelpers(removeControlHelpers(removeHelpers(props)))}
        className={classes}
      >
        {children}
      </select>
    </div>
  )
  return noControl ? select : <Control {...props}>{select}</Control>
}
