import classNames from 'classnames'
import React from 'react'
import {
  CommonHelpers,
  commonHelpersClasses,
  CommonHelpersRemoved,
  removeCommonHelpers,
} from '../modifiers/commonHelpers'

type HeroVariant =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'

type HeroSize = 'medium' | 'large' | 'fullheight' | 'fullheight-with-navbar'

interface HeroProps extends React.HTMLAttributes<HTMLElement>, CommonHelpers {
  readonly variant?: HeroVariant
  readonly bold?: boolean
  readonly size?: HeroSize
}

export const Hero: React.SFC<HeroProps> = ({
  children,
  variant,
  bold,
  size,
  className,
  ...props
}) => {
  const propsHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'hero',
    {
      [`is-${variant}`]: variant,
      [`is-bold`]: bold,
      [`is-${size}`]: size,
    },
    className,
    commonHelpersClasses(props),
  )
  return (
    <section {...propsHelpersRemoved} className={classes}>
      {children}
    </section>
  )
}

interface HeroHeadProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {}

export const HeroHead: React.SFC<HeroHeadProps> = ({
  children,
  className,
  ...props
}) => {
  const propsHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'hero-head',
    {},
    className,
    commonHelpersClasses(props),
  )
  return (
    <div {...propsHelpersRemoved} className={classes}>
      {children}
    </div>
  )
}

interface HeroBodyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {}

export const HeroBody: React.SFC<HeroBodyProps> = ({
  children,
  className,
  ...props
}) => {
  const propsHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'hero-body',
    {},
    className,
    commonHelpersClasses(props),
  )
  return (
    <div {...propsHelpersRemoved} className={classes}>
      {children}
    </div>
  )
}

interface HeroFootProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {}

export const HeroFoot: React.SFC<HeroFootProps> = ({
  children,
  className,
  ...props
}) => {
  const propsHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'hero-foot',
    className,
    commonHelpersClasses(props),
  )
  return (
    <div {...propsHelpersRemoved} className={classes}>
      {children}
    </div>
  )
}
