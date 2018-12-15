import * as React from 'react'
import classNames from 'classnames'
import {
  CommonHelpers,
  CommonHelpersRemoved,
  removeCommonHelpers,
  commonHelpersClasses,
} from '../modifiers/commonHelpers'

type ButtonColor =
  | 'white'
  | 'light'
  | 'dark'
  | 'black'
  | 'text'
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

type ButtonSize = 'small' | 'normal' | 'medium' | 'large'

type ButtonModifier = 'selected'

type ButtonStyle = 'rounded' | 'inverted' | 'outlined'

type ButtonState =
  | 'normal'
  | 'hovered'
  | 'focused'
  | 'active'
  | 'loading'
  | 'static'

interface ButtonsProps
  extends React.ButtonHTMLAttributes<HTMLElement>,
    CommonHelpers {
  readonly alignment?: 'centered' | 'right'
  readonly addons?: boolean
}

export const Buttons: React.SFC<ButtonsProps> = ({
  addons,
  alignment,
  children,
  className,
  ...props
}) => {
  const propsHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)

  const classes: string = classNames(
    'buttons',
    {
      [`is-${alignment}`]: alignment,
      [`has-${addons}`]: addons,
    },
    className,
    commonHelpersClasses(props),
  )

  return (
    <div {...propsHelpersRemoved} {...props} className={classes}>
      {children}
    </div>
  )
}

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    CommonHelpers {
  readonly color?: ButtonColor
  readonly size?: ButtonSize
  readonly modifier?: ButtonModifier
  readonly state?: ButtonState
  readonly fullWidth?: boolean
  readonly buttonStyle?: ButtonStyle
}

export const Button: React.SFC<ButtonProps> = ({
  color,
  size,
  modifier,
  state,
  fullWidth,
  buttonStyle,
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'button',
    {
      [`is-${color}`]: color,
      [`is-${modifier}`]: modifier,
      [`is-${size}`]: size,
      [`is-${state}`]: state,
      [`is-${buttonStyle}`]: buttonStyle,
      [`is-fullwidth`]: fullWidth,
    },
    className,
    commonHelpersClasses(props),
  )
  return (
    <div className="control">
      <button {...propsCommonHelpersRemoved} className={classes}>
        {children}
      </button>
    </div>
  )
}
