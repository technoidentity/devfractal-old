import classNames from 'classnames'

import { Omit } from '../modifiers/commonHelpers'

import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export interface ControlHelpers {
  readonly loading?: boolean
  readonly expanded?: boolean
  readonly controlSize?: ControlSize
}

export type ControlSize = 'small' | 'medium' | 'large'

type ControlClassesArgs = ControlHelpers & {
  readonly leftIcon?: IconDefinition
  readonly rightIcon?: IconDefinition
}

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
  ...props
}) => props
