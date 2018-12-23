import * as React from 'react'

import { Helpers, classNamesHelper, Div } from '../modifiers'

// @TODO: All of these are supported?
export type HelpType = 'primary' | 'info' | 'success' | 'warning' | 'danger'

export interface FieldHelpProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    Helpers {
  readonly variant?: HelpType
}

export const FieldHelp: React.SFC<FieldHelpProps> = ({
  variant,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'help', {
    [`is-${variant}`]: variant,
  })

  return (
    <Div as="p" {...props} className={classes}>
      {children}
    </Div>
  )
}
