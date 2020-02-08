import React from 'react'
import { classNamesHelper, El, Helpers } from '../base'

type MessageVariant =
  | 'dark'
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'white'
  | 'black'

type MessageSize = 'small' | 'medium' | 'large'

export interface MessageProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {
  /**
   * style the Message element by appending the color(variant)
   */
  readonly variant?: MessageVariant
  /**
   * Resize the content of the message
   */
  readonly size?: MessageSize
}

export const Message: React.FC<MessageProps> = ({
  size,
  variant,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'message', {
    [`is-${size}`]: size,
    [`is-${variant}`]: variant,
  })
  return (
    <El as="article" {...props} className={classes}>
      {children}
    </El>
  )
}

export interface MessageHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const MessageHeader: React.FC<MessageHeaderProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'message-header')
  return (
    <El {...props} className={classes}>
      {children}
    </El>
  )
}

export interface MessageBodyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const MessageBody: React.FC<MessageBodyProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'message-body')
  return (
    <El {...props} className={classes}>
      {children}
    </El>
  )
}
