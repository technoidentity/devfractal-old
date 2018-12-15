import * as React from 'react'
import classNames from 'classnames'
import {
  CommonHelpers,
  CommonHelpersRemoved,
  removeCommonHelpers,
  commonHelpersClasses,
} from '../modifiers/commonHelpers'

type SelectColor = 'primary' | 'info' | 'success' | 'warning' | 'danger'

type SelectSize = 'small' | 'medium' | 'large'

type SelectState = 'hovered' | 'focused'

interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    CommonHelpers {
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
  const propsHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)

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
    commonHelpersClasses(props),
  )
  return (
    <div className="control">
      <div className={divClasses}>
        <select {...propsHelpersRemoved} className={classes}>
          {children}
        </select>
      </div>
    </div>
  )
}
