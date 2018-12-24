import classNames from 'classnames'
import React from 'react'
import {
  CommonHelpers,
  commonHelpersClasses,
  CommonHelpersRemoved,
  removeCommonHelpers,
} from '../modifiers/commonHelpers'

type LevelItemType = 'left' | 'right'

interface LevelProps extends React.HTMLAttributes<HTMLElement>, CommonHelpers {}

export const Level: React.SFC<LevelProps> = ({
  children,
  className,
  ...props
}) => {
  const propsHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'level',
    className,
    commonHelpersClasses(props),
  )
  return (
    <nav {...propsHelpersRemoved} className={classes}>
      {children}
    </nav>
  )
}

interface LevelItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {
  readonly levelItemType?: LevelItemType
}

export const LevelItem: React.SFC<LevelItemProps> = ({
  children,
  levelItemType,
  className,
  ...props
}) => {
  const propsHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'level-item',
    {
      'level-item': !levelItemType,
      [`level-${levelItemType}`]: levelItemType,
    },
    className,
    commonHelpersClasses(props),
  )
  return (
    <div {...propsHelpersRemoved} className={classes}>
      {children}
    </div>
  )
}
