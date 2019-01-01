import React from 'react'
import { Column, Columns } from '../../../devfractal/columns'
import { Notification, Title } from '../../../devfractal/elements'
import { Container, Section } from '../../../devfractal/layout'

export const BasicColumnExample: React.SFC = () => (
  <Section>
    <Container>
      <Title size="4">Basic columns</Title>
      <Columns>
        <Column>
          <Notification variant="primary">First column</Notification>
        </Column>
        <Column>
          <Notification variant="primary">Second column</Notification>
        </Column>
        <Column>
          <Notification variant="primary">Third column</Notification>
        </Column>
        <Column>
          <Notification variant="primary">Fourth column</Notification>
        </Column>
      </Columns>
    </Container>
  </Section>
)
