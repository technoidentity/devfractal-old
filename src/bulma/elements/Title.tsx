import classNames from 'classnames'
import React from 'react'
import {
  CommonHelpers,
  commonHelpersClasses,
  CommonHelpersRemoved,
  removeCommonHelpers,
} from '../modifiers/commonHelpers'

type TitleSize = '1' | '2' | '3' | '4' | '5' | '6'

type SubTitleSize = '1' | '2' | '3' | '4' | '5' | '6'

interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    CommonHelpers {
  readonly size?: TitleSize
  readonly spaced?: boolean
}

export const Title: React.SFC<TitleProps> = ({
  size,
  spaced,
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'title',
    {
      [`is-${size}`]: size,
      [`is-${spaced}`]: spaced,
    },
    className,
    commonHelpersClasses(props),
  )
  return (
    <h1 {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </h1>
  )
}

interface SubTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    CommonHelpers {
  readonly size?: SubTitleSize
}

export const SubTitle: React.SFC<SubTitleProps> = ({
  size,
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'subtitle',
    {
      [`is-${size}`]: size,
    },
    className,
    commonHelpersClasses(props),
  )
  return (
    <h1 {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </h1>
  )
}
