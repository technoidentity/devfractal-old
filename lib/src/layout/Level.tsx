import React from 'react'
import { classNamesHelper, Div, Helpers } from '../lib'

type LevelItemDirection = 'left' | 'right'

export interface LevelProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const Level: React.FC<LevelProps> = ({ children, ...props }) => (
  <Div as="nav" {...props} className={classNamesHelper(props, 'level')}>
    {children}
  </Div>
)

export interface LevelItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly direction?: LevelItemDirection
  readonly flexible?: boolean
}

export const LevelItem: React.FC<LevelItemProps> = ({
  children,
  direction,
  flexible,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'level-item', {
    [`level-${direction}`]: direction,
    'is-flexible': flexible,
  })
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}
