import React from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'

export interface ModalProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly active?: boolean
}

export const Modal: React.SFC<ModalProps> = ({
  active,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'modal', {
    [`is-active`]: active,
  })
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface ModalCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const ModalCard: React.SFC<ModalCardProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'modal-card')
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface ModalHeadProps
  extends React.HTMLAttributes<HTMLHeadElement>,
    Helpers {}

export const ModalCardHead: React.SFC<ModalHeadProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'modal-card-head')
  return (
    <Div as="header" {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface ModalCardTitleProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const ModalCardTitle: React.SFC<ModalCardTitleProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'message-card-title')
  return (
    <Div as="p" {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface ModalCardBodyProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const ModalCardBody: React.SFC<ModalCardBodyProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'message-card-body')
  return (
    <Div as="section" {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface ModalCardFootProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const ModalCardFoot: React.SFC<ModalCardFootProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'message-card-foot')
  return (
    <Div as="footer" {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface ModalBackgroundProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const ModalBackground: React.SFC<ModalBackgroundProps> = ({
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'modal-background')
  return <Div {...props} className={classes} />
}

export interface ModalContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const ModalContent: React.SFC<ModalContentProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'message-content')
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface ModalCloseProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    Helpers {}

export const ModalClose: React.SFC<ModalCloseProps> = ({ ...props }) => {
  const classes: string = classNamesHelper(props, 'modal-close')
  return <Div as="button" {...props} className={classes} />
}
