import * as React from 'react'

type NotificationColor =
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

interface NotificationProps {
  readonly color?: NotificationColor
  readonly children: React.ReactNode
}

export const Notification: React.SFC<NotificationProps> = ({
  color,
  children,
}) => {
  return <div className={`notification is-${color}`}>{children}</div>
}
