import * as React from 'react'
import classNames from 'classnames'

type SelectColor = 'primary' | 'info' | 'success' | 'warning' | 'danger'

type SelectSize = 'small' | 'medium' | 'large'

type SelectState = 'hovered' | 'focused' | 'loading'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  readonly color?: SelectColor
  readonly rounded?: boolean
  readonly selectSize?: SelectSize
  readonly state?: SelectState
}

export const Select: React.SFC<SelectProps> = ({
  color,
  selectSize,
  state,
  children,
  rounded,
  className,
  ...props
}) => {
  const divClasses: string = classNames('select', {
    [`is-${color}`]: color,
    [`is-rounded`]: rounded,
    [`is-${selectSize}`]: selectSize,
  })
  const classes: string = classNames(
    {
      [`is-${state}`]: state,
    },
    className,
  )
  return (
    <div className="control">
      <div className={divClasses}>
        <select {...props} className={classes}>
          {children}
        </select>
      </div>
    </div>
  )
}
