import React from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'

interface MediaProps extends React.HTMLAttributes<HTMLElement>, Helpers {}

export const Media: React.SFC<MediaProps> = ({ children, ...props }) => {
  const classes: string = classNamesHelper(props, 'media')
  return (
    <Div as="article" {...props} className={classes}>
      {children}
    </Div>
  )
}

interface MediaLeftProps extends React.HTMLAttributes<HTMLElement>, Helpers {}

export const MediaLeft: React.SFC<MediaLeftProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'media-left')
  return (
    <Div as="figure" {...props} className={classes}>
      {children}
    </Div>
  )
}

interface MediaRightProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const MediaRight: React.SFC<MediaRightProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'media-right')
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

interface MediaContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const MediaContent: React.SFC<MediaContentProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'media-content')
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}
