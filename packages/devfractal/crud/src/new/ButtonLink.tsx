import {
  AllControlHelpers,
  ButtonProps,
  ButtonsGroup,
  ButtonsGroupProps,
  classNamesHelper,
  removeControlHelpers,
  removeHelpers,
  removeIconHelpers,
} from 'devfractal-ui-core'
import React from 'react'
import { Link } from 'react-router-dom'

export interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    AllControlHelpers {
  readonly to: string
  readonly variant?: ButtonProps['variant']
  readonly size?: ButtonProps['size']
  readonly state?: ButtonProps['state']
  readonly fullWidth?: boolean
  readonly rounded?: boolean
  readonly inverted?: boolean
  readonly outlined?: boolean
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  variant,
  size,
  state,
  fullWidth,
  rounded,
  inverted,
  outlined,
  children,

  ...props
}) => {
  const classes: string = classNamesHelper(props, 'button', {
    [`is-${variant}`]: variant,
    [`is-${size}`]: size,
    [`is-${state}`]: state,
    'is-rounded': rounded,
    'is-inverted': inverted,
    'is-outlined': outlined,
    'is-fullwidth': fullWidth,
  })

  // tslint:disable-next-line: typedef
  return (
    <Link
      {...removeIconHelpers(removeControlHelpers(removeHelpers(props)))}
      className={classes}
    >
      {children}
    </Link>
  )
}
