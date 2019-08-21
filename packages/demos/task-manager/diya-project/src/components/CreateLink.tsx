import React from 'react'
import { ButtonsGroup, v2 } from 'technoidentity-devfractal'

export const CreateLink: React.FC<v2.ButtonLinkProps> = props => (
  <ButtonsGroup alignment="right">
    <v2.ButtonLink {...props} />
  </ButtonsGroup>
)
