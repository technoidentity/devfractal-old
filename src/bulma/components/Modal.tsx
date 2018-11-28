import * as React from 'react'
import classNames from 'classnames'

interface ModalProps {
  readonly active?: boolean
  readonly children: React.ReactNode
}

interface ModalContentProps {
  readonly children: React.ReactNode
}

export const ModalCard: React.SFC = ({ children }) => (
  <div className="modal-card">{children}</div>
)

export const ModalCardHead: React.SFC = ({ children }) => (
  <header className="modal-card-head">{children}</header>
)

export const ModalCardTitle: React.SFC = ({ children }) => (
  <p className="modal-card-title">{children}</p>
)

export const ModalCardBody: React.SFC = ({ children }) => (
  <section className="modal-card-body">{children}</section>
)

export const ModalCardFoot: React.SFC = ({ children }) => (
  <footer className="modal-card-foot">{children}</footer>
)
export const ModalBackground: React.SFC = () => (
  <div className="modal-background" />
)

export const ModalContent: React.SFC<ModalContentProps> = ({ children }) => (
  <div className="modal-content">{children}</div>
)

export const ModalClose: React.SFC = () => <button className="modal-close" />

export const Modal: React.SFC<ModalProps> = ({ active, children }) => {
  const classes: string = classNames('modal', {
    'is-active': active,
  })
  return <div className={classes}>{children}</div>
}
