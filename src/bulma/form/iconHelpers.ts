import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Omit } from '../../types'
import { ControlSize } from './ControlHelpers'

export interface IconHelpers {
  readonly leftIcon?: IconDefinition
  readonly iconSize?: ControlSize
  readonly rightIcon?: IconDefinition
}

export type IconHelpersRemoved<T> = Omit<T, keyof IconHelpers>

export const removeIconHelpers: <T extends IconHelpers>(
  props: T,
) => IconHelpersRemoved<T> = ({ leftIcon, rightIcon, iconSize, ...props }) =>
  props
