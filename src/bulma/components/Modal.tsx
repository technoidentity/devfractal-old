import * as React from 'react'
import classNames from 'classnames'

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly active?: boolean
}

export const Modal: React.SFC<ModalProps> = ({
  active,
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'modal',
    {
      [`is-active'`]: active,
    },
    className,
  )
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}

interface ModalCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ModalCard: React.SFC<ModalCardProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('modal-card', className)
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}

interface ModalHeadProps extends React.HTMLAttributes<HTMLHeadElement> {}
export const ModalCardHead: React.SFC<ModalHeadProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('modal-card-head', className)
  return (
    <header {...props} className={classes}>
      {children}
    </header>
  )
}

interface ModalCardTitleProps extends React.HTMLAttributes<HTMLElement> {}

export const ModalCardTitle: React.SFC<ModalCardTitleProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('message-card-title', className)
  return (
    <p {...props} className={classes}>
      {children}
    </p>
  )
}

interface ModalCardBodyProps extends React.HTMLAttributes<HTMLElement> {}

export const ModalCardBody: React.SFC<ModalCardBodyProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('message-card-body', className)
  return (
    <section {...props} className={classes}>
      {children}
    </section>
  )
}

interface ModalCardFootProps extends React.HTMLAttributes<HTMLElement> {}

export const ModalCardFoot: React.SFC<ModalCardFootProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('message-card-foot', className)
  return (
    <footer {...props} className={classes}>
      {children}
    </footer>
  )
}

interface ModalBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ModalBackground: React.SFC<ModalBackgroundProps> = ({
  className,
  ...props
}) => {
  const classes: string = classNames('modal-background', className)
  return <div {...props} className={classes} />
}

interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ModalContent: React.SFC<ModalContentProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('message-content', className)
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}

interface ModalCloseProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const ModalClose: React.SFC<ModalCloseProps> = ({
  className,
  ...props
}) => {
  const classes: string = classNames('modal-close', className)
  return <button {...props} className={classes} />
}
