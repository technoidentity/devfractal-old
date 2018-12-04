import * as React from 'react'
import classNames from 'classnames'
type MessageColor =
  | 'dark'
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

type MessageSize = 'normal' | 'small' | 'medium' | 'large'

interface MessageProps extends React.HTMLAttributes<HTMLElement> {
  readonly color?: MessageColor
  readonly size?: MessageSize
}

export const Message: React.SFC<MessageProps> = ({
  size,
  color,
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'message',
    {
      [`is-${size}`]: size,
      [`is-${color}`]: color,
    },
    className,
  )
  return (
    <article {...props} className={classes}>
      {children}
    </article>
  )
}

interface MessageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MessageHeader: React.SFC<MessageHeaderProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('message-header', className)
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}

interface MessageBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MessageBody: React.SFC<MessageBodyProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('message-body', className)
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}
