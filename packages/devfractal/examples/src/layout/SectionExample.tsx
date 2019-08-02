import {
  Container,
  Section as SectionComponent,
  SubTitle,
  Title,
} from 'devfractal-ui-core'
import React from 'react'

const LargeSectionExample: React.FC = () => (
  <SectionComponent>
    <Title>Section with large spacing</Title>
    <SectionComponent modifier="large">
      <Container>
        <Title>Section</Title>
        <SubTitle>
          A simple container to divide your page into sections
        </SubTitle>
      </Container>
    </SectionComponent>
  </SectionComponent>
)

const MediumSectionExample: React.FC = () => (
  <SectionComponent>
    <Title>Section with medium spacing</Title>
    <SectionComponent modifier="medium">
      <Container>
        <Title>Section</Title>
        <SubTitle>
          A simple container to divide your page into sections
        </SubTitle>
      </Container>
    </SectionComponent>
  </SectionComponent>
)

export const Section: React.FC = () => (
  <>
    <LargeSectionExample />
    <MediumSectionExample />
  </>
)
