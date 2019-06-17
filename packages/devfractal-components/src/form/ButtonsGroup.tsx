import React from 'react'
import { classNamesHelper, El, Helpers } from '../lib'

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
    <El {...props} className={classes}>
      {children}
    </El>
  )
}

// tslint:disable-next-line: no-default-export
export default ButtonsGroup
