import * as React from 'react'
import classNames from 'classnames'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  readonly modifier?: 'medium' | 'large'
}

export const Section: React.SFC<SectionProps> = ({
  modifier,
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'section',
    {
      [`is-${modifier}`]: modifier,
    },
    className,
  )
  return (
    <section {...props} className={classes}>
      {children}
    </section>
  )
}
