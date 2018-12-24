import React from 'react'

import { Helpers, removeHelpers, classNamesHelper, Div } from '../modifiers'

import {
  FontAwesomeIcon,
  Props as FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

type IconDirection = 'left' | 'right'

interface IconProps extends FontAwesomeIconProps, Helpers {
  readonly icon: IconDefinition
  readonly direction?: IconDirection
}

export const Icon: React.SFC<IconProps> = ({
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
