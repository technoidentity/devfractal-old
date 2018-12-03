import * as React from 'react'
import classNames from 'classnames'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly breakpoint?: 'widescreen' | 'fullhd'
  readonly fluid?: boolean
}

export const Container: React.SFC<ContainerProps> = ({
  children,
  fluid,
  breakpoint,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'container',
    {
      ['is-fluid']: fluid,
      ['is-widescreen']: breakpoint === 'widescreen',
      ['is-fullhd']: breakpoint === 'fullhd',
    },
    className,
  )

  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}
