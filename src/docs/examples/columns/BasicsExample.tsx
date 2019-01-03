import React from 'react'
import {
  Column,
  Columns,
  Container,
  Notification,
  Section,
  Title,
} from '../devfractal'

export const BasicColumnExample: React.SFC = () => (
  <Section>
    <Container>
      <Title size="4">Basic columns</Title>
      <Columns>
        <Column>
          <Notification variant="primary" textAlignment="centered">
            First column
          </Notification>
        </Column>
        <Column>
          <Notification variant="primary" textAlignment="centered">
            Second column
          </Notification>
        </Column>
        <Column>
          <Notification variant="primary" textAlignment="centered">
            Third column
          </Notification>
        </Column>
        <Column>
          <Notification variant="primary" textAlignment="centered">
            Fourth column
          </Notification>
        </Column>
      </Columns>
    </Container>
  </Section>
)
