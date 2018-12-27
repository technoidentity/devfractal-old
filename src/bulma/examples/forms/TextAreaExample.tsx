import React from 'react'
import { Column, Columns } from '../../columns'
import { Title } from '../../elements'
import { TextArea } from '../../form'
import { Section } from '../../layout'

export const TextAreaExample: React.SFC = () => (
  <div>
    <Columns>
      <Column>
        <Section>
          <Title>Default Textarea</Title>
          <TextArea placeholder="Default textArea" />
        </Section>
      </Column>
    </Columns>
  </div>
)
