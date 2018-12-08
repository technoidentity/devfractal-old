import * as React from 'react'
import classNames from 'classnames'
import {
  Helpers,
  HelpersRemoved,
  removeHelpers,
  helpersClasses,
} from './helpers'

type SelectColor = 'primary' | 'info' | 'success' | 'warning' | 'danger'

type SelectSize = 'small' | 'medium' | 'large'

type SelectState = 'hovered' | 'focused'

interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    Helpers {
  readonly color?: SelectColor
  readonly rounded?: boolean
  readonly selectSize?: SelectSize
  readonly state?: SelectState
  readonly loading?: boolean
}

export const Select: React.SFC<SelectProps> = ({
  color,
  selectSize,
  state,
  children,
  rounded,
  loading,
  className,
  ...props
}) => {
  const propsHelpersRemoved: HelpersRemoved<typeof props> = removeHelpers(props)

  const divClasses: string = classNames('select', {
    [`is-${color}`]: color,
    [`is-rounded`]: rounded,
    [`is-${selectSize}`]: selectSize,
    ['is-loading']: loading,
  })
  const classes: string = classNames(
    {
      [`is-${state}`]: state,
    },
    className,
    helpersClasses(props),
  )
  return (
    <div className="control">
      <div className={divClasses}>
        <select {...propsHelpersRemoved} {...props} className={classes}>
          {children}
        </select>
      </div>
    </div>
  )
}
