import React from 'react'
import { Container, Notification, Section, Title } from '../devfractal'

export const CenteredContainerExample: React.FC = () => (
  <Section>
    <Title>Centered container</Title>
    <Container>
      <Notification>This container is centered on desktop.</Notification>
    </Container>
  </Section>
)

export const FluidContainerExample: React.FC = () => (
  <Section>
    <div className="is-fullwidth">
      <Title>Fluid container</Title>
      <Container fluid>
        <Notification>
          This container is <strong>fluid</strong>: it will have a 32px gap on
          either side, on any viewport size.
        </Notification>
      </Container>
    </div>
  </Section>
)

export const ContainerBreakpointExample: React.FC = () => (
  <Section>
    <div className="is-fullwidth">
      <Title>Breakpoint containers</Title>
      <Container breakpoint="widescreen">
        <Notification>
          This container is <strong>fullwidth</strong> <em>until</em> the
          <code>$widescreen</code> breakpoint.
        </Notification>
      </Container>
    </div>
    <Section>
      <Container breakpoint="fullhd">
        <Notification>
          This container is <strong>fullwidth</strong> <em>until</em> the
          <code>$fullhd</code> breakpoint.
        </Notification>
      </Container>
    </Section>
  </Section>
)

export const ContainerExample: React.FC = () => (
  <>
    <CenteredContainerExample />
    <FluidContainerExample />
    <ContainerBreakpointExample />
  </>
)
