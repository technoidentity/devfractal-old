import * as React from 'react'
import classNames from 'classnames'

export interface FieldProps {
  readonly grouped?: boolean
  readonly groupCentered?: boolean
  readonly addons?: boolean
  readonly addonsCentered?: boolean
  readonly children: React.ReactNode
}

export const Field: React.SFC<FieldProps> = ({
  children,
  grouped,
  groupCentered,
  addons,
  addonsCentered,
}) => {
  const classes: string = classNames('field', {
    'is-grouped': grouped,
    'is-grouped-centered': groupCentered,
    'has-addons': addons,
    'has-addons-centered': addonsCentered,
  })
  return <div className={classes}>{children}</div>
}
