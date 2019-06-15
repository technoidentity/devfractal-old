import { IconType } from 'react-icons'
import { ControlSize } from '../lib'
import { Omit } from '../utils'

export interface IconHelpers {
  readonly leftIcon?: IconType
  readonly iconSize?: ControlSize
  readonly rightIcon?: IconType
}

export type IconHelpersRemoved<T> = Omit<T, keyof IconHelpers>

export function removeIconHelpers<T extends IconHelpers>(
  props: T,
): IconHelpersRemoved<T> {
  const { leftIcon, rightIcon, iconSize, ...result } = props
  return result
}
