import * as React from 'react'
import classNames from 'classnames'

type FieldGroupModifier =
  | 'grouped'
  | 'grouped-centered'
  | 'grouped-right'
  | 'grouped-multiline'
  | 'horizontal'

type FieldAddonModifier = 'addons' | 'addons-centered' | 'addons-right'
export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly groupModifier?: FieldGroupModifier
  readonly addonsModifier?: FieldAddonModifier
}

export const Field: React.SFC<FieldProps> = ({
  children,
  groupModifier,
  addonsModifier,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'field',
    {
      [`is-${groupModifier}`]: groupModifier,
      [`has-${addonsModifier}`]: addonsModifier,
    },
    className,
  )
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}
