import React from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'

type TitleSize = '1' | '2' | '3' | '4' | '5' | '6' | '7'

type SubTitleSize = '1' | '2' | '3' | '4' | '5' | '6' | '7'

export interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    Helpers {
  readonly size?: TitleSize
  readonly spaced?: boolean
}

export const Title: React.SFC<TitleProps> = ({
  size,
  spaced,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'title', {
    [`is-${size}`]: size,
    'is-spaced': spaced,
  })
  return (
    <Div as="h1" {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface SubTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    Helpers {
  readonly size?: SubTitleSize
}

export const SubTitle: React.SFC<SubTitleProps> = ({
  size,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'subtitle', {
    [`is-${size}`]: size,
  })
  return (
    <Div as="h1" {...props} className={classes}>
      {children}
    </Div>
  )
}
