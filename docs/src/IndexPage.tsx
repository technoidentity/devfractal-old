import {
  faFacebook,
  faGooglePlus,
  faLinkedin,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link, Route } from 'react-router-dom'
import {
  Button,
  ButtonsGroup,
  Column,
  Columns,
  Container,
  DynamicBreadcrumb,
  Hero,
  HeroHead,
  Icon,
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarEnd,
  NavbarItem,
  NavbarMenu,
  Notification,
  Ol,
  Section,
  SubTitle,
  Text,
  Title,
} from 'technoidentity-devfractal'
import contentLoader from './images/contentLoader.png'
import devfractalIcon from './images/devfractalIcon.png'
import logo from './images/logo.png'
import {
  ColumnsMedia,
  ComponentsMedia,
  CompositesMedia,
  CrudMedia,
  ElementsMedia,
  FormMedia,
  LayoutMedia,
  ModifiersMedia,
} from './Medias'

export const HeroBodySection: React.FC = () => (
  <>
    <Section textAlignment="centered">
      <Title
        textColor="white"
        textWeight="bold"
        className="is-size-2-desktop is-size-3-tablet is-size-4-mobile"
      >
        React, Simplified!
      </Title>
      <SubTitle
        textColor="white"
        textWeight="bold"
        className="is-size-3-desktop is-size-4-tablet is-size-5-mobile"
      >
        Complete React UI Components Library
      </SubTitle>
      <ButtonsGroup alignment="centered">
        <Button
          rounded
          style={{ backgroundColor: '#EB132D', border: 'none' }}
          textColor="white"
          size="medium"
        >
          Get started
        </Button>
      </ButtonsGroup>
    </Section>
    <img
      src={contentLoader}
      style={{
        backgroundColor: '#004365',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '50%',
      }}
    />
  </>
)

export const IndexPageHeader: React.FC = () => (
  <>
    <Hero style={{ backgroundColor: '#004267' }}>
      <HeroHead>
        <Navbar>
          <NavbarBrand>
            <NavbarItem style={{ paddingLeft: '7rem' }}>
              <img src={devfractalIcon} />
              <Link to="/">
                <Text textColor="white" textWeight="bold" textSize="5">
                  DEVFRACTAL
                </Text>
              </Link>
            </NavbarItem>
            <NavbarBurger
              style={{
                color: 'white',
              }}
            >
              <span />
              <span />
              <span />
            </NavbarBurger>
          </NavbarBrand>
          <NavbarMenu style={{ backgroundColor: '#004267' }}>
            <NavbarEnd
              style={{
                paddingRight: '6rem',
              }}
            >
              <NavbarItem textColor="white" textSize="6" textWeight="bold">
                OVERVIEW
              </NavbarItem>
              <NavbarItem textColor="white" textSize="6" textWeight="bold">
                COMPONENTS LIST
              </NavbarItem>
              <NavbarItem textColor="white" textSize="6" textWeight="bold">
                RESOURCES
              </NavbarItem>
              <NavbarItem textColor="white" textSize="6" textWeight="bold">
                DOWNLOAD
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </HeroHead>
      <Route exact path="/" component={HeroBodySection} />
    </Hero>
    <DynamicBreadcrumb />
  </>
)

export const UIComponentsOverview: React.FC = () => (
  <>
    <Section style={{ backgroundColor: '#F5F5F5' }}>
      <Text
        textAlignment="centered"
        textWeight="bold"
        style={{ color: '#004267' }}
        className="is-size-4-desktop is-size-4-tablet is-size-5-mobile"
      >
        Easy things should be easy and
        <Text
          textAlignment="centered"
          textWeight="bold"
          style={{ color: '#004267' }}
          className="is-size-4-desktop is-size-4-desktop is-size-5-mobile"
        >
          hard thing should be possible
        </Text>
      </Text>
      <Text
        textAlignment="centered"
        textWeight="bold"
        style={{ color: '#EB132D', marginTop: '3rem' }}
        className="is-size-4-desktop is-size-4-tablet is-size-5-mobile"
      >
        UI components overview
      </Text>
      <Section>
        <Columns multiline>
          <Column>
            <Notification style={{ color: '#c3c3c3' }}>
              <Text
                textWeight="bold"
                style={{ color: '#595959' }}
                className="is-size-5-desktop is-size-5-tablet is-size-6-mobile"
              >
                Lightweight and user friendly
              </Text>
              <Text textSize="6" textColor="grey-dark">
                This library is built from scratch to be lightweight,include
                only specific components that the user requires
              </Text>
            </Notification>
          </Column>
          <Column>
            <Notification style={{ color: '#c3c3c3' }}>
              <Text
                textWeight="bold"
                style={{ color: '#595959' }}
                className="is-size-5-desktop is-size-5-tablet is-size-6-mobile"
              >
                Modular architecture
              </Text>
              <Text textSize="6" textColor="grey-dark">
                Built as modules to enable selective referencing,include the
                components and features that you user requires in application
              </Text>
            </Notification>
          </Column>
          <Column>
            <Notification style={{ color: '#c3c3c3' }}>
              <Text
                textWeight="bold"
                style={{ color: '#595959' }}
                className="is-size-5-desktop is-size-5-tablet is-size-6-mobile"
              >
                Built for performance
              </Text>
              <Text textSize="6" textColor="grey-dark">
                We ensure that all our components are designed and built to
                acheive the best performance as user requires in application
              </Text>
            </Notification>
          </Column>
        </Columns>
        <Columns multiline>
          <Column>
            <Notification style={{ color: '#c3c3c3' }}>
              <Text
                textWeight="bold"
                style={{ color: '#595959' }}
                className="is-size-5-desktop is-size-5-tablet is-size-6-mobile"
              >
                Responsive and touch friendly
              </Text>
              <Text textSize="6" textColor="grey-dark">
                All Components are touch friendly, render adaptively
              </Text>
            </Notification>
          </Column>
          <Column>
            <Notification style={{ color: '#c3c3c3' }}>
              <Text
                textWeight="bold"
                style={{ color: '#595959' }}
                className="is-size-5-desktop is-size-5-tablet is-size-6-mobile"
              >
                Code on GitHub
              </Text>
              <Text textSize="6" textColor="grey-dark">
                Complete source code,unit test files, and e2e test scripts are
                available on GitHub
              </Text>
            </Notification>
          </Column>
          <Column>
            <Notification style={{ color: '#c3c3c3' }}>
              <Text
                textSize="5"
                textWeight="bold"
                style={{ color: '#595959' }}
                className="is-size-5-desktop is-size-5-tablet is-size-6-mobile"
              >
                Globalization simplified
              </Text>
              <Text textSize="6" textColor="grey-dark">
                Easily build applications to use by audience in various
                languages
              </Text>
            </Notification>
          </Column>
        </Columns>
      </Section>
    </Section>
  </>
)

export const ExploreUIComponents: React.FC = () => (
  <>
    <Section style={{ backgroundColor: '#004267' }}>
      <Title
        textAlignment="centered"
        textColor="white"
        className="is-size-3-desktop is-size-3-tablet is-size-4-mobile"
      >
        Explore Devfractal UI Components
      </Title>
      <Section>
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
        <Columns multiline>
          <Column>
            <Link to="/composites">
              <CompositesMedia />
            </Link>
          </Column>
          <Column>
            <Link to="/crud">
              <CrudMedia />
            </Link>
          </Column>
          <Column />
        </Columns>
      </Section>
    </Section>
  </>
)

export const BottomSection: React.FC = () => (
  <>
    <Section textAlignment="centered" style={{ backgroundColor: '#F5F5F5' }}>
      <Text
        textWeight="semiBold"
        style={{ color: '#595959' }}
        className="is-size-4-desktop is-size-4-tablet is-size-5-mobile"
      >
        <Icon
          icon={faQuoteLeft}
          size="2x"
          style={{ color: '#c3c3c3', marginRight: '2rem' }}
        />
        DevFractal has all of the required controls, reporting and dashboarding
        tools
      </Text>
      <Text
        textWeight="semiBold"
        style={{ color: '#595959' }}
        className="is-size-4-desktop is-size-4-tablet is-size-5-mobile"
      >
        across multiple platforms that allow us to levarage our existing skills
      </Text>
    </Section>
    <Section>
      <Columns>
        <Column>
          <Text
            textWeight="bold"
            style={{ color: '#595959' }}
            className="is-size-5-desktop is-size-5-tablet is-size-6-mobile"
          >
            COMPANY
          </Text>
          <Ol textSize="6">About us</Ol>
          <Ol textSize="6">Careers</Ol>
          <Ol textSize="6">Contact us</Ol>
        </Column>
        <Column>
          <Text
            textWeight="bold"
            style={{ color: '#595959' }}
            className="is-size-5-desktop is-size-5-tablet  is-size-6-mobile"
          >
            LEARNING & SUPPORT
          </Text>
          <Ol textSize="6">Demos</Ol>
          <Ol textSize="6">Documentation</Ol>
          <Ol textSize="6">Contact support</Ol>
        </Column>
        <Column>
          <Text
            textWeight="bold"
            style={{ color: '#595959' }}
            className="is-size-5-desktop is-size-5-tablet  is-size-6-mobile"
          >
            RESOURCES
          </Text>
          <Ol textSize="6">Knowledge Base</Ol>
          <Ol textSize="6">Case Studies</Ol>
          <Ol textSize="6">FAQ</Ol>
        </Column>
        <Column>
          <Text
            textWeight="bold"
            style={{ color: '#595959' }}
            className="is-size-5-desktop  is-size-5-tablet  is-size-6-mobile"
          >
            SUPPORT
          </Text>
          <Ol textSize="6">support@technoidentity.com</Ol>
          <Ol textSize="6">Privacy Policy</Ol>
          <Ol textSize="6">Terms of Use</Ol>
        </Column>
        <Column>
          <Title>
            <img src={logo} style={{ height: '28px', width: '112px' }} />
          </Title>
          <SubTitle size="6">
            Devfractal is an open source project developed at Technoidentity
          </SubTitle>
        </Column>
      </Columns>
    </Section>
    <hr />
  </>
)

export const FooterSection: React.FC = () => (
  <>
    Copyright © 2019 TechnoIdentity Solutions.All rights reserved.
    <Ol style={{ float: 'right' }}>
      <Icon icon={faFacebook} color="#004267" />
      <Icon icon={faTwitter} color="#004267" />
      <Icon icon={faLinkedin} color="#004267" />
      <Icon icon={faGooglePlus} color="#004267" />
      <Icon icon={faYoutube} color="#004267" />
    </Ol>
  </>
)

export const IndexPage: React.FC = () => (
  <Container>
    <IndexPageHeader />
    <UIComponentsOverview />
    <ExploreUIComponents />
    <BottomSection />
    <FooterSection />
  </Container>
)
