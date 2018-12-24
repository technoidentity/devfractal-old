import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarEnd,
  NavbarItem,
  NavbarMenu,
} from '../components/Navbar'
import { Tabs } from '../components/Tabs'
import { SubTitle, Title } from '../elements/Title'
import { Button } from '../form/Button'
import { Container } from '../layout/Container'
import { Hero, HeroBody, HeroFoot, HeroHead } from '../layout/Hero'
import { Section } from '../layout/Section'

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
                  <Button variant="primary" inverted>
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
