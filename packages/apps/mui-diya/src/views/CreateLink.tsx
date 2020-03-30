import React from 'react'
import { ButtonLink, ButtonLinkProps, ButtonsGroup } from 'srtp-ui'

export const CreateLink: React.FC<ButtonLinkProps> = props => (
  <ButtonsGroup alignment="right">
    <ButtonLink variant="primary" {...props}>
      Add
    </ButtonLink>
  </ButtonsGroup>
)
