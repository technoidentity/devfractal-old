import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
  Button,
  ButtonsGroup,
  Column,
  Columns,
  DynamicBreadcrumb,
  Hero,
  HeroHead,
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarEnd,
  NavbarItem,
  NavbarMenu,
  Notification,
  Section,
  SubTitle,
  Text,
  Title,
} from 'technoidentity-devfractal'
import {
  default as contentLoader,
  default as devfractal,
  default as uiComponent,
} from '../src/images/contentLoader.png'
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
  <Section textAlignment="centered">
    <Title
      textColor="white"
      textWeight="light"
      // style={{ fontFamily: 'Poppins sans-serief' }}
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
        Get started
      </Button>
    </ButtonsGroup>
    <img
      src={contentLoader}
      alt="contentLoader"
      style={{
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '50%',
      }}
    />
  </Section>
)

export const IndexPageHeader: React.FC = () => (
  <>
    <Hero style={{ backgroundColor: '#5A77D6' }}>
      <HeroHead>
        <Navbar>
          <NavbarBrand>
            <NavbarItem style={{ paddingLeft: '7rem' }}>
              <img src={devfractal} alt="devfractal icon" />
              {/* <Link to="/">
                <Text textColor="info" textWeight="bold" textSize="5">
                  DEVFRACTAL
                </Text>
              </Link> */}
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
              <NavbarItem textColor="white" textSize="7" textWeight="light">
                HOME
              </NavbarItem>
              <NavbarItem textColor="white" textSize="7" textWeight="light">
                OVERVIEW
              </NavbarItem>
              <NavbarItem textColor="white" textSize="7" textWeight="light">
                <a
                  href="https://devfractal-styleguide.netlify.com/"
                  style={{ color: 'white' }}
                >
                  COMPONENTS LIST
                </a>
              </NavbarItem>
              <NavbarItem textColor="white" textSize="7" textWeight="light">
                RESOURCES
              </NavbarItem>
              <NavbarItem textColor="white" textSize="7" textWeight="light">
                DOWNLOAD
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </HeroHead>
      <HeroBodySection />
    </Hero>
    <DynamicBreadcrumb />
  </>
)

export const UIComponentsOverView: React.FC = () => (
  <>
    <Section>
      <Text
        textColor="danger"
        textAlignment="centered"
        textWeight="light"
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
              acheive the best performance as user requires in application
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
    <Section style={{ backgroundColor: '#5A77D6' }}>
      <Title
        textAlignment="centered"
        textColor="white"
        className="is-size-3-desktop is-size-3-tablet is-size-4-mobile"
      >
        Explore Devfractal UI Components
      </Title>
      <Section>
        <Columns>
          <Column>
            <Title textColor="white-ter">Why Devfractal Components</Title>
            <SubTitle textColor="white-ter">
              Devfractal helps create beautiful, responsive layouts using
              human-friendly HTML
            </SubTitle>
          </Column>
          <Column>
            <FormMedia />

            <CompositesMedia />

            <ComponentsMedia />

            <ModifiersMedia />
          </Column>
          <Column>
            <CrudMedia />

            <ColumnsMedia />

            <LayoutMedia />

            <ElementsMedia />
          </Column>
        </Columns>
      </Section>

      {/* <Section>
        <Columns multiline>
          <Column>
            <Title>Why Devfrctal Components</Title>
            <SubTitle>
              Devfractal helps create beautiful, responsive layouts using
              human-friendly HTML
            </SubTitle>
          </Column>
          <Column>
            <FormMedia />
          </Column>
          <Column>
            <ColumnsMedia />
          </Column>

          <Column />
          <Column>
            <CompositesMedia />
          </Column>
          <Column>
            <ComponentsMedia />
          </Column>

          <Column />
          <Column>
            <ModifiersMedia />
          </Column>
          <Column>
            <CrudMedia />
          </Column>

          <Column />
          <Column>
            <LayoutMedia />
          </Column>
          <Column>
            <ElementsMedia />
          </Column>
        </Columns>
      </Section> */}
    </Section>
  </>
)

export const IndexPage: React.FC = () => (
  <Router>
    <Route exact path="/" component={IndexPageHeader} />
    {/* <Route exact path="/forms" component={FormEx} /> */}
    <UIComponentsOverView />
    <ExploreUIComponents />
  </Router>
)
