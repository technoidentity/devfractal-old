import { classNamesHelper, Div, Helpers } from 'base'
import React from 'react'

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
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

// tslint:disable-next-line: no-default-export
export default Notification
