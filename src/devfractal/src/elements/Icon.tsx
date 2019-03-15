import {
  FontAwesomeIcon,
  Props as FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import React from 'react'
import { classNamesHelper, Div, Helpers, removeHelpers } from '../lib'

type IconDirection = 'left' | 'right'

export interface IconProps extends FontAwesomeIconProps, Helpers {
  readonly direction?: IconDirection
}

export const Icon: React.FC<IconProps> = ({
  direction,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'icon', {
    [`is-${direction}`]: direction,
  })

  return (
    <Div as="span" className={classes}>
      <FontAwesomeIcon {...removeHelpers(props)}>{children}</FontAwesomeIcon>
    </Div>
  )
}
