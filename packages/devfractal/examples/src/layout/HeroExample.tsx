import { Tabs, TabsItem } from '@stp/ui'
import {
  Button,
  Container,
  Hero as HeroComponent,
  HeroBody,
  HeroFoot,
  HeroHead,
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarEnd,
  NavbarItem,
  NavbarMenu,
  Section,
  SubTitle,
  Title,
} from '@stp/ui'
import React from 'react'

const SimpleHeroExample: React.FC = () => (
  <Section>
    <Title>Simple Hero</Title>
    <HeroComponent>
      <HeroBody>
        <Container>
          <Title>Hero title</Title>
          <SubTitle>Hero subtitle</SubTitle>
        </Container>
      </HeroBody>
    </HeroComponent>
  </Section>
)

const HeroColorsExample: React.FC = () => (
  <Section>
    <Title>Colors</Title>
    <HeroComponent variant="primary">
      <HeroBody>
        <Container>
          <Title>Primary title</Title>
          <SubTitle>Primary subtitle</SubTitle>
        </Container>
      </HeroBody>
    </HeroComponent>
    <HeroComponent variant="info">
      <HeroBody>
        <Container>
          <Title>Info title</Title>
          <SubTitle>Info subtitle</SubTitle>
        </Container>
      </HeroBody>
    </HeroComponent>
    <HeroComponent variant="success">
      <HeroBody>
        <Container>
          <Title>Success title</Title>
          <SubTitle>Success subtitle</SubTitle>
        </Container>
      </HeroBody>
    </HeroComponent>
    <HeroComponent variant="warning">
      <HeroBody>
        <Container>
          <Title>Warning title</Title>
          <SubTitle>Warning subtitle</SubTitle>
        </Container>
      </HeroBody>
    </HeroComponent>
    <HeroComponent variant="danger">
      <HeroBody>
        <Container>
          <Title>Danger title</Title>
          <SubTitle>Danger subtitle</SubTitle>
        </Container>
      </HeroBody>
    </HeroComponent>
    <HeroComponent variant="light">
      <HeroBody>
        <Container>
          <Title>Light title</Title>
          <SubTitle>Light subtitle</SubTitle>
        </Container>
      </HeroBody>
    </HeroComponent>
    <HeroComponent variant="dark">
      <HeroBody>
        <Container>
          <Title>Dark title</Title>
          <SubTitle>Dark subtitle</SubTitle>
        </Container>
      </HeroBody>
    </HeroComponent>
  </Section>
)

const HeroGradientsExample: React.FC = () => (
  <Section>
    <Title>Gradients</Title>
    <HeroComponent variant="primary" bold>
      <HeroBody>
        <Container>
          <Title>Primary bold title</Title>
          <SubTitle>Primary bold subtitle</SubTitle>
        </Container>
      </HeroBody>
    </HeroComponent>
    <HeroComponent variant="info" bold>
      <HeroBody>
        <Container>
          <Title>Info bold title</Title>
          <SubTitle>Info bold subtitle</SubTitle>
        </Container>
      </HeroBody>
    </HeroComponent>
    <HeroComponent variant="success" bold>
      <HeroBody>
        <Container>
          <Title>Success bold title</Title>
          <SubTitle>Success bold subtitle</SubTitle>
        </Container>
      </HeroBody>
    </HeroComponent>
    <HeroComponent variant="warning" bold>
      <HeroBody>
        <Container>
          <Title>Warning title</Title>
          <SubTitle>Warning subtitle</SubTitle>
        </Container>
      </HeroBody>
    </HeroComponent>
    <HeroComponent variant="danger" bold>
      <HeroBody>
        <Container>
          <Title>Danger bold title</Title>
          <SubTitle>Danger bold subtitle</SubTitle>
        </Container>
      </HeroBody>
    </HeroComponent>
    <HeroComponent variant="light" bold>
      <HeroBody>
        <Container>
          <Title>Light bold title</Title>
          <SubTitle>Light bold subtitle</SubTitle>
        </Container>
      </HeroBody>
    </HeroComponent>
    <HeroComponent variant="dark" bold>
      <HeroBody>
        <Container>
          <Title>Dark bold title</Title>
          <SubTitle>Dark bold subtitle</SubTitle>
        </Container>
      </HeroBody>
    </HeroComponent>
  </Section>
)

const HeroSizesExample: React.FC = () => (
  <Section>
    <Title>Sizes</Title>
    <HeroComponent variant="primary" size="medium">
      <HeroBody>
        <Container>
          <Title>Medium title</Title>
          <SubTitle>Medium subtitle</SubTitle>
        </Container>
      </HeroBody>
    </HeroComponent>
    <HeroComponent variant="info" size="large">
      <HeroBody>
        <Container>
          <Title>Large title</Title>
          <SubTitle>Large subtitle</SubTitle>
        </Container>
      </HeroBody>
    </HeroComponent>
    <HeroComponent variant="success" size="fullheight">
      <HeroBody>
        <Container>
          <Title>FullHeight title</Title>
          <SubTitle>FullHeight subtitle</SubTitle>
        </Container>
      </HeroBody>
    </HeroComponent>
    <HeroComponent variant="link" size="fullheight-with-navbar">
      <HeroBody>
        <Container>
          <Title>FullHeight hero with navbar</Title>
        </Container>
      </HeroBody>
    </HeroComponent>
  </Section>
)

const MediumHeroExample: React.FC = () => (
  <Section>
    <Title>Medium Hero</Title>
    <HeroComponent variant="primary" size="medium">
      <HeroHead>
        <Navbar>
          <Container>
            <NavbarBrand>
              <NavbarItem>
                {/* @TODO: change this to Image */}
                <img
                  src="https://bulma.io/images/bulma-type-white.png"
                  alt="bulma logo"
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
        <Container textAlignment="centered">
          <Title>Title</Title>
          <SubTitle>Subtitle</SubTitle>
        </Container>
      </HeroBody>
      <HeroFoot>
        <Container>
          <Tabs>
            <TabsItem value="overview">Overview</TabsItem>
            <TabsItem value="modifiers">Modifiers</TabsItem>
            <TabsItem value="grid">Grid</TabsItem>
            <TabsItem value="elements">Elements</TabsItem>
            <TabsItem value="components">Components</TabsItem>
            <TabsItem value="layout">Layout</TabsItem>
          </Tabs>
        </Container>
      </HeroFoot>
    </HeroComponent>
  </Section>
)

const LargeHeroExample: React.FC = () => (
  <Section>
    <Title>Large Hero</Title>
    <HeroComponent variant="info" size="large">
      <HeroHead>
        <Navbar>
          <Container>
            <NavbarBrand>
              <NavbarItem>
                {/* @TODO: change this to Image */}
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
        <Container textAlignment="centered">
          <Title>Title</Title>
          <SubTitle>Subtitle</SubTitle>
        </Container>
      </HeroBody>
      <HeroFoot>
        <Container>
          <Tabs value="layout">
            <TabsItem value="overview">Overview</TabsItem>
            <TabsItem value="modifiers">Modifiers</TabsItem>
            <TabsItem value="grid">Grid</TabsItem>
            <TabsItem value="elements">Elements</TabsItem>
            <TabsItem value="components">Components</TabsItem>
            <TabsItem value="layout">Layout</TabsItem>
          </Tabs>
        </Container>
      </HeroFoot>
    </HeroComponent>
  </Section>
)

const FullHeightHeroExample: React.FC = () => (
  <Section>
    <Title>FullHeight Hero</Title>
    <HeroComponent variant="success" size="fullheight">
      <HeroHead>
        <Navbar>
          <Container>
            <Tabs value="overview" readOnly>
              <TabsItem value="overview">Overview</TabsItem>
              <TabsItem value="modifiers">Modifiers</TabsItem>
              <TabsItem value="grid">Grid</TabsItem>
              <TabsItem value="elements">Elements</TabsItem>
              <TabsItem value="components">Components</TabsItem>
              <TabsItem value="layout">Layout</TabsItem>
            </Tabs>
          </Container>
        </Navbar>
      </HeroHead>
      <HeroBody>
        <Container textAlignment="centered">
          <Title>Title</Title>
          <SubTitle>Subtitle</SubTitle>
        </Container>
      </HeroBody>
      <HeroFoot>
        <Container>
          <Tabs value="grid">
            <TabsItem value="overview">Overview</TabsItem>
            <TabsItem value="modifiers">Modifiers</TabsItem>
            <TabsItem value="grid">Grid</TabsItem>
            <TabsItem value="elements">Elements</TabsItem>
            <TabsItem value="components">Components</TabsItem>
            <TabsItem value="layout">Layout</TabsItem>
          </Tabs>
        </Container>
      </HeroFoot>
    </HeroComponent>
  </Section>
)

const ComplexHeroExample: React.FC = () => (
  <Section>
    <Title>FullHeight hero in 3 parts</Title>
    <MediumHeroExample />
    <LargeHeroExample />
    <FullHeightHeroExample />
  </Section>
)

export const Hero: React.FC = () => (
  <>
    <SimpleHeroExample />
    <HeroColorsExample />
    <HeroGradientsExample />
    <HeroSizesExample />
    <ComplexHeroExample />
  </>
)
