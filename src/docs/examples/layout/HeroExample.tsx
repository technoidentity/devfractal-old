import React from 'react'
import {
  Button,
  Container,
  Hero,
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
  Tabs,
  TabsItem,
  Title,
} from '../devfractal'

export const SimpleHeroExample: React.FC = () => (
  <Section>
    <Title>Simple Hero</Title>
    <Hero>
      <HeroBody>
        <Container>
          <Title>Hero title</Title>
          <SubTitle>Hero subtitle</SubTitle>
        </Container>
      </HeroBody>
    </Hero>
  </Section>
)

export const HeroColorsExample: React.FC = () => (
  <Section>
    <Title>Colors</Title>
    <Hero variant="primary">
      <HeroBody>
        <Container>
          <Title>Primary title</Title>
          <SubTitle>Primary subtitle</SubTitle>
        </Container>
      </HeroBody>
    </Hero>
    <Hero variant="info">
      <HeroBody>
        <Container>
          <Title>Info title</Title>
          <SubTitle>Info subtitle</SubTitle>
        </Container>
      </HeroBody>
    </Hero>
    <Hero variant="success">
      <HeroBody>
        <Container>
          <Title>Success title</Title>
          <SubTitle>Success subtitle</SubTitle>
        </Container>
      </HeroBody>
    </Hero>
    <Hero variant="warning">
      <HeroBody>
        <Container>
          <Title>Warning title</Title>
          <SubTitle>Warning subtitle</SubTitle>
        </Container>
      </HeroBody>
    </Hero>
    <Hero variant="danger">
      <HeroBody>
        <Container>
          <Title>Danger title</Title>
          <SubTitle>Danger subtitle</SubTitle>
        </Container>
      </HeroBody>
    </Hero>
    <Hero variant="light">
      <HeroBody>
        <Container>
          <Title>Light title</Title>
          <SubTitle>Light subtitle</SubTitle>
        </Container>
      </HeroBody>
    </Hero>
    <Hero variant="dark">
      <HeroBody>
        <Container>
          <Title>Dark title</Title>
          <SubTitle>Dark subtitle</SubTitle>
        </Container>
      </HeroBody>
    </Hero>
  </Section>
)

export const HeroGradientsExample: React.FC = () => (
  <Section>
    <Title>Gradients</Title>
    <Hero variant="primary" bold>
      <HeroBody>
        <Container>
          <Title>Primary bold title</Title>
          <SubTitle>Primary bold subtitle</SubTitle>
        </Container>
      </HeroBody>
    </Hero>
    <Hero variant="info" bold>
      <HeroBody>
        <Container>
          <Title>Info bold title</Title>
          <SubTitle>Info bold subtitle</SubTitle>
        </Container>
      </HeroBody>
    </Hero>
    <Hero variant="success" bold>
      <HeroBody>
        <Container>
          <Title>Success bold title</Title>
          <SubTitle>Success bold subtitle</SubTitle>
        </Container>
      </HeroBody>
    </Hero>
    <Hero variant="warning" bold>
      <HeroBody>
        <Container>
          <Title>Warning title</Title>
          <SubTitle>Warning subtitle</SubTitle>
        </Container>
      </HeroBody>
    </Hero>
    <Hero variant="danger" bold>
      <HeroBody>
        <Container>
          <Title>Danger bold title</Title>
          <SubTitle>Danger bold subtitle</SubTitle>
        </Container>
      </HeroBody>
    </Hero>
    <Hero variant="light" bold>
      <HeroBody>
        <Container>
          <Title>Light bold title</Title>
          <SubTitle>Light bold subtitle</SubTitle>
        </Container>
      </HeroBody>
    </Hero>
    <Hero variant="dark" bold>
      <HeroBody>
        <Container>
          <Title>Dark bold title</Title>
          <SubTitle>Dark bold subtitle</SubTitle>
        </Container>
      </HeroBody>
    </Hero>
  </Section>
)

export const HeroSizesExample: React.FC = () => (
  <Section>
    <Title>Sizes</Title>
    <Hero variant="primary" size="medium">
      <HeroBody>
        <Container>
          <Title>Medium title</Title>
          <SubTitle>Medium subtitle</SubTitle>
        </Container>
      </HeroBody>
    </Hero>
    <Hero variant="info" size="large">
      <HeroBody>
        <Container>
          <Title>Large title</Title>
          <SubTitle>Large subtitle</SubTitle>
        </Container>
      </HeroBody>
    </Hero>
    <Hero variant="success" size="fullheight">
      <HeroBody>
        <Container>
          <Title>FullHeight title</Title>
          <SubTitle>FullHeight subtitle</SubTitle>
        </Container>
      </HeroBody>
    </Hero>
    <Hero variant="link" size="fullheight-with-navbar">
      <HeroBody>
        <Container>
          <Title>FullHeight hero with navbar</Title>
        </Container>
      </HeroBody>
    </Hero>
  </Section>
)

export const MediumHeroExample: React.FC = () => (
  <Section>
    <Title>Medium Hero</Title>
    <Hero variant="primary" size="medium">
      <HeroHead>
        <Navbar>
          <Container>
            <NavbarBrand>
              <NavbarItem>
                {/* @TODO: change this to Image */}
                <img src="https://bulma.io/images/bulma-type-white.png" />
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
    </Hero>
  </Section>
)

export const LargeHeroExample: React.FC = () => (
  <Section>
    <Title>Large Hero</Title>
    <Hero variant="info" size="large">
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
          <Tabs selectedTab="layout">
            <TabsItem value="overview">Overview</TabsItem>
            <TabsItem value="modifiers">Modifiers</TabsItem>
            <TabsItem value="grid">Grid</TabsItem>
            <TabsItem value="elements">Elements</TabsItem>
            <TabsItem value="components">Components</TabsItem>
            <TabsItem value="layout">Layout</TabsItem>
          </Tabs>
        </Container>
      </HeroFoot>
    </Hero>
  </Section>
)

export const FullHeightHeroExample: React.FC = () => (
  <Section>
    <Title>FullHeight Hero</Title>
    <Hero variant="success" size="fullheight">
      <HeroHead>
        <Navbar>
          <Container>
            <Tabs selectedTab="overview" readOnly>
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
          <Tabs selectedTab="grid">
            <TabsItem value="overview">Overview</TabsItem>
            <TabsItem value="modifiers">Modifiers</TabsItem>
            <TabsItem value="grid">Grid</TabsItem>
            <TabsItem value="elements">Elements</TabsItem>
            <TabsItem value="components">Components</TabsItem>
            <TabsItem value="layout">Layout</TabsItem>
          </Tabs>
        </Container>
      </HeroFoot>
    </Hero>
  </Section>
)

export const ComplexHeroExample: React.FC = () => (
  <Section>
    <Title>FullHeight hero in 3 parts</Title>
    <MediumHeroExample />
    <LargeHeroExample />
    <FullHeightHeroExample />
  </Section>
)

export const HeroExample: React.FC = () => (
  <>
    <SimpleHeroExample />
    <HeroColorsExample />
    <HeroGradientsExample />
    <HeroSizesExample />
    <ComplexHeroExample />
  </>
)
