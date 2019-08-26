import React from 'react'
import {
  ButtonLink,
  ButtonLinkProps,
  ButtonsGroup,
  ButtonsGroupProps,
} from 'technoidentity-devfractal'

export interface CreateLinkProps extends ButtonLinkProps {
  readonly alignment?: ButtonsGroupProps['alignment']
  readonly createTo: string
}

export const CreateLink: React.FC<CreateLinkProps> = ({
  createTo,
  alignment,
  ...props
}) => (
  <ButtonsGroup alignment={alignment}>
    <ButtonLink to={createTo} {...props}>
      {children}
    </ButtonLink>
  </ButtonsGroup>
)
