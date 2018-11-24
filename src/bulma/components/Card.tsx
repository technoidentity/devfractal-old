import * as React from 'react'

interface CardProps {
  readonly children: React.ReactNode
}

interface CardHeaderProps {
  readonly children: React.ReactNode
}

interface CardHeaderTitleProps {
  readonly alignment?: 'centered'
  readonly children: React.ReactChild
}

interface CardImageProps {
  readonly children: React.ReactNode
}

interface CardContentProps {
  readonly children: React.ReactNode
}

interface CardFooterProps {
  readonly children: React.ReactNode
}

interface CradFooterItemProps {
  readonly href: string
  readonly children: React.ReactNode
}

export const Card: React.SFC<CardProps> = ({ children }) => (
  <div className="card">{children}</div>
)

export const CardHeader: React.SFC<CardHeaderProps> = ({ children }) => (
  <header className="card-header">{children}</header>
)

export const CardHeaderTitle: React.SFC<CardHeaderTitleProps> = ({
  children,
}) => <p className="header-title">{children}</p>

export const CardContent: React.SFC<CardContentProps> = ({ children }) => (
  <div className="card-content">{children}</div>
)

export const CardImage: React.SFC<CardImageProps> = ({ children }) => (
  <figure className="card-image">{children}</figure>
)

export const CardFooter: React.SFC<CardFooterProps> = ({ children }) => (
  <footer className="card-footer">{children}</footer>
)

export const CardFooterItem: React.SFC<CradFooterItemProps> = ({
  href,
  children,
}) => <a href={href}>{children}</a>
