import * as React from 'react'

import classNames from 'classnames'

import { Helpers, removeHelpers, helpersClasses } from '../modifiers'

export interface FieldSetProps
  extends React.FieldsetHTMLAttributes<HTMLFieldSetElement>,
    Helpers {}

export const FieldSet: React.SFC<FieldSetProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(className, helpersClasses(props))

  return (
    <fieldset {...removeHelpers(props)} className={classes}>
      // @TODO: This is wrong?
      <div className="field">{children}</div>
    </fieldset>
  )
}
