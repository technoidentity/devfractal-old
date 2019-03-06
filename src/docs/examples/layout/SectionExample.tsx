import React from 'react'
import { Container, Section, SubTitle, Title } from '../devfractal'

export const LargeSectionExample: React.FC = () => (
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
  </Section>
)

export const MediumSectionExample: React.FC = () => (
  <Section>
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

export const SectionExample: React.FC = () => (
  <>
    <LargeSectionExample />
    <MediumSectionExample />
  </>
)
