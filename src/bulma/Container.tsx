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
      [`is-${breakpoint}`]: breakpoint,
    },
    className,
  )

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
