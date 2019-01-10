import React from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'

type HeroVariant =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'
  | 'link'

type HeroSize = 'medium' | 'large' | 'fullheight' | 'fullheight-with-navbar'

export interface HeroProps extends React.HTMLAttributes<HTMLElement>, Helpers {
  readonly variant?: HeroVariant
  readonly bold?: boolean
  readonly size?: HeroSize
}

export const Hero: React.SFC<HeroProps> = ({
  children,
  variant,
  bold,
  size,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'hero', {
    [`is-${variant}`]: variant,
    'is-bold': bold,
    [`is-${size}`]: size,
  })
  return (
    <Div as="section" {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface HeroHeadProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const HeroHead: React.SFC<HeroHeadProps> = ({ children, ...props }) => {
  const classes: string = classNamesHelper(props, 'hero-head')
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface HeroBodyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const HeroBody: React.SFC<HeroBodyProps> = ({ children, ...props }) => {
  const classes: string = classNamesHelper(props, 'hero-body')
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface HeroFootProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const HeroFoot: React.SFC<HeroFootProps> = ({ children, ...props }) => {
  const classes: string = classNamesHelper(props, 'hero-foot')
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}
