import * as React from 'react'
import classNames from 'classnames'

interface MediaProps extends React.HTMLAttributes<HTMLElement> {}

export const Media: React.SFC<MediaProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('media', className)
  return (
    <article {...props} className={classes}>
      {children}
    </article>
  )
}
interface MediaLeftProps extends React.HTMLAttributes<HTMLElement> {}

export const MediaLeft: React.SFC<MediaLeftProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('media-left', className)
  return (
    <figure {...props} className={classes}>
      {children}
    </figure>
  )
}

interface MediaRightProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MediaRight: React.SFC<MediaRightProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('media-right', className)
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}

interface MediaContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MediaContent: React.SFC<MediaContentProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('media-content', className)
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}
