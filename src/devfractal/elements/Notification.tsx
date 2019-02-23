import React from 'react'
import { classNamesHelper, Div, Helpers } from '../internal'

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
  readonly variant?: NotificationVariant
}

export const Notification: React.SFC<NotificationProps> = ({
  variant,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'notification', {
    [`is-${variant}`]: variant,
  })
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}
