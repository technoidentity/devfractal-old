import * as React from 'react'

import classNames from 'classnames'

type HeroColor =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'

type HeroSize = 'medium' | 'large' | 'fullheight' | 'fullheight-with-navbar'

interface HeroProps {
  readonly children: React.ReactNode
  readonly color?: HeroColor
  readonly bold?: boolean
  readonly size?: HeroSize
}

export const Hero: React.SFC<HeroProps> = ({ children, color, bold, size }) => {
  const classes: string = classNames('hero', {
    [`is-${color}`]: color,
    [`is-bold`]: bold,
    [`is-${size}`]: size,
  })
  return <section className={classes}>{children}</section>
}

interface HeroHeadProps {
  readonly children: React.ReactNode
}

export const HeroHead: React.SFC<HeroHeadProps> = ({ children }) => (
  <div className="hero-head">{children}</div>
)

interface HeroBodyProps {
  readonly children: React.ReactNode
}

export const HeroBody: React.SFC<HeroBodyProps> = ({ children }) => (
  <div className="hero-body">{children}</div>
)

interface HeroFootProps {
  readonly children: React.ReactNode
}

export const HeroFoot: React.SFC<HeroFootProps> = ({ children }) => (
  <div className="hero-head">{children}</div>
)
