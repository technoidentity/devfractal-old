import React from 'react'
import { classNamesHelper, Div, Helpers } from '../lib'

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
  readonly variant?: MessageVariant
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
    <Div as="article" {...props} className={classes}>
      {children}
    </Div>
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
    <Div {...props} className={classes}>
      {children}
    </Div>
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
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}
