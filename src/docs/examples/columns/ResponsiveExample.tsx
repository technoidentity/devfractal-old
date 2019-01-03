import React from 'react'
import {
  Column,
  Columns,
  Container,
  Notification,
  Section,
  Title,
} from '../devfractal'

export const ResponsiveColumnExample: React.SFC = () => (
  <div>
    <Section>
      <Container>
        <Title size="4">Mobile columns</Title>
        <Columns className="is-mobile-only">
          <Column>
            <Notification variant="primary" textAlignment="centered">
              1
            </Notification>
          </Column>
          <Column>
            <Notification variant="primary" textAlignment="centered">
              2
            </Notification>
          </Column>
          <Column>
            <Notification variant="primary" textAlignment="centered">
              3
            </Notification>
          </Column>
          <Column>
            <Notification variant="primary" textAlignment="centered">
              4
            </Notification>
          </Column>
        </Columns>
      </Container>
    </Section>

    <Section>
      <Container>
        <Title size="4">Desktop columns</Title>
        <Columns className="is-desktop-only">
          <Column>
            <Notification variant="primary" textAlignment="centered">
              1
            </Notification>
          </Column>
          <Column>
            <Notification variant="primary" textAlignment="centered">
              2
            </Notification>
          </Column>
          <Column>
            <Notification variant="primary" textAlignment="centered">
              3
            </Notification>
          </Column>
          <Column>
            <Notification variant="primary" textAlignment="centered">
              4
            </Notification>
          </Column>
        </Columns>
      </Container>
    </Section>
  </div>
)
