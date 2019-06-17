import React from 'react'
import { IconType } from 'react-icons'
import { classNames } from '../lib'

export interface ControlHelpers {
  readonly loading?: boolean
  readonly expanded?: boolean
  readonly fullWidth?: boolean
  readonly ctrlSize?: ControlSize
  readonly leftIcon?: IconType
  readonly rightIcon?: IconType
  readonly noControl?: true
}

export type ControlSize = 'small' | 'medium' | 'large'

type ControlClassesArgs = ControlHelpers

export const controlClasses: (props: ControlClassesArgs) => string = ({
  loading,
  expanded,
  fullWidth,
  ctrlSize,
  leftIcon,
  rightIcon,
}) =>
  classNames('control', {
    'is-loading': loading,
    'is-expanded': expanded,
    'is-fullwidth': fullWidth,
    [`is-${ctrlSize}`]: ctrlSize,
    'has-icons-left': leftIcon,
    'has-icons-right': rightIcon,
  })

export type ControlHelpersRemoved<T> = Omit<T, keyof ControlHelpers>

export const removeControlHelpers: <T extends ControlHelpers>(
  props: T,
) => ControlHelpersRemoved<T> = ({
  loading,
  expanded,
  fullWidth,
  ctrlSize: controlSize,
  leftIcon,
  rightIcon,
  noControl,
  ...props
}) => props

export interface ControlWrapperProps
  extends React.HTMLAttributes<HTMLElement>,
    ControlHelpers {}

export const ControlWrapper: React.FC<ControlWrapperProps> = ({
  noControl,
  children,
  ...props
}) =>
  noControl ? (
    <>{children}</>
  ) : (
    <div className={controlClasses(props)}>
      {children}
      {props.leftIcon && <props.leftIcon direction="left" />}
      {props.rightIcon && <props.rightIcon direction="right" />}
    </div>
  )
