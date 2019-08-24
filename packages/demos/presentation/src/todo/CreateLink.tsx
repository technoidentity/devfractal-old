import React from 'react'
import {
  ButtonLink,
  ButtonsGroup,
  ButtonsGroupProps,
} from 'technoidentity-devfractal'

export interface CreateLinkProps {
  readonly alignment?: ButtonsGroupProps['alignment']
  readonly createTo: string
}

export const CreateLink: React.FC<CreateLinkProps> = ({
  createTo,
  alignment,
}) => (
  <ButtonsGroup alignment={alignment}>
    <ButtonLink to={createTo} variant="primary">
      Add Todo
    </ButtonLink>
  </ButtonsGroup>
)
