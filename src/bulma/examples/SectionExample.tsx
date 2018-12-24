import React from 'react'
import { Container } from '../layout/Container'
import { SubTitle, Title } from '../elements/Title'
import { Section } from '../layout/Section'

export const SectionExample: React.SFC = () => (
  <Section>
    <Container>
      <Title>Section</Title>
      <SubTitle>A simple container to divide your page into sections</SubTitle>
    </Container>
  </Section>
)
