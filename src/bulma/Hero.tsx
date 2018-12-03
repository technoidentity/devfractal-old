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

interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  readonly color?: HeroColor
  readonly bold?: boolean
  readonly size?: HeroSize
}

export const Hero: React.SFC<HeroProps> = ({
  children,
  color,
  bold,
  size,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'hero',
    {
      [`is-${color}`]: color,
      [`is-bold`]: bold,
      [`is-${size}`]: size,
    },
    className,
  )
  return (
    <section className={classes} {...props}>
      {children}
    </section>
  )
}

interface HeroHeadProps extends React.HTMLAttributes<HTMLDivElement> {}

export const HeroHead: React.SFC<HeroHeadProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('hero-head', {}, className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

interface HeroBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export const HeroBody: React.SFC<HeroBodyProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('hero-body', {}, className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

interface HeroFootProps extends React.HTMLAttributes<HTMLDivElement> {}

export const HeroFoot: React.SFC<HeroFootProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('hero-foot', className)
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
