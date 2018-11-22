import * as React from 'react'

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
  readonly children: React.ReactNode
}

interface MessageHeaderProps {
  readonly children: React.ReactNode
}

interface MessageBodyProps {
  readonly children: React.ReactChild
}
export const Message: React.SFC<MessageProps> = ({ size, color, children }) => {
  return (
    <article className={`message-is-${size} is-${color}`}>{children}</article>
  )
}

export const MessageHeader: React.SFC<MessageHeaderProps> = ({ children }) => {
  return <div className={`message-header`}>{children}</div>
}

export const MessageBody: React.SFC<MessageBodyProps> = ({ children }) => {
  return <div className={`message-body`}>{children}</div>
}
