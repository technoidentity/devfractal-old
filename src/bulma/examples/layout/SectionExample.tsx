import React from 'react'
import { SubTitle, Title } from '../../elements/Title'
import { Container, Section } from '../../layout'

export const SectionExample: React.SFC = () => (
  <Section>
    <Container>
      <Title>Section</Title>
      <SubTitle>A simple container to divide your page into sections</SubTitle>
    </Container>
  </Section>
)
