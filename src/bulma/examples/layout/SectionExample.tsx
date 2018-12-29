import React from 'react'
import { SubTitle, Title } from '../../elements/Title'
import { Container, Section } from '../../layout'

export const SectionExample: React.SFC = () => (
  <Section>
    <Title>Section with large spacing</Title>
    <Section modifier="large">
      <Container>
        <Title>Section</Title>
        <SubTitle>
          A simple container to divide your page into sections
        </SubTitle>
      </Container>
    </Section>
    <Title>Section with medium spacing</Title>
    <Section modifier="medium">
      <Container>
        <Title>Section</Title>
        <SubTitle>
          A simple container to divide your page into sections
        </SubTitle>
      </Container>
    </Section>
  </Section>
)
