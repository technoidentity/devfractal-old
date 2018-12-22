import classNames from 'classnames'
import { Omit } from '../modifiers/commonHelpers'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export interface ControlHelpers {
  readonly loading?: boolean
  readonly expanded?: boolean
  readonly leftIcon?: IconDefinition
  readonly rightIcon?: IconDefinition
}

export type ControlSize = 'small' | 'medium' | 'large'

type ControlClassesArgs = ControlHelpers & {
  readonly controlSize?: ControlSize
}

export const controlClasses: (props: ControlClassesArgs) => string = ({
  loading,
  expanded,
  controlSize: size,
  leftIcon,
  rightIcon,
}) =>
  classNames('control', {
    [`is-loading`]: loading,
    [`is-expanded`]: expanded,
    [`is-${size}`]: size,
    [`has-icons-left`]: leftIcon,
    [`has-icons-right`]: rightIcon,
  })

export type ControlHelpersRemoved<T> = Omit<T, keyof ControlHelpers>

export const removeControlHelpers: <T extends ControlHelpers>(
  props: T,
) => ControlHelpersRemoved<T> = ({
  loading,
  expanded,
  leftIcon,
  rightIcon,
  ...props
}) => props
