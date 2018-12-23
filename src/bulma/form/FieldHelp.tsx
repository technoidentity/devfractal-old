import * as React from 'react'

import classNames from 'classnames'
import { Helpers, helpersClasses } from '../modifiers'

// @TODO: All of these are supported?
export type HelpType = 'primary' | 'info' | 'success' | 'warning' | 'danger'

export interface FieldHelpProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    Helpers {
  readonly variant?: HelpType
}

export const FieldHelp: React.SFC<FieldHelpProps> = ({
  variant,
  className,
  children,
  ...props
}) => {
  const classes: string = classNames(
    'help',
    {
      [`is-${variant}`]: variant,
    },
    helpersClasses(props),
    className,
  )

  return <p className={classes}>{children}</p>
}
