import React from 'react'
import { classNamesHelper, El, Helpers } from '../base'

type NotificationVariant =
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'
  | 'white'
  | 'black'

export interface NotificationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  /** To style the notification element by appending color(variant) */
  readonly variant?: NotificationVariant
}

export const Notification: React.FC<NotificationProps> = ({
  variant,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'notification', {
    [`is-${variant}`]: variant,
  })
  return (
    <El {...props} className={classes}>
      {children}
    </El>
  )
}
