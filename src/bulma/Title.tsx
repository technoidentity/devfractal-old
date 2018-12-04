import * as React from 'react'
import classNames from 'classnames'

type TitleSize = '1' | '2' | '3' | '4' | '5' | '6'

type SubTitleSize = '1' | '2' | '3' | '4' | '5' | '6'

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  readonly size?: TitleSize
  readonly spaced?: boolean
}

interface SubTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  readonly size?: SubTitleSize
}

export const Title: React.SFC<TitleProps> = ({
  size,
  spaced,
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'title',
    {
      [`is-${size}`]: size,
      [`is-${spaced}`]: spaced,
    },
    className,
  )
  return (
    <h1 {...props} className={classes}>
      {children}
    </h1>
  )
}

export const SubTitle: React.SFC<SubTitleProps> = ({
  size,
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'subtitle',
    {
      [`is-${size}`]: size,
    },
    className,
  )
  return (
    <h1 {...props} className={classes}>
      {children}
    </h1>
  )
}
