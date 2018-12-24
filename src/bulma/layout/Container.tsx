import React from 'react'
import classNames from 'classnames'
import {
  CommonHelpers,
  CommonHelpersRemoved,
  removeCommonHelpers,
  commonHelpersClasses,
} from '../modifiers/commonHelpers'

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {
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
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'container',
    {
      ['is-fluid']: fluid,
      [`is-${breakpoint}`]: breakpoint,
    },
    className,
    commonHelpersClasses(props),
  )

  return (
    <div {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </div>
  )
}
