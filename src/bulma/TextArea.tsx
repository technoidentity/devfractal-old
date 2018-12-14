import * as React from 'react'
import classNames from 'classnames'
import {
  CommonHelpers,
  CommonHelpersRemoved,
  removeCommonHelpers,
  commonHelpersClasses,
} from './commonHelpers'

type TextAreaColor = 'primary' | 'info' | 'warning' | 'success' | 'danger'

type TextAreaSize = 'small' | 'large' | 'normal' | 'medium'

type TextAreaState = 'normal' | 'hovered' | 'focused'

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    CommonHelpers {
  readonly color?: TextAreaColor
  readonly size?: TextAreaSize
  readonly state?: TextAreaState
  readonly rows?: number
}

export const TextArea: React.SFC<TextAreaProps> = ({
  color,
  size,
  state,
  rows,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'textarea',
    {
      [`is-${color}`]: color,
      [`is-${size}`]: size,
      [`is-${state}`]: state,
    },
    className,
    commonHelpersClasses(props),
  )
  return (
    <div className="control">
      <textarea {...propsCommonHelpersRemoved} className={classes} />
    </div>
  )
}
