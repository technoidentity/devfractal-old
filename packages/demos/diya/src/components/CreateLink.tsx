import React from 'react'
import {
  ButtonLink,
  ButtonLinkProps,
  ButtonsGroup,
} from 'technoidentity-devfractal'

export const CreateLink: React.FC<ButtonLinkProps> = props => (
  <ButtonsGroup alignment="right">
    <ButtonLink {...props} />
  </ButtonsGroup>
)
