import React from 'react'
import { Input } from '../form'
import { Section } from '../layout'

export const InputExample: React.SFC = () => (
  <div>
    <Section>
      <Input
        variant="primary"
        ctrlSize="large"
        state="focused"
        placeholder="primary and focused"
      />
    </Section>
    <Section>
      <Input
        variant="info"
        rounded
        state="active"
        loading
        ctrlSize="medium"
        placeholder="loading and rounded"
      />
    </Section>
    <Input disabled placeholder="disabled input" />
  </div>
)
