import {
  FontAwesomeIcon,
  Props as FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import { classNamesHelper, Div, Helpers, removeHelpers } from 'base'
import React from 'react'

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

// tslint:disable-next-line: no-default-export
export default Icon
