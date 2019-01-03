import React from 'react'
import {
  Column,
  Columns,
  Container,
  Notification,
  Section,
  Title,
} from '../devfractal'

export const GapColumnExample: React.SFC = () => (
  <div>
    <Section>
      <Container>
        <Title size="4">Default gap</Title>
        <Columns>
          <Column>
            <Notification variant="primary" textAlignment="centered">
              Default gap
            </Notification>
          </Column>
          <Column>
            <Notification variant="primary" textAlignment="centered">
              Default gap
            </Notification>
          </Column>
          <Column>
            <Notification variant="primary" textAlignment="centered">
              Default gap
            </Notification>
          </Column>
          <Column>
            <Notification variant="primary" textAlignment="centered">
              Default gap
            </Notification>
          </Column>
        </Columns>
      </Container>
    </Section>

    <Section>
      <Container>
        <Title size="4">Gapless</Title>
        <Columns gapless>
          <Column>
            <Notification variant="primary" textAlignment="centered">
              No Gap
            </Notification>
          </Column>
          <Column>
            <Notification variant="primary" textAlignment="centered">
              No Gap
            </Notification>
          </Column>
          <Column>
            <Notification variant="primary" textAlignment="centered">
              No Gap
            </Notification>
          </Column>
          <Column>
            <Notification variant="primary" textAlignment="centered">
              No Gap
            </Notification>
          </Column>
        </Columns>
      </Container>
    </Section>

    <Section>
      <Container>
        <Columns gapless multiline responsiveness="mobile">
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
  </div>
)
