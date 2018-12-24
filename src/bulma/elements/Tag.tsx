import React from 'react'
import classNames from 'classnames'
import {
  CommonHelpers,
  CommonHelpersRemoved,
  removeCommonHelpers,
  commonHelpersClasses,
} from '../modifiers/commonHelpers'

type TagVariant =
  | 'black'
  | 'dark'
  | 'light'
  | 'primary'
  | 'link'
  | 'info'
  | 'success'

type TagSize = 'normal' | 'medium' | 'large'

type TagModifier = 'rounded' | 'delete'

interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    CommonHelpers {
  readonly size?: TagSize
  readonly variant?: TagVariant
  readonly modifier?: TagModifier
}

export const Tag: React.SFC<TagProps> = ({
  size,
  variant,
  modifier,
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    className,
    'tag',
    {
      [`is-${size}`]: size,
      [`is-${modifier}`]: modifier,
      [`is-${variant}`]: variant,
    },
    className,
    commonHelpersClasses(props),
  )
  return (
    <span {...propsCommonHelpersRemoved} className={classes}>
      {children}
    </span>
  )
}
