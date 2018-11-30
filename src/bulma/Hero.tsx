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

export const HeroHead: React.SFC = ({ children }) => (
  <div className="hero-head">{children}</div>
)

export const HeroBody: React.SFC = ({ children }) => (
  <div className="hero-body">{children}</div>
)

export const HeroFoot: React.SFC = ({ children }) => (
  <div className="hero-head">{children}</div>
)
