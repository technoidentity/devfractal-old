import * as React from 'react'
import classNames from 'classnames'

type ControlSizeProps = 'large' | 'medium' | 'small'

type ControlState = 'loading'

interface ControlProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly size?: ControlSizeProps
  readonly state?: ControlState
  readonly expanded?: boolean
}

export const Control: React.SFC<ControlProps> = ({
  size,
  state,
  expanded,
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'control',
    {
      [`is-${size}`]: size,
      [`is-${state}`]: state,
      [`is-expanded`]: expanded,
    },
    className,
  )
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}
