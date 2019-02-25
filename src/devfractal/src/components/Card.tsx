import React from 'react'
import { classNamesHelper, Div, Helpers } from '../lib'

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const Card: React.SFC<CardProps> = ({ children, ...props }) => {
  const classes: string = classNamesHelper(props, 'card')
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface CardHeaderProps
  extends React.HTMLAttributes<HTMLHeadElement>,
    Helpers {}

export const CardHeader: React.SFC<CardHeaderProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'card-header')
  return (
    <Div as="header" {...props} className={classes}>
      {children}
    </Div>
  )
}

type HeaderTitleAlignment = 'centered'
export interface CardHeaderTitleProps
  extends React.HTMLAttributes<HTMLHeadElement>,
    Helpers {
  readonly alignment?: HeaderTitleAlignment
}

export const CardHeaderTitle: React.SFC<CardHeaderTitleProps> = ({
  alignment,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'card-header-title', {
    [`is-${alignment}`]: alignment,
  })
  return (
    <Div as="p" {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface CardHeaderIconProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const CardHeaderIcon: React.SFC<CardHeaderIconProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'card-header-icon')
  return (
    <Div as="a" {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const CardContent: React.SFC<CardContentProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'card-content')
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface CardFooterProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const CardFooter: React.SFC<CardFooterProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'card-footer')
  return (
    <Div as="footer" {...props} className={classes}>
      {children}
    </Div>
  )
}
export interface CardFooterItemProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const CardFooterItem: React.SFC<CardFooterItemProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'card-footer-item')
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface CardImageProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const CardImage: React.SFC<CardImageProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'card-image')
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}
