import React from 'react'
import { classNamesHelper, El, Helpers } from '../base'

type HeroVariant =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'
  | 'link'

type HeroSize =
  | 'medium'
  | 'large'
  | 'halfheight'
  | 'fullheight'
  | 'fullheight-with-navbar'

export interface HeroProps extends React.HTMLAttributes<HTMLElement>, Helpers {
  /**
   * To style the Hero Elements by colors
   */
  readonly variant?: HeroVariant
  /**
   * To generate a subtle gradient
   */
  readonly bold?: boolean
  /**
   * To resize the imposing banners
   */
  readonly size?: HeroSize
}

export const Hero: React.FC<HeroProps> = ({
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
    <El as="section" {...props} className={classes}>
      {children}
    </El>
  )
}

export interface HeroHeadProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const HeroHead: React.FC<HeroHeadProps> = ({ children, ...props }) => (
  <El {...props} className={classNamesHelper(props, 'hero-head')}>
    {children}
  </El>
)

export interface HeroBodyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const HeroBody: React.FC<HeroBodyProps> = ({ children, ...props }) => (
  <El {...props} className={classNamesHelper(props, 'hero-body')}>
    {children}
  </El>
)

export interface HeroFootProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const HeroFoot: React.FC<HeroFootProps> = ({ children, ...props }) => (
  <El {...props} className={classNamesHelper(props, 'hero-foot')}>
    {children}
  </El>
)
