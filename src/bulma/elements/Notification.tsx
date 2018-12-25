import classNames from 'classnames'
import React from 'react'
import {
  CommonHelpers,
  commonHelpersClasses,
  CommonHelpersRemoved,
  removeCommonHelpers,
} from '../modifiers/commonHelpers'

type NotificationVariant =
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'

interface NotificationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {
  readonly variant?: NotificationVariant
}

export const Notification: React.SFC<NotificationProps> = ({
  variant,
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'notification',
    {
      [`is-${variant}`]: variant,
    },
    className,
    commonHelpersClasses(props),
  )
  return (
    <div {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </div>
  )
}
