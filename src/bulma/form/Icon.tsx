import * as React from 'react'

import classNames from 'classnames'

import { ControlSize } from './ControlHelpers'
import { Helpers, helpersClasses, removeHelpers } from '../modifiers'

import {
  FontAwesomeIcon,
  Props as FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

type IconDirection = 'left' | 'right'

interface IconProps extends FontAwesomeIconProps, Helpers {
  readonly icon: IconDefinition
  readonly iconSize?: ControlSize
  readonly direction?: IconDirection
}

export const Icon: React.SFC<IconProps> = ({
  icon,
  iconSize,
  direction,
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'icon',
    {
      [`is-${iconSize}`]: iconSize,
      [`is-${direction}`]: direction,
    },
    helpersClasses(props),
    className,
  )

  return (
    <span {...removeHelpers(props)} className={classes}>
      <FontAwesomeIcon icon={icon}>{children}</FontAwesomeIcon>
    </span>
  )
}
