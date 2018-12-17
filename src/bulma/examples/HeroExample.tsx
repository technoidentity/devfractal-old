import * as React from 'react'

import { HeroBody, HeroHead, HeroFoot, Hero } from '../layout/Hero'
import { Title, SubTitle } from '../elements/Title'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarEnd,
  NavbarMenu,
  NavbarBurger,
} from '../components/Navbar'
import { Button } from '../form/Button'
import { Tabs } from '../components/Tabs'

export const HeroExample: React.SFC = () => (
  <Section>
    <Hero variant="primary" size="medium">
      <HeroHead>
        <Navbar>
          <Container>
            <NavbarBrand>
              <NavbarItem>
                <img
                  src="https://bulma.io/images/bulma-type-white.png"
                  alt="Logo"
                />
              </NavbarItem>
              <NavbarBurger data-target="navbarMenuHeroA">
                <span />
                <span />
                <span />
              </NavbarBurger>
            </NavbarBrand>
            <NavbarMenu>
              <NavbarEnd>
                <NavbarItem>Home</NavbarItem>
                <NavbarItem>Examples</NavbarItem>
                <NavbarItem>Documentation</NavbarItem>
                <NavbarItem>
                  <Button variant="primary" buttonStyle="inverted">
                    <span>Download</span>
                  </Button>
                </NavbarItem>
              </NavbarEnd>
            </NavbarMenu>
          </Container>
        </Navbar>
      </HeroHead>

      <HeroBody>
        <Container className="has-text-centered">
          <Title>Title</Title>
          <SubTitle>Subtitle</SubTitle>
        </Container>
      </HeroBody>

      <HeroFoot>
        <Tabs>
          <Container>
            <ul>
              <li className="is-active">
                <a>Overview</a>
              </li>
              <li>
                <a>Modifiers</a>
              </li>
              <li className="is-active">
                <a>Grid</a>
              </li>
              <li>
                <a>Elements</a>
              </li>
              <li>
                <a>Components</a>
              </li>
              <li>
                <a>Layout</a>
              </li>
            </ul>
          </Container>
        </Tabs>
      </HeroFoot>
    </Hero>
  </Section>
)
