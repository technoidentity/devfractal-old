import React from 'react'
import { classNames, classNamesHelper, Div, Helpers, Null } from '..'

export interface ModalProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly active?: boolean
  readonly noClose?: boolean
  onModalClosed?(): void
}

export const Modal: React.FC<ModalProps> = ({
  active,
  noClose,
  children,
  onModalClosed,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'modal', 'is-active')

  if (active) {
    return (
      <Div {...props} className={classes}>
        {children}
        {noClose ? (
          ''
        ) : (
          <Div
            as="button"
            onClick={onModalClosed}
            {...props}
            className={classNames('modal-close')}
          />
        )}
      </Div>
    )
  }

  return <Null />
}

export interface ModalCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const ModalCard: React.FC<ModalCardProps> = ({ children, ...props }) => {
  const classes: string = classNamesHelper(props, 'modal-card')
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface ModalCardHeadProps
  extends React.HTMLAttributes<HTMLHeadElement>,
    Helpers {}

export const ModalCardHead: React.FC<ModalCardHeadProps> = ({
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

export const ModalCardTitle: React.FC<ModalCardTitleProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'modal-card-title')
  return (
    <Div as="p" {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface ModalCardBodyProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const ModalCardBody: React.FC<ModalCardBodyProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'modal-card-body')
  return (
    <Div as="section" {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface ModalCardFootProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const ModalCardFoot: React.FC<ModalCardFootProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'modal-card-foot')
  return (
    <Div as="footer" {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface ModalBackgroundProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const ModalBackground: React.FC<ModalBackgroundProps> = ({
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'modal-background')
  return <Div {...props} className={classes} />
}

export interface ModalContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const ModalContent: React.FC<ModalContentProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'modal-content')
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}
