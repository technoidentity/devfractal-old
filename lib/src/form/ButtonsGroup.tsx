import React from 'react'
import { classNamesHelper, Div, Helpers } from '../lib'

export interface ButtonsGroupProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {
  readonly alignment?: 'centered' | 'right'
  readonly addons?: boolean
}

export const ButtonsGroup: React.FC<ButtonsGroupProps> = ({
  addons,
  alignment,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'buttons', {
    [`is-${alignment}`]: alignment,
    [`has-${addons}`]: addons,
  })

  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}
