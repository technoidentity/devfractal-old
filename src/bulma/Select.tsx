import * as React from 'react'
import classNames from 'classnames'

type SelectColor = 'primary' | 'info' | 'success' | 'warning' | 'danger'

type SelectStyle = 'rounded'

type SelectSize = 'small' | 'medium' | 'large'

type SelectState = 'hovered' | 'focused'

interface SelectProps {
  readonly color?: SelectColor
  readonly style?: SelectStyle
  readonly size?: SelectSize
  readonly state?: SelectState
  readonly name?: string
  readonly onChange?: React.ChangeEventHandler<HTMLSelectElement>
}

export const Select: React.SFC<SelectProps> = ({
  color,
  style,
  size,
  state,
  name,
  onChange,
  children,
}) => {
  const classes: string = classNames('select', {
    [`is-${color}`]: color,
    [`is-${style}`]: style,
    [`is-${size}`]: size,
    [`is-${state}`]: state,
  })
  return (
    <div className="control">
      <div className={classes}>
        <select onChange={onChange} name={name}>
          {children}
        </select>
      </div>
    </div>
  )
}
