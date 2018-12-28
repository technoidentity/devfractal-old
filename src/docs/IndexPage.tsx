import React from 'react'
import { Link } from 'react-router-dom'
import { Column, Columns } from '../bulma/columns'
import { Title } from '../bulma/elements'
import { SubTitle } from '../bulma/elements/Title'
import { Container, Hero, Section } from '../bulma/layout'
import { HeroBody } from '../bulma/layout/Hero'
import logo from './logo.png'
import {
  ColumnsMedia,
  ComponentsMedia,
  CompositesMedia,
  ElementsMedia,
  FormMedia,
  LayoutMedia,
  ModifiersMedia,
} from './Medias'

export const IndexPageBody: React.SFC = () => (
  <Section>
    <Container>
      <Columns multiline>
        <Column>
          <Link to="/form">
            <FormMedia />
          </Link>
        </Column>
        <Column>
          <Link to="/columns">
            <ColumnsMedia />
          </Link>
        </Column>
        <Column>
          <Link to="/layout">
            <LayoutMedia />
          </Link>
        </Column>
      </Columns>
      <Columns multiline>
        <Column>
          <Link to="/elements">
            <ElementsMedia />
          </Link>
        </Column>
        <Column>
          <Link to="/components">
            <ComponentsMedia />
          </Link>
        </Column>
        <Column>
          <Link to="/modifiers">
            <ModifiersMedia />
          </Link>
        </Column>
      </Columns>
      <Columns>
        <Column>
          <Link to="/composites">
            <CompositesMedia />
          </Link>
        </Column>
        <Column />
        <Column />
      </Columns>
    </Container>
  </Section>
)

export const IndexPageHeader: React.SFC = () => (
  <Hero variant="light">
    <HeroBody>
      <Container className="has-text-centered">
        <Title>
          <Link to="/">
            <img src={logo} style={{ width: '512px' }} />
          </Link>
        </Title>
        <SubTitle>React, as simple as Angular!</SubTitle>
      </Container>
    </HeroBody>
  </Hero>
)
