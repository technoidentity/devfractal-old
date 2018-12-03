import * as React from 'react'

import classNames from 'classnames'

type LevelItemType = 'left' | 'right'

interface LevelProps extends React.HTMLAttributes<HTMLElement> {}

export const Level: React.SFC<LevelProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('level', className)
  return (
    <nav className={classes} {...props}>
      {children}
    </nav>
  )
}

interface LevelItemProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly levelItemType?: LevelItemType
}

export const LevelItem: React.SFC<LevelItemProps> = ({
  children,
  levelItemType,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'level-item',
    {
      'level-item': !levelItemType,
      [`level-${levelItemType}`]: levelItemType,
    },
    className,
  )
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
