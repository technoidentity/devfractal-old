import { ButtonsGroup, ButtonsGroupProps } from 'stp-ui'
import React from 'react'
import { ButtonLink, ButtonLinkProps } from './ButtonLink'
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
