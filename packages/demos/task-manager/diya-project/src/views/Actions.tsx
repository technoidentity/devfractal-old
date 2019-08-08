import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Icon, Section } from 'technoidentity-devfractal'

export const Actions: React.FC = () => (
  <Section>
    <>
      <Icon icon={faEdit}>Edit</Icon>
      <Icon icon={faTrashAlt}>Delete</Icon>
    </>
  </Section>
)
