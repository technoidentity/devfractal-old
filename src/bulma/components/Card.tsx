import * as React from 'react'
import classNames from 'classnames'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.SFC<CardProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('card', className)
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLHeadElement> {}

export const CardHeader: React.SFC<CardHeaderProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('card-header', className)
  return (
    <header {...props} className={classes}>
      {children}
    </header>
  )
}

interface CardHeaderTitleProps extends React.HTMLAttributes<HTMLHeadElement> {}
export const CardHeaderTitle: React.SFC<CardHeaderTitleProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('header-title', className)
  return (
    <p {...props} className={classes}>
      {children}
    </p>
  )
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent: React.SFC<CardContentProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('card-content', className)
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}

interface CardFooterProps extends React.HTMLAttributes<HTMLElement> {}

export const CardFooter: React.SFC<CardFooterProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('card-footer', className)
  return (
    <footer {...props} className={classes}>
      {children}
    </footer>
  )
}
interface CardFooterItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const CardFooterItem: React.SFC<CardFooterItemProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('card-footer-item', className)
  return (
    <a {...props} className={classes}>
      {children}
    </a>
  )
}

interface CardImageProps extends React.HTMLAttributes<HTMLElement> {}

export const CardImage: React.SFC<CardImageProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('card-image', className)
  return (
    <figure {...props} className={classes}>
      {children}
    </figure>
  )
}
