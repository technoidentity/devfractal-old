import * as React from 'react'
import classNames from 'classnames'

interface ModalProps {
  readonly active?: boolean
  readonly children: React.ReactNode
}

// TODO: we can place any other Bulma Elements you want in ModalContent
interface ModalContentProps {
  readonly children: React.ReactNode
}

export const Modal: React.SFC<ModalProps> = ({ active, children }) => {
  const classes: string = classNames('modal', {
    'is-active': active,
  })
  return <div className={classes}>{children}</div>
}
export const ModalBackground: React.SFC = () => (
  <div className="modal-background" />
)

export const ModalContent: React.SFC<ModalContentProps> = ({ children }) => (
  <div className="modal-content">{children}</div>
)

export const ModalClose: React.SFC = () => <button className="modal-close" />
