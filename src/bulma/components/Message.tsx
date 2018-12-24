import React from 'react'
import classNames from 'classnames'
import {
  CommonHelpers,
  CommonHelpersRemoved,
  removeCommonHelpers,
  commonHelpersClasses,
} from '../modifiers/commonHelpers'
type MessageVariant =
  | 'dark'
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

type MessageSize = 'normal' | 'small' | 'medium' | 'large'

interface MessageProps
  extends React.HTMLAttributes<HTMLElement>,
    CommonHelpers {
  readonly variant?: MessageVariant
  readonly size?: MessageSize
}

export const Message: React.SFC<MessageProps> = ({
  size,
  variant,
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'message',
    {
      [`is-${size}`]: size,
      [`is-${variant}`]: variant,
    },
    className,
    commonHelpersClasses(props),
  )
  return (
    <article {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </article>
  )
}

interface MessageHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {}

export const MessageHeader: React.SFC<MessageHeaderProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'message-header',
    className,
    commonHelpersClasses(props),
  )
  return (
    <div {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </div>
  )
}

interface MessageBodyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {}

export const MessageBody: React.SFC<MessageBodyProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'message-body',
    className,
    commonHelpersClasses(props),
  )
  return (
    <div {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </div>
  )
}
