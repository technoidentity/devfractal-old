import {
  faFacebook,
  faGooglePlus,
  faLinkedin,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import {
  faArrowRight,
  faCircle,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import { Route } from 'devfractal-router'
import { DynamicBreadcrumb } from 'devfractal-ui'
import {
  Button,
  ButtonsGroup,
  Column,
  Columns,
  Container,
  Content,
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
} from 'devfractal-ui-core'
import React from 'react'
import { Link } from 'react-router-dom'
import { default as developer } from '../src/images/asset/developer.png'
import logo from '../src/images/asset/logo.png'
import { default as contentLoader } from '../src/images/contentLoader.png'
import logoOld from '../src/images/logoOld.png'
import uiComponent from '../src/images/uiComponent.png'
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
  <Section modifier="medium" textAlignment="centered" style={{background:`url(${contentLoader})`}}>
  <Title
      textColor="white"
      textWeight="light"
      className=" is-family-sans-serif is-size-1-desktop is-size-3-tablet is-size-4-mobile"
    >
      React, Simplified!
    </Title>
    <SubTitle
      textColor="white"
      textWeight="semiBold"
      className="is-size-5-desktop is-size-4-tablet is-size-5-mobile"
    >
      Complete React UI components Library
    </SubTitle>
    <ButtonsGroup alignment="centered">
      <Button
        rounded
        style={{ backgroundColor: '#EB132D', border: 'none' }}
        textColor="white"
        size="normal"
      >
        <Icon icon={faArrowRight} /> <div />
        Get Started
      </Button>
    </ButtonsGroup>
    {/* <img
      src={contentLoader}
      alt="contentLoader"
      style={{
        // display: 'block',
        // marginLeft: 'auto',
        // marginRight: 'auto',
        // width: '50%',
        background:`url(${contentLoader})`
      }}
    /> */}
  </Section>
)

export const IndexPageHeader: React.FC = () => (
  <>
    <Hero style={{ backgroundColor: '#5A77D6' }}>
      <HeroHead>
        <Navbar>
          <NavbarBrand>
            <NavbarItem style={{ paddingLeft: '7rem' }}>
              <img src={logo} alt="devfractal icon" />
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
          <NavbarMenu style={{ backgroundColor: '#5A77D6' }}>
            <NavbarEnd
              style={{
                paddingRight: '6rem',
              }}
            >
              <NavbarItem
                textColor="white"
                textSize="7"
                textWeight="bold"
                active
              >
                <Link to="/" style={{ color: 'white' }}>
                  HOME
                </Link>
              </NavbarItem>
              <NavbarItem textColor="white" textSize="7" textWeight="bold">
                OVERVIEW
              </NavbarItem>
              <NavbarItem textColor="white" textSize="7" textWeight="bold">
                <a
                  href="https://devfractal-styleguide.netlify.com/"
                  style={{ color: 'white' }}
                >
                  COMPONENTS LIST
                </a>
              </NavbarItem>
              <NavbarItem textColor="white" textSize="7" textWeight="bold">
                RESOURCES
              </NavbarItem>
              <NavbarItem textColor="white" textSize="7" textWeight="bold">
                DOWNLOAD
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </HeroHead>
      <Route exact path="/" component={HeroBodySection} />
    </Hero>
    <Section>
      <DynamicBreadcrumb />
    </Section>
  </>
)

export const UIComponentsOverview: React.FC = () => (
  <>
    <Section>
      <Text
        style={{
          color: '#DD051B',
          fontFamily: 'Poppins',
          fontWeight: 'bold',
          fontSize: '20px',
        }}
        textAlignment="centered"
        className="is-size-4-desktop is-size-4-desktop is-size-5-mobile"
      >
        Easy things should be easy & hard things should be possible
      </Text>
    </Section>
    <Section>
      <Columns>
        <Column>
          <Notification variant="white">
            <Text
              textWeight="bold"
              style={{ color: '#5A77D6' }}
              className="is-size-5-desktop is-size-5-tablet is-size-6-mobile"
            >
              Lightweight and user friendly
            </Text>
            <Text textSize="6" textColor="grey-dark">
              This library is built from scratch to be lightweight,include only
              specific components that the user requires
            </Text>
          </Notification>
          <Notification variant="white">
            <Text
              textWeight="bold"
              style={{ color: '#5A77D6' }}
              className="is-size-5-desktop is-size-5-tablet is-size-6-mobile"
            >
              Built for performance
            </Text>
            <Text textSize="6" textColor="grey-dark">
              We ensure that all our components are designed and built to
              achieve the best performance as user requires in application
            </Text>
          </Notification>

          <Notification variant="white">
            <Text
              textWeight="bold"
              style={{ color: '#5A77D6' }}
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
          <img
            src={uiComponent}
            alt="uiComopnent"
            style={{ objectFit: 'cover', width: '400px' }}
          />
        </Column>
        <Column>
          <Notification variant="white">
            <Text
              textWeight="bold"
              style={{ color: '#5A77D6' }}
              className="is-size-5-desktop is-size-5-tablet is-size-6-mobile"
            >
              Modular architecture
            </Text>
            <Text textSize="6" textColor="grey-dark">
              Built as modules to enable selective referencing,include the
              components and features that you user requires in application
            </Text>
          </Notification>

          <Notification variant="white">
            <Text
              textSize="5"
              textWeight="bold"
              style={{ color: '#5A77D6' }}
              className="is-size-5-desktop is-size-5-tablet is-size-6-mobile"
            >
              Globalization simplified
            </Text>
            <Text textSize="6" textColor="grey-dark">
              Easily build applications to use by audience in various languages
            </Text>
          </Notification>

          <Notification variant="white">
            {' '}
            <Text
              textWeight="bold"
              style={{ color: '#5A77D6' }}
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
      </Columns>
    </Section>
  </>
)

export const ExploreUIComponents: React.FC = () => (
  <>
    <Section style={{ backgroundColor: '#5A77D6', paddingBottom: '0px' }}>
      <Title
        textAlignment="centered"
        textColor="white"
        className="is-size-3-desktop is-size-3-tablet is-size-4-mobile"
      >
        Explore Devfractal UI Components
      </Title>
      <Section>
        <Columns>
          <Column style={{ margin: '30px' }}>
            <Title
              className="is-hidden-touch"
              textColor="white-ter"
              style={{
                fontFamily: 'Poppins',
                fontWeight: 'lighter',
              }}
            >
              Why Devfractal Components
            </Title>
            <SubTitle
              className="is-hidden-touch"
              textColor="white-ter"
              style={{ paddingTop: '20px' }}
            >
              Devfractal helps create beautiful, responsive layouts using
              human-friendly HTML
            </SubTitle>
          </Column>
          <Column>
            <Link to="/form">
              <FormMedia />
            </Link>
            <Link to="/composites">
              <CompositesMedia />
            </Link>
            <Link to="/components">
              <ComponentsMedia />
            </Link>
            <Link to="/modifiers">
              <ModifiersMedia />
            </Link>
          </Column>
          <Column>
            <Link to="/crud">
              <CrudMedia />
            </Link>
            <Link to="/columns">
              <ColumnsMedia />
            </Link>
            <Link to="/layout">
              <LayoutMedia />
            </Link>
            <Link to="/elements">
              <ElementsMedia />
            </Link>
          </Column>
        </Columns>
      </Section>
    </Section>
  </>
)

export const BottomSection: React.FC = () => (
  <Columns>
    <Column>
      <Section>
        <Title
          style={{
            paddingLeft: '25px',
            paddingBottom: '15px',
            marginTop: '40px',
            color: '#DD051B',
            fontFamily: 'Poppins',
            fontWeight: 'lighter',
          }}
        >
          Happy Developers
        </Title>

        <SubTitle style={{ paddingLeft: '25px' }}>
          DevFractal has all of the required controls, reporting and
          dashboarding tools across multiple platforms that allow us to levarage
          our existing skills.
        </SubTitle>

        <div style={{ paddingLeft: '25px' }}>
          <Icon icon={faStar} color="#DD051B" />
          <Icon icon={faStar} color="#DD051B" />
          <Icon icon={faStar} color="#DD051B" />
          <Icon icon={faStar} color="#DD051B" />
          <Icon icon={faStar} color="#DD051B" />
        </div>
        <Section style={{ paddingLeft: '25px' }}>
          <Icon icon={faCircle} color="#C4C4C4" />
          <Icon icon={faCircle} color="#5A77D6" />
          <Icon icon={faCircle} color="#C4C4C4" />
          <Icon icon={faCircle} color="#C4C4C4" />
          <Icon icon={faCircle} color="#C4C4C4" />
        </Section>
      </Section>
    </Column>
    <Column>
      <img
        src={developer}
        alt="developer"
        style={{ objectFit: 'scale-down' }}
      />
    </Column>
  </Columns>
)

export const ResourceSection: React.FC = () => (
  <Section style={{ backgroundColor: '#F5F5F5' }}>
    <Columns>
      <Column size="one-third">
        <Title>
          <img
            src={logoOld}
            alt="logo not found"
            style={{ height: '28px', width: '112px' }}
          />
        </Title>
        <SubTitle size="6">
          Devfractal is an open source project developed at Technoidentity
        </SubTitle>
      </Column>

      <Column>
        <Text
          textWeight="bold"
          style={{ color: '#595959' }}
          className="is-size-5-desktop is-size-5-tablet is-size-6-mobile"
        >
          Company
        </Text>
        <Ol textSize="6">
          <li style={{ listStyle: 'none' }}>About us</li>
        </Ol>
        <Ol textSize="6">
          <li style={{ listStyle: 'none' }}>Careers</li>
        </Ol>
        <Ol textSize="6">
          <li style={{ listStyle: 'none' }}>Contact us</li>
        </Ol>
      </Column>
      <Column>
        <Text
          textWeight="bold"
          style={{ color: '#595959' }}
          className="is-size-5-desktop is-size-5-tablet  is-size-6-mobile"
        >
          Learning & Support
        </Text>
        <Ol textSize="6">
          <li style={{ listStyle: 'none' }}>Demos</li>
        </Ol>
        <Ol textSize="6">
          <li style={{ listStyle: 'none' }}>Documentation</li>
        </Ol>
        <Ol textSize="6">
          <li style={{ listStyle: 'none' }}>Contact support</li>
        </Ol>
      </Column>
      <Column>
        <Text
          textWeight="bold"
          style={{ color: '#595959' }}
          className="is-size-5-desktop is-size-5-tablet  is-size-6-mobile"
        >
          Resources
        </Text>
        <Ol textSize="6">
          <li style={{ listStyle: 'none' }}>Knowledge Base</li>
        </Ol>
        <Ol textSize="6">
          <li style={{ listStyle: 'none' }}>Case Studies</li>
        </Ol>
        <Ol textSize="6">
          <li style={{ listStyle: 'none' }}>FAQ</li>
        </Ol>
      </Column>
      <Column>
        <Text
          textWeight="bold"
          style={{ color: '#595959' }}
          className="is-size-5-desktop  is-size-5-tablet  is-size-6-mobile"
        >
          Support
        </Text>
        <Ol textSize="6">
          <li style={{ listStyle: 'none' }}>support@technoidentity.com</li>
        </Ol>
        <Ol textSize="6">
          <li style={{ listStyle: 'none' }}>Privacy Policy</li>
        </Ol>
        <Ol textSize="6">
          <li style={{ listStyle: 'none' }}>Terms of Use</li>
        </Ol>
      </Column>
    </Columns>
    <hr />
  </Section>
)

export const FooterSection: React.FC = () => (
  <Section
    style={{
      backgroundColor: '#F5F5F5',
      borderTop: '1px solid',
      borderTopColor: 'white',
    }}
  >
    Copyright © 2019 TechnoIdentity Solutions.All rights reserved.
    <Content style={{ float: 'right' }}>
      <Icon icon={faFacebook} color="#004267" />
      <Icon icon={faTwitter} color="#004267" />
      <Icon icon={faLinkedin} color="#004267" />
      <Icon icon={faGooglePlus} color="#004267" />
      <Icon icon={faYoutube} color="#004267" />
    </Content>
  </Section>
)

export const IndexPage: React.FC = () => (
  <Container>
    <IndexPageHeader />
    <UIComponentsOverview />
    <ExploreUIComponents />
    <BottomSection />
    <ResourceSection />
    <FooterSection />
  </Container>
)
