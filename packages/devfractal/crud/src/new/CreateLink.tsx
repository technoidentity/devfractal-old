import React from 'react'
import {
  ButtonLink,
  ButtonLinkProps,
  ButtonsGroup,
  ButtonsGroupProps,
} from 'technoidentity-devfractal'

export interface CreateLinkProps extends ButtonLinkProps {
  readonly alignment?: ButtonsGroupProps['alignment']
}

export const CreateLink: React.FC<CreateLinkProps> = ({
  alignment,
  ...props
}) => (
  <ButtonsGroup alignment={alignment}>
    <ButtonLink {...props} />
  </ButtonsGroup>
)
