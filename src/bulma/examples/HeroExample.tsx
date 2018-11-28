import * as React from 'react'

import { Hero, HeroBody } from '../Hero'
import { Title, SubTitle } from '../Title'
import { Container } from '../Container'

export const HeroExample: React.SFC = () => (
  <Hero>
    <HeroBody>
      <Container>
        <Title>Hero title</Title>
        <SubTitle>Hero subtitle</SubTitle>
      </Container>
    </HeroBody>
  </Hero>
)
