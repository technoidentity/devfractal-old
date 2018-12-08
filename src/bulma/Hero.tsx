import * as React from 'react'

import classNames from 'classnames'
import {
  Helpers,
  helpersClasses,
  HelpersRemoved,
  removeHelpers,
} from './helpers'

type HeroColor =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'

type HeroSize = 'medium' | 'large' | 'fullheight' | 'fullheight-with-navbar'

interface HeroProps extends React.HTMLAttributes<HTMLElement>, Helpers {
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
  const propsHelpersRemoved: HelpersRemoved<typeof props> = removeHelpers(props)
  const classes: string = classNames(
    'hero',
    {
      [`is-${color}`]: color,
      [`is-bold`]: bold,
      [`is-${size}`]: size,
    },
    className,
    helpersClasses(props),
  )
  return (
    <section {...propsHelpersRemoved} {...props} className={classes}>
      {children}
    </section>
  )
}

interface HeroHeadProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {}

export const HeroHead: React.SFC<HeroHeadProps> = ({
  children,
  className,
  ...props
}) => {
  const propsHelpersRemoved: HelpersRemoved<typeof props> = removeHelpers(props)
  const classes: string = classNames(
    'hero-head',
    {},
    className,
    helpersClasses(props),
  )
  return (
    <div {...propsHelpersRemoved} {...props} className={classes}>
      {children}
    </div>
  )
}

interface HeroBodyProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {}

export const HeroBody: React.SFC<HeroBodyProps> = ({
  children,
  className,
  ...props
}) => {
  const propsHelpersRemoved: HelpersRemoved<typeof props> = removeHelpers(props)
  const classes: string = classNames(
    'hero-body',
    {},
    className,
    helpersClasses(props),
  )
  return (
    <div {...propsHelpersRemoved} {...props} className={classes}>
      {children}
    </div>
  )
}

interface HeroFootProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {}

export const HeroFoot: React.SFC<HeroFootProps> = ({
  children,
  className,
  ...props
}) => {
  const propsHelpersRemoved: HelpersRemoved<typeof props> = removeHelpers(props)
  const classes: string = classNames(
    'hero-foot',
    className,
    helpersClasses(props),
  )
  return (
    <div {...propsHelpersRemoved} {...props} className={classes}>
      {children}
    </div>
  )
}
