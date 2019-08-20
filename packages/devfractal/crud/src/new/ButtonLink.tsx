import { ButtonProps, classNames } from 'devfractal-ui-core'
import React from 'react'
import { Link } from 'react-router-dom'

export interface ButtonLinkProps {
  readonly to: string
  readonly variant?: ButtonProps['variant']
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  variant,
  to,
  children,
}) => (
  <Link
    to={to}
    className={classNames('button', { [`is-${variant}`]: variant })}
  >
    {children}
  </Link>
)
