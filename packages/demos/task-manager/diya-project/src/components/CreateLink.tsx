import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonsGroup } from 'technoidentity-devfractal'
interface CreateLinkProps {
  readonly to: string
}
export const CreateLink: React.FC<CreateLinkProps> = ({ to, children }) => (
  <ButtonsGroup alignment="right">
    <Link to={to} className="button is-primary">
      {children}
    </Link>
  </ButtonsGroup>
)
