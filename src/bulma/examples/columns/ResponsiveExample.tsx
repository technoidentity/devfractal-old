import React from 'react'
import { Column, Columns } from '../../columns'
import { Notification, Title } from '../../elements'
import { Container, Section } from '../../layout'

export const ResponsiveColumnExample: React.SFC = () => (
  <div>
    <Section>
      <Container>
        <Title size="4">Mobile columns</Title>
        <Columns className="is-mobile-only">
          <Column>
            <Notification variant="primary">1</Notification>
          </Column>
          <Column>
            <Notification variant="primary">2</Notification>
          </Column>
          <Column>
            <Notification variant="primary">3</Notification>
          </Column>
          <Column>
            <Notification variant="primary">4</Notification>
          </Column>
        </Columns>
      </Container>
    </Section>

    <Section>
      <Container>
        <Title size="4">Desktop columns</Title>
        <Columns className="is-desktop-only">
          <Column>
            <Notification variant="primary">1</Notification>
          </Column>
          <Column>
            <Notification variant="primary">2</Notification>
          </Column>
          <Column>
            <Notification variant="primary">3</Notification>
          </Column>
          <Column>
            <Notification variant="primary">4</Notification>
          </Column>
        </Columns>
      </Container>
    </Section>
  </div>
)
