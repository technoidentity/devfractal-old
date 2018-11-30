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

interface MessageProps {
  readonly color?: MessageColor
  readonly size?: MessageSize
}

export const Message: React.SFC<MessageProps> = ({ size, color, children }) => {
  const classes: string = classNames('message', {
    [`is-${size}`]: size,
    [`is-${color}`]: color,
  })
  return <article className={classes}>{children}</article>
}

export const MessageHeader: React.SFC = ({ children }) => {
  return <div className={`message-header`}>{children}</div>
}

export const MessageBody: React.SFC = ({ children }) => {
  return <div className={`message-body`}>{children}</div>
}
