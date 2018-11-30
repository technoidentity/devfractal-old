import * as React from 'react'
import classNames from 'classnames'

type NotificationColor =
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

interface NotificationProps {
  readonly color?: NotificationColor
}

export const Notification: React.SFC<NotificationProps> = ({
  color,
  children,
}) => {
  const classes: string = classNames('notification', {
    [`is-${color}`]: color,
  })
  return <div className={classes}>{children}</div>
}
