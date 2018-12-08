import * as React from 'react'

import classNames from 'classnames'
import {
  Helpers,
  HelpersRemoved,
  removeHelpers,
  helpersClasses,
} from './helpers'

type LevelItemType = 'left' | 'right'

interface LevelProps extends React.HTMLAttributes<HTMLElement>, Helpers {}

export const Level: React.SFC<LevelProps> = ({
  children,
  className,
  ...props
}) => {
  const propsHelpersRemoved: HelpersRemoved<typeof props> = removeHelpers(props)
  const classes: string = classNames('level', className, helpersClasses(props))
  return (
    <nav {...propsHelpersRemoved} {...props} className={classes}>
      {children}
    </nav>
  )
}

interface LevelItemProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
  readonly levelItemType?: LevelItemType
}

export const LevelItem: React.SFC<LevelItemProps> = ({
  children,
  levelItemType,
  className,
  ...props
}) => {
  const propsHelpersRemoved: HelpersRemoved<typeof props> = removeHelpers(props)
  const classes: string = classNames(
    'level-item',
    {
      'level-item': !levelItemType,
      [`level-${levelItemType}`]: levelItemType,
    },
    className,
    helpersClasses(props),
  )
  return (
    <div {...propsHelpersRemoved} {...props} className={classes}>
      {children}
    </div>
  )
}
