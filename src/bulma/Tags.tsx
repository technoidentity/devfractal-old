import * as React from 'react'
import classNames from 'classnames'
import {
  CommonHelpers,
  CommonHelpersRemoved,
  removeCommonHelpers,
  commonHelpersClasses,
} from './commonHelpers'

type TagsSize = 'medium' | 'large'

interface TagsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {
  readonly size?: TagsSize
  readonly addons?: boolean
}

export const Tags: React.SFC<TagsProps> = ({
  size,
  addons,
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'tags',
    {
      [`are-${size}`]: size,
      [`has-addons`]: addons,
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
