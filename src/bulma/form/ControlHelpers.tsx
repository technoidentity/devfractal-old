import React from 'react'

import classNames from 'classnames'

import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import { Icon } from './Icon'
import { Omit } from '../../types'

export interface ControlHelpers {
  readonly loading?: boolean
  readonly expanded?: boolean
  readonly fullWidth?: boolean
  readonly controlSize?: ControlSize
  readonly leftIcon?: IconDefinition
  readonly rightIcon?: IconDefinition
  readonly noControl?: true
}

export type ControlSize = 'small' | 'medium' | 'large'

type ControlClassesArgs = ControlHelpers

export const controlClasses: (props: ControlClassesArgs) => string = ({
  loading,
  expanded,
  controlSize,
  leftIcon,
  rightIcon,
}) =>
  classNames('control', {
    [`is-loading`]: loading,
    [`is-expanded`]: expanded,
    [`is-${controlSize}`]: controlSize,
    [`has-icons-left`]: leftIcon,
    [`has-icons-right`]: rightIcon,
  })

export type ControlHelpersRemoved<T> = Omit<T, keyof ControlHelpers>

export const removeControlHelpers: <T extends ControlHelpers>(
  props: T,
) => ControlHelpersRemoved<T> = ({
  loading,
  expanded,
  fullWidth,
  controlSize,
  leftIcon,
  rightIcon,
  noControl,
  ...props
}) => props

export interface ControlWrapperProps
  extends React.HTMLAttributes<HTMLElement>,
    ControlHelpers {}

export const ControlWrapper: React.SFC<ControlWrapperProps> = ({
  noControl,
  children,
  ...props
}) =>
  noControl ? (
    <>{children}</>
  ) : (
    <div className={controlClasses(props)}>
      {children}
      {props.leftIcon && <Icon icon={props.leftIcon} direction="left" />}
      {props.rightIcon && <Icon icon={props.rightIcon} direction="right" />}
    </div>
  )
