import React from 'react'
import { classNamesHelper, Div, Helpers } from '../lib'

type LevelItemDirection = 'left' | 'right'

type LevelModifier = 'mobile'

export interface LevelProps extends React.HTMLAttributes<HTMLElement>, Helpers {
  readonly modifier?: LevelModifier
}

export const Level: React.FC<LevelProps> = ({
  modifier,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'level', {
    [`is-${modifier}`]: modifier,
  })
  return (
    <Div as="nav" {...props} className={classes}>
      {children}
    </Div>
  )
}
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

// tslint:disable-next-line: no-default-export
export default LevelItem
