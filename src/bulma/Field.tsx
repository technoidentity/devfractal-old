import * as React from 'react'
import classNames from 'classnames'

export interface FieldProps {
  readonly grouped?: boolean
  readonly centered?: boolean
  readonly children: React.ReactNode
}

export const Field: React.SFC<FieldProps> = ({
  children,
  grouped,
  centered,
}) => {
  const classes: string = classNames('field', {
    'is-grouped': grouped,
    'is-grouped-centered': centered,
  })
  return <div className={classes}>{children}</div>
}
