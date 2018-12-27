import React from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'

type LevelItemType = 'left' | 'right'

interface LevelProps extends React.HTMLAttributes<HTMLElement>, Helpers {}

export const Level: React.SFC<LevelProps> = ({ children, ...props }) => {
  const classes: string = classNamesHelper(props, 'level')
  return (
    <Div as="nav" {...props} className={classes}>
      {children}
    </Div>
  )
}

interface LevelItemProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
  readonly levelItemType?: LevelItemType
}

export const LevelItem: React.SFC<LevelItemProps> = ({
  children,
  levelItemType,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'level-item', {
    'level-item': !levelItemType,
    [`level-${levelItemType}`]: levelItemType,
  })
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}
