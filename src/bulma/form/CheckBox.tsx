import React from 'react'

import classNames from 'classnames'

import { Helpers, helpersClasses, removeHelpers } from '../modifiers'

export interface CheckBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    Helpers {}

export const CheckBox: React.SFC<CheckBoxProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'checkbox',
    helpersClasses(props),
    className,
  )

  return (
    <div className="control">
      <label className="checkbox">
        <input {...removeHelpers(props)} type="checkbox" className={classes} />
        {children}
      </label>
    </div>
  )
}
