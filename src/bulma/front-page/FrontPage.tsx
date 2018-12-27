import { faWpforms } from '@fortawesome/free-brands-svg-icons'
import {
  faCogs,
  faColumns,
  faCube,
  faCubes,
  faWarehouse,
} from '@fortawesome/free-solid-svg-icons'
import * as React from 'react'
import { Link, Route } from 'react-router-dom'
import { Column, Columns } from '../columns'
import { Title } from '../elements'
import { Icon } from '../elements/Icon'
import { SubTitle } from '../elements/Title'
import { Container, Hero, Media, Section } from '../layout'
import { HeroBody } from '../layout/Hero'
import { MediaContent, MediaLeft } from '../layout/Media'

export const MainPageBody: React.SFC = () => (
  <Section>
    <Container>
      <Columns multiline>
        <Column>
          <Link to="/form">
            <Media className="notification is-light">
              <MediaLeft>
                <Icon icon={faWpforms} size="2x" textColor="link" />
              </MediaLeft>
              <MediaContent>
                <Title>Form</Title>
                <SubTitle size="6">
                  The indispensable form controls designed for maximum clarity
                </SubTitle>
              </MediaContent>
            </Media>
          </Link>
        </Column>
        <Column size="one-third">
          <Link to="/columns">
            <Media className="notification is-light">
              <MediaLeft>
                <Icon icon={faColumns} size="2x" textColor="warning" />
              </MediaLeft>
              <MediaContent>
                <Title>Columns</Title>
                <SubTitle size="6">
                  The power of Flexbox in a simple interface
                </SubTitle>
              </MediaContent>
            </Media>
          </Link>
        </Column>
        <Column>
          <Link to="/layout">
            <Media className="notification is-light">
              <MediaLeft>
                <Icon icon={faWarehouse} size="2x" textColor="success" />
              </MediaLeft>
              <MediaContent>
                <Title>Layout</Title>
                <SubTitle size="6">
                  Design the structure of your webpage with these css classes
                </SubTitle>
              </MediaContent>
            </Media>
          </Link>
        </Column>
      </Columns>
      <Columns multiline>
        <Column>
          <Link to="/elements">
            <Media className="notification is-light">
              <MediaLeft>
                <Icon icon={faCube} size="2x" textColor="danger" />
              </MediaLeft>
              <MediaContent>
                <Title>Elements</Title>
                <SubTitle size="6">
                  Essential interface elements that only require a single css
                  class
                </SubTitle>
              </MediaContent>
            </Media>
          </Link>
        </Column>
        <Column>
          <Link to="/components">
            <Media className="notification is-light">
              <MediaLeft>
                <Icon icon={faCubes} size="2x" textColor="danger" />
              </MediaLeft>
              <MediaContent>
                <Title>Components</Title>
                <SubTitle size="6">
                  Advanced multi-part components with lots of responsibilities
                </SubTitle>
              </MediaContent>
            </Media>
          </Link>
        </Column>
        <Column>
          <Link to="/modifiers">
            <Media className="notification is-light">
              <MediaLeft>
                <Icon icon={faCogs} size="2x" textColor="grey" />
              </MediaLeft>
              <MediaContent>
                <Title>Modifiers</Title>
                <SubTitle size="6">
                  An easy-to-read naming system designed for humans
                </SubTitle>
              </MediaContent>
            </Media>
          </Link>
        </Column>
      </Columns>
    </Container>
  </Section>
)

export const MainPageHeader: React.SFC = () => (
  <Hero variant="dark">
    <HeroBody>
      <Container className="has-text-centered">
        <Title>
          <Link to="/">Devfractal</Link>
        </Title>
        <SubTitle>React, as simple as Angular!</SubTitle>
      </Container>
    </HeroBody>
  </Hero>
)

export const MainPageRoutes: React.SFC = () => (
  <>
    <Route path="/" component={MainPageHeader} />
    <Route exact path="/" component={MainPageBody} />
  </>
)
