import * as React from 'react'

import classNames from 'classnames'

import { Omit } from '../modifiers/commonHelpers'

import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Icon } from './Icon'

export interface ControlHelpers {
  readonly loading?: boolean
  readonly expanded?: boolean
  readonly controlSize?: ControlSize
  readonly leftIcon?: IconDefinition
  readonly rightIcon?: IconDefinition
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
  controlSize,
  leftIcon,
  rightIcon,
  ...props
}) => props

export interface ControlProps
  extends React.HTMLAttributes<HTMLElement>,
    ControlHelpers {}

export const Control: React.SFC<ControlProps> = ({ children, ...props }) => (
  <div className={controlClasses(props)}>
    {children}
    {props.leftIcon && (
      <Icon
        icon={props.leftIcon}
        direction="left"
        iconSize={props.controlSize}
      />
    )}
    {props.rightIcon && (
      <Icon
        icon={props.rightIcon}
        direction="right"
        iconSize={props.controlSize}
      />
    )}
  </div>
)
