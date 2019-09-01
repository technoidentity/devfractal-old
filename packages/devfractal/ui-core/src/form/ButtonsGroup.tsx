import React from 'react'
import { classNamesHelper, El, Helpers } from '../base'

export interface ButtonsGroupProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {
  /**
   * Specifies the alignment of the buttons
   */
  readonly alignment?: 'centered' | 'right'
  /**
   * To attach buttons together
   */
  readonly addons?: boolean
  readonly size?: 'small' | 'medium' | 'large'
}

export const ButtonsGroup: React.FC<ButtonsGroupProps> = ({
  addons,
  alignment,
  children,
  size,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'buttons', {
    [`is-${alignment}`]: alignment,
    [`has-${addons}`]: addons,
    [`are-${size}`]: size,
  })

  return (
    <El {...props} className={classes}>
      {children}
    </El>
  )
}
