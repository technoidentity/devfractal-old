import * as React from 'react'
import classNames from 'classnames'
import {
  CommonHelpers,
  CommonHelpersRemoved,
  removeCommonHelpers,
  commonHelpersClasses,
} from './commonHelpers'

interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    CommonHelpers {
  readonly modifier?: 'medium' | 'large'
}

export const Section: React.SFC<SectionProps> = ({
  modifier,
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'section',
    {
      [`is-${modifier}`]: modifier,
    },
    className,
    commonHelpersClasses(props),
  )
  return (
    <section {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </section>
  )
}
