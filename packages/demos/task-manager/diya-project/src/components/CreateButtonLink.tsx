import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonsGroup } from 'technoidentity-devfractal'

interface CreateButtonLinkProps {
  readonly to: string
}

export const ButtonLink: React.FC<CreateButtonLinkProps> = ({
  to,
  children,
}) => (
  <Link to={to} className="button is-primary">
    {children}
  </Link>
)

export const CreateLink: React.FC<CreateButtonLinkProps> = props => (
  <ButtonsGroup alignment="right">
    <ButtonLink {...props} />
  </ButtonsGroup>
)
