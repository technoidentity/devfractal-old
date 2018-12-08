import React from 'react'

import classNames from 'classnames'
import { Helpers, HelpersRemoved, helpersClasses } from './helpers'
import { removeHelpers } from './helpers'

interface CheckBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    Helpers {}

export const CheckBox: React.SFC<CheckBoxProps> = ({
  children,
  className,
  ...props
}) => {
  const propsHelpersRemoved: HelpersRemoved<typeof props> = removeHelpers(props)
  const classes: string = classNames(
    'checkbox',
    className,
    helpersClasses(props),
  )

  return (
    <div className="control">
      <label className={classes}>
        <input {...propsHelpersRemoved} {...props} type="checkbox" />
        {children}
      </label>
    </div>
  )
}
