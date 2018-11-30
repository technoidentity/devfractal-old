import * as React from 'react'
import classNames from 'classnames'

type CardHeaderTitleAlignment = 'centered'

interface CardHeaderTitleProps {
  readonly alignment?: CardHeaderTitleAlignment
}

interface CardFooterItemProps {
  readonly href: string
}

export const Card: React.SFC = ({ children }) => (
  <div className="card">{children}</div>
)

export const CardHeader: React.SFC = ({ children }) => (
  <header className="card-header">{children}</header>
)

export const CardHeaderTitle: React.SFC<CardHeaderTitleProps> = ({
  children,
  alignment,
}) => {
  const classes: string = classNames('header-title', {
    [`is-${alignment}`]: alignment,
  })
  return <p className={classes}>{children}</p>
}

export const CardContent: React.SFC = ({ children }) => (
  <div className="card-content">{children}</div>
)

export const CardImage: React.SFC = ({ children }) => (
  <figure className="card-image">{children}</figure>
)

export const CardFooter: React.SFC = ({ children }) => (
  <footer className="card-footer">{children}</footer>
)

export const CardFooterItem: React.SFC<CardFooterItemProps> = ({
  href,
  children,
}) => <a href={href}>{children}</a>
