import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonProps, classNames } from 'technoidentity-devfractal'

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
