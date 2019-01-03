import React from 'react'
import {
  Column,
  Columns,
  Container,
  Notification,
  Section,
  Title,
} from '../devfractal'

export const OptionsColumnExample: React.SFC = () => (
  <div>
    <Section>
      <Container>
        <Title size="4">Vertical alignment</Title>
        <Columns verticallyCentered>
          <Column gridSize="8">
            <Notification className="has-text-centered" variant="primary">
              vertically centered
            </Notification>
          </Column>
          <Column>
            <Notification variant="primary">
              Second column with more content. This is so you can see the
              vertical alignment.
            </Notification>
          </Column>
        </Columns>
      </Container>
    </Section>

    <Section>
      <Container>
        <Title size="4">Multiline</Title>
        <Columns multiline responsiveness="mobile">
          <Column size="one-quarter">
            <Notification variant="primary" textAlignment="centered">
              is-one-quarter
            </Notification>
          </Column>
          <Column size="one-quarter">
            <Notification variant="primary" textAlignment="centered">
              is-one-quarter
            </Notification>
          </Column>
          <Column size="one-quarter">
            <Notification variant="primary" textAlignment="centered">
              is-one-quarter
            </Notification>
          </Column>
          <Column className="is-one-quarter">
            <Notification variant="primary" textAlignment="centered">
              is-one-quarter
            </Notification>
          </Column>
          <Column size="half">
            <Notification variant="primary" textAlignment="centered">
              is-half
            </Notification>
          </Column>
          <Column size="one-quarter">
            <Notification variant="primary" textAlignment="centered">
              is-one-quarter
            </Notification>
          </Column>
          <Column size="one-quarter">
            <Notification variant="primary" textAlignment="centered">
              is-one-quarter
            </Notification>
          </Column>
          <Column size="one-quarter">
            <Notification variant="primary" textAlignment="centered">
              is-one-quarter
            </Notification>
          </Column>
          <Column>
            <Notification variant="primary" textAlignment="centered">
              Auto
            </Notification>
          </Column>
        </Columns>
      </Container>
    </Section>

    <Section>
      <Container>
        <Title size="4">Centering columns</Title>
        <Columns responsiveness="mobile" columnCentered>
          <Column size="half">
            <Notification variant="primary" textAlignment="centered">
              <code className="html">is-half</code>
            </Notification>
          </Column>
        </Columns>

        <Columns multiline columnCentered responsiveness="mobile">
          <Column narrow>
            <Notification variant="primary" textAlignment="centered">
              <code className="html">is-narrow</code>
              <p>First Column</p>
            </Notification>
          </Column>
          <Column narrow>
            <Notification variant="primary" textAlignment="centered">
              <code className="html">is-narrow</code>
              <p>Our Second Column</p>
            </Notification>
          </Column>
          <Column narrow>
            <Notification variant="primary" textAlignment="centered">
              <code className="html">is-narrow</code>
              <p>Third Column</p>
            </Notification>
          </Column>
          <Column narrow>
            <Notification variant="primary" textAlignment="centered">
              <code className="html">is-narrow</code>
              <p>The Fourth Column</p>
            </Notification>
          </Column>
          <Column narrow>
            <Notification variant="primary" textAlignment="centered">
              <code className="html">is-narrow</code>
              <p>Fifth Column</p>
            </Notification>
          </Column>
        </Columns>
      </Container>
    </Section>
  </div>
)
