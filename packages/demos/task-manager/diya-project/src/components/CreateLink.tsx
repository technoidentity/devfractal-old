import React from 'react'
import { ButtonsGroup } from 'technoidentity-devfractal'
import { ButtonLink, ButtonLinkProps } from '../crud'

export const CreateLink: React.FC<ButtonLinkProps> = props => (
  <ButtonsGroup alignment="right">
    <ButtonLink {...props} />
  </ButtonsGroup>
)
