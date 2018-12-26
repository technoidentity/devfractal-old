import React from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'

type MessageVariant =
  | 'dark'
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

type MessageSize = 'normal' | 'small' | 'medium' | 'large'

interface MessageProps extends React.HTMLAttributes<HTMLElement>, Helpers {
  readonly variant?: MessageVariant
  readonly size?: MessageSize
}

export const Message: React.SFC<MessageProps> = ({
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

interface MessageHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const MessageHeader: React.SFC<MessageHeaderProps> = ({
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

interface MessageBodyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const MessageBody: React.SFC<MessageBodyProps> = ({
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
