import React from 'react'

import { classNamesHelper, Div, Helpers } from '../modifiers'

type FieldGroupModifier = 'grouped-centered' | 'grouped-right'

type FieldAddonModifier = 'addons-centered' | 'addons-right'

type FieldSize = 'narrow' | 'expanded'

export interface FieldProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly grouped?: boolean
  readonly addons?: boolean
  readonly horizontal?: boolean
  readonly groupedMultiline?: boolean
  readonly size?: FieldSize
  readonly groupModifier?: FieldGroupModifier
  readonly addonsModifier?: FieldAddonModifier
}

export const Field: React.SFC<FieldProps> = ({
  grouped,
  addons,
  horizontal,
  groupedMultiline,
  groupModifier,
  size,
  addonsModifier,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'field', {
    [`is-grouped`]: grouped || groupedMultiline || groupModifier,
    [`is-horizontal`]: horizontal,
    [`has-addons`]: addons || addonsModifier,
    [`is-${size}`]: size,
    [`is-grouped-multiline`]: groupedMultiline,
    [`is-${groupModifier}`]: groupModifier,
    [`has-${addonsModifier}`]: addonsModifier,
  })

  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}
