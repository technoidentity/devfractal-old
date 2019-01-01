import React from 'react'
import { Container, Notification, Section, Title } from '../devfractal'

export const ContainerExample: React.SFC = () => (
  <Section>
    <Title>Centered container</Title>
    <Container>
      <Notification>This container is centered on desktop.</Notification>
    </Container>
    <Section>
      <Title>Fluid container</Title>
      <Container className="is-fluid">
        <Notification>
          This container is <strong>fluid</strong>: it will have a 32px gap on
          either side, on any viewport size.
        </Notification>
      </Container>
    </Section>
    <Section>
      <Title>Breakpoint containers</Title>
      <Container breakpoint="widescreen">
        <Notification>
          This container is <strong>fullwidth</strong> <em>until</em> the{' '}
          <code>$widescreen</code> breakpoint.
        </Notification>
      </Container>
    </Section>
    <Section>
      <Container breakpoint="fullhd">
        <Notification>
          This container is <strong>fullwidth</strong> <em>until</em> the{' '}
          <code>$fullhd</code> breakpoint.
        </Notification>
      </Container>
    </Section>
  </Section>
)
