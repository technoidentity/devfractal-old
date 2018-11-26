import * as React from 'react'
import classNames from 'classnames'

interface ContainerProps {
  readonly breakpoint?: 'widescreen' | 'fullhd'
  readonly fluid?: boolean
  readonly children: React.ReactChild
}

export const Container: React.SFC<ContainerProps> = ({
  children,
  fluid,
  breakpoint,
}) => {
  const classes: string = classNames('container', {
    ['is-fluid']: fluid,
    ['is-widescreen']: breakpoint === 'widescreen',
    ['is-fullhd']: breakpoint === 'fullhd',
  })

  return <div className={classes}>{children}</div>
}
