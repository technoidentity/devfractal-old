import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { classNames } from 'srtp-core'

export interface ControlHelpers {
  readonly loading?: boolean
  readonly expanded?: boolean
  readonly fullWidth?: boolean
  readonly ctrlSize?: ControlSize
  readonly leftIcon?: IconDefinition
  readonly rightIcon?: IconDefinition
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
