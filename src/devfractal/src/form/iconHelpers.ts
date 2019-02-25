import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Omit } from '../types'
import { ControlSize } from './internal'

export interface IconHelpers {
  readonly leftIcon?: IconDefinition
  readonly iconSize?: ControlSize
  readonly rightIcon?: IconDefinition
}

export type IconHelpersRemoved<T> = Omit<T, keyof IconHelpers>

export function removeIconHelpers<T extends IconHelpers>(
  props: T,
): IconHelpersRemoved<T> {
  const { leftIcon, rightIcon, iconSize, ...result } = props
  return result
}
