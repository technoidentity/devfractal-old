import React from 'react'

import classNames from 'classnames'
import {
  CommonHelpers,
  CommonHelpersRemoved,
  commonHelpersClasses,
  removeCommonHelpers,
} from './commonHelpers'

interface CheckBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    CommonHelpers {}

export const CheckBox: React.SFC<CheckBoxProps> = ({
  children,
  className,
  ...props
}) => {
  const propsHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'checkbox',
    className,
    commonHelpersClasses(props),
  )

  return (
    <div className="control">
      <label className={classes}>
        <input {...propsHelpersRemoved} type="checkbox" />
        {children}
      </label>
    </div>
  )
}
