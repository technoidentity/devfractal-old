import * as React from 'react'
import classNames from 'classnames'

type TitleSize = '1' | '2' | '3' | '4' | '5' | '6'

type SubTitleSize = '1' | '2' | '3' | '4' | '5' | '6'

interface TitleProps {
  readonly size?: TitleSize
  readonly spaced?: boolean
  readonly children: React.ReactChild
}

interface SubTitleProps {
  readonly size?: SubTitleSize
  readonly children: React.ReactChild
}

export const Title: React.SFC<TitleProps> = ({ size, spaced, children }) => {
  const classes: string = classNames('title', {
    [`is-${size}`]: size,
    [`is-${spaced}`]: spaced,
  })
  return <h1 className={classes}>{children}</h1>
}

export const SubTitle: React.SFC<SubTitleProps> = ({ size, children }) => {
  const classes: string = classNames('subtitle', {
    [`is-${size}`]: size,
  })
  return <h1 className={classes}>{children}</h1>
}
