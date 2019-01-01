import React from 'react'
import { Column, Columns } from '../../../devfractal/columns'
import { Notification, Title } from '../../../devfractal/elements'
import { Container, Section } from '../../../devfractal/layout'

export const GapColumnExample: React.SFC = () => (
  <div>
    <Section>
      <Container>
        <Title size="4">Default gap</Title>
        <Columns>
          <Column>
            <Notification variant="primary">Default gap</Notification>
          </Column>
          <Column>
            <Notification variant="primary">Default gap</Notification>
          </Column>
          <Column>
            <Notification variant="primary">Default gap</Notification>
          </Column>
          <Column>
            <Notification variant="primary">Default gap</Notification>
          </Column>
        </Columns>
      </Container>
    </Section>

    <Section>
      <Container>
        <Title size="4">Gapless</Title>
        <Columns gapless>
          <Column>
            <Notification variant="primary">No Gap</Notification>
          </Column>
          <Column>
            <Notification variant="primary">No Gap</Notification>
          </Column>
          <Column>
            <Notification variant="primary">No Gap</Notification>
          </Column>
          <Column>
            <Notification variant="primary">No Gap</Notification>
          </Column>
        </Columns>
      </Container>
    </Section>

    <Section>
      <Container>
        <Columns gapless multiline responsiveness="mobile">
          <Column size="one-quarter">
            <Notification variant="primary">is-one-quarter</Notification>
          </Column>
          <Column size="one-quarter">
            <Notification variant="primary">is-one-quarter</Notification>
          </Column>
          <Column size="one-quarter">
            <Notification variant="primary">is-one-quarter</Notification>
          </Column>
          <Column className="is-one-quarter">
            <Notification variant="primary">is-one-quarter</Notification>
          </Column>
          <Column size="half">
            <Notification variant="primary">is-half</Notification>
          </Column>
          <Column size="one-quarter">
            <Notification variant="primary">is-one-quarter</Notification>
          </Column>
          <Column size="one-quarter">
            <Notification variant="primary">is-one-quarter</Notification>
          </Column>
          <Column size="one-quarter">
            <Notification variant="primary">is-one-quarter</Notification>
          </Column>
          <Column>
            <Notification variant="primary">Auto</Notification>
          </Column>
        </Columns>
      </Container>
    </Section>
  </div>
)
