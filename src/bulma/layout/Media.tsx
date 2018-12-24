import classNames from 'classnames'
import React from 'react'
import {
  CommonHelpers,
  commonHelpersClasses,
  CommonHelpersRemoved,
  removeCommonHelpers,
} from '../modifiers/commonHelpers'

interface MediaProps extends React.HTMLAttributes<HTMLElement>, CommonHelpers {}

export const Media: React.SFC<MediaProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'media',
    className,
    commonHelpersClasses(props),
  )
  return (
    <article {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </article>
  )
}
interface MediaLeftProps
  extends React.HTMLAttributes<HTMLElement>,
    CommonHelpers {}

export const MediaLeft: React.SFC<MediaLeftProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'media-left',
    className,
    commonHelpersClasses(props),
  )
  return (
    <figure {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </figure>
  )
}

interface MediaRightProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {}

export const MediaRight: React.SFC<MediaRightProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'media-right',
    className,
    commonHelpersClasses(props),
  )
  return (
    <div {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </div>
  )
}

interface MediaContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {}

export const MediaContent: React.SFC<MediaContentProps> = ({
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'media-content',
    className,
    commonHelpersClasses(props),
  )
  return (
    <div {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </div>
  )
}
