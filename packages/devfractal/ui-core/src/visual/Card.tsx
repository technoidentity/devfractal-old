import React from 'react'
import { classNamesHelper, El, Helpers } from '../base'

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const Card: React.FC<CardProps> = ({ children, ...props }) => {
  const classes: string = classNamesHelper(props, 'card')
  return (
    <El {...props} className={classes}>
      {children}
    </El>
  )
}

export interface CardHeaderProps
  extends React.HTMLAttributes<HTMLHeadElement>,
    Helpers {}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'card-header')
  return (
    <El as="header" {...props} className={classes}>
      {children}
    </El>
  )
}

type HeaderTitleAlignment = 'centered'
export interface CardHeaderTitleProps
  extends React.HTMLAttributes<HTMLHeadElement>,
    Helpers {
  /**
   * To align the Header title
   */
  readonly alignment?: HeaderTitleAlignment
}

export const CardHeaderTitle: React.FC<CardHeaderTitleProps> = ({
  alignment,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'card-header-title', {
    [`is-${alignment}`]: alignment,
  })
  return (
    <El as="p" {...props} className={classes}>
      {children}
    </El>
  )
}

export interface CardHeaderIconProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const CardHeaderIcon: React.FC<CardHeaderIconProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'card-header-icon')
  return (
    <El as="a" {...props} className={classes}>
      {children}
    </El>
  )
}

export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'card-content')
  return (
    <El {...props} className={classes}>
      {children}
    </El>
  )
}

export interface CardFooterProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'card-footer')
  return (
    <El as="footer" {...props} className={classes}>
      {children}
    </El>
  )
}
export interface CardFooterItemProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const CardFooterItem: React.FC<CardFooterItemProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'card-footer-item')
  return (
    <El {...props} className={classes}>
      {children}
    </El>
  )
}

export interface CardImageProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const CardImage: React.FC<CardImageProps> = ({ children, ...props }) => {
  const classes: string = classNamesHelper(props, 'card-image')
  return (
    <El {...props} className={classes}>
      {children}
    </El>
  )
}
