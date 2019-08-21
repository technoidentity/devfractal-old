import {
  ButtonProps,
  ButtonsGroup,
  ButtonsGroupProps,
  classNames,
} from 'devfractal-ui-core'
import React from 'react'
import { Link } from 'react-router-dom'

export interface ButtonLinkProps {
  readonly to: string
  readonly variant?: ButtonProps['variant']
  readonly alignment?: ButtonsGroupProps['alignment']
  readonly size?: ButtonProps['size']
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  variant,
  alignment,
  size,
  to,
  children,
}) => {
  // tslint:disable-next-line: typedef
  const link = (
    <Link
      to={to}
      className={classNames('button', {
        [`is-${variant}`]: variant,
        [`is-${size}`]: size,
      })}
    >
      {children}
    </Link>
  )

  return alignment ? (
    <ButtonsGroup alignment={alignment}>{link}</ButtonsGroup>
  ) : (
    link
  )
}
