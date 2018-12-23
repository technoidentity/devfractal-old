import * as React from 'react'
import { Section, Container, Media } from '../layout'
import { Columns, Column } from '../columns'
import { MediaLeft, MediaContent } from '../layout/Media'
import { Title } from '../elements'
import { SubTitle } from '../elements/Title'
import { Icon } from '../form/Icon'
import { faWpforms } from '@fortawesome/free-brands-svg-icons'
import {
  faColumns,
  faCube,
  faWarehouse,
  faCubes,
  faCogs,
} from '@fortawesome/free-solid-svg-icons'
export const MainPage: React.SFC = () => (
  <>
    <Section>
      <Container>
        <Columns multiline>
          <Column>
            <Media className="notification is-grey">
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
          </Column>
          <Column>
            <Media className="notification is-grey">
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
          </Column>
          <Column>
            <Media className="notification is-grey">
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
          </Column>
        </Columns>
      </Container>
    </Section>
    <Section>
      <Container>
        <Columns multiline>
          <Column>
            <Media className="notification is-grey">
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
          </Column>
          <Column>
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
          </Column>
          <Column>
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
          </Column>
        </Columns>
      </Container>
    </Section>
  </>
)
