import React from 'react'
import { Box } from '../../elements'
import { SubTitle, Title } from '../../elements/Title'
import { Container, Section } from '../../layout'

export const SectionExample: React.SFC = () => (
  <div>
    <Title>Section with large spacing</Title>
    <Box>
      <Section modifier="large">
        <Container>
          <Title>Section</Title>
          <SubTitle>
            A simple container to divide your page into sections
          </SubTitle>
        </Container>
      </Section>
    </Box>
    <Title>Section with medium spacing</Title>
    <Box>
      <Section modifier="medium">
        <Container>
          <Title>Section</Title>
          <SubTitle>
            A simple container to divide your page into sections
          </SubTitle>
        </Container>
      </Section>
    </Box>
  </div>
)
