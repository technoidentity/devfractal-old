import * as React from 'react'

import className from 'classnames'

type LevelItemType = 'left' | 'right'

interface LevelProps {
  readonly children: React.ReactNode
}

interface LevelItemProps {
  readonly children: React.ReactNode
  readonly levelItemType?: LevelItemType
}

export const Level: React.SFC<LevelProps> = ({ children }) => (
  <nav className="level">{children}</nav>
)

export const LevelItem: React.SFC<LevelItemProps> = ({
  children,
  levelItemType,
}) => {
  const classes: string = className({
    'level-item': !levelItemType,
    [`level-${levelItemType}`]: levelItemType,
  })

  return (
    <div className={classes}>
      <div className="level-item">{children}</div>
    </div>
  )
}
