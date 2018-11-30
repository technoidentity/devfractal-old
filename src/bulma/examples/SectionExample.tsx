import * as React from 'react'
import { Container } from '../Container'
import { SubTitle, Title } from '../Title'
import { Section } from '../Section'

export const SectionExample: React.SFC = () => (
  <Section>
    <Container>
      <Title>Section</Title>
      <SubTitle>A simple container to divide your page into sections</SubTitle>
    </Container>
  </Section>
)
