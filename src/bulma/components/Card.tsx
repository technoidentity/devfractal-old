import * as React from 'react'
import classNames from 'classnames'
import {
  CommonHelpers,
  CommonHelpersRemoved,
  removeCommonHelpers,
  commonHelpersClasses,
} from '../modifiers/commonHelpers'

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {}

export const Card: React.SFC<CardProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'card',
    className,
    commonHelpersClasses(props),
  )
  return (
    <div {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </div>
  )
}

interface CardHeaderProps
  extends React.HTMLAttributes<HTMLHeadElement>,
    CommonHelpers {}

export const CardHeader: React.SFC<CardHeaderProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'card-header',
    className,
    commonHelpersClasses(props),
  )
  return (
    <header {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </header>
  )
}

interface CardHeaderTitleProps
  extends React.HTMLAttributes<HTMLHeadElement>,
    CommonHelpers {
  readonly alignment?: 'centered'
}
export const CardHeaderTitle: React.SFC<CardHeaderTitleProps> = ({
  alignment,
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'card-header-title',
    {
      [`is-${alignment}`]: alignment,
    },
    className,
    commonHelpersClasses(props),
  )
  return (
    <p {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </p>
  )
}

interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {}

export const CardContent: React.SFC<CardContentProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'card-content',
    className,
    commonHelpersClasses(props),
  )
  return (
    <div {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </div>
  )
}

interface CardFooterProps
  extends React.HTMLAttributes<HTMLElement>,
    CommonHelpers {}

export const CardFooter: React.SFC<CardFooterProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'card-footer',
    className,
    commonHelpersClasses(props),
  )
  return (
    <footer {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </footer>
  )
}
interface CardFooterItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    CommonHelpers {}

export const CardFooterItem: React.SFC<CardFooterItemProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'card-footer-item',
    className,
    commonHelpersClasses(props),
  )
  return (
    <a {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </a>
  )
}

interface CardImageProps
  extends React.HTMLAttributes<HTMLElement>,
    CommonHelpers {}

export const CardImage: React.SFC<CardImageProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'card-image',
    className,
    commonHelpersClasses(props),
  )
  return (
    <figure {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </figure>
  )
}
