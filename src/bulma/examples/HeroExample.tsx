import React from 'react'
import { TabsItem } from '../components'
import {
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarEnd,
  NavbarItem,
  NavbarMenu,
} from '../components/Navbar'
import { Tabs } from '../components/StatefulTabs'
import { SubTitle, Title } from '../elements/Title'
import { Button } from '../form'
import { Container, Section } from '../layout'
import { Hero, HeroBody, HeroFoot, HeroHead } from '../layout/Hero'

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
            <Tabs>
              <TabsItem active value="overview">
                Overview
              </TabsItem>

              <TabsItem value="modifiers">Modifiers</TabsItem>

              <TabsItem active value="grid">
                Grid
              </TabsItem>

              <TabsItem value="elements">Elements</TabsItem>

              <TabsItem value="components">Components</TabsItem>

              <TabsItem value="layout">Layout</TabsItem>
            </Tabs>
          </Container>
        </Tabs>
      </HeroFoot>
    </Hero>
  </Section>
)
