import * as React from 'react'
import classNames from 'classnames'

type NotificationColor =
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly color?: NotificationColor
}

export const Notification: React.SFC<NotificationProps> = ({
  color,
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'notification',
    {
      [`is-${color}`]: color,
    },
    className,
  )
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}
