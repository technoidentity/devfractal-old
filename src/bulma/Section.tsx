import * as React from 'react'
import classNames from 'classnames'

interface SectionProps {
  readonly modifier?: 'medium' | 'large'
}

export const Section: React.SFC<SectionProps> = ({ modifier, children }) => {
  const classes: string = classNames('section', {
    [`is-${modifier}`]: modifier,
  })
  return <section className={classes}>{children}</section>
}
