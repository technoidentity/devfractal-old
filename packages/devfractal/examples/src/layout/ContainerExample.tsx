import {
  Container as ContainerComponent,
  Notification,
  Section,
  Title,
} from 'stp-ui'
import React from 'react'

const CenteredContainerExample: React.FC = () => (
  <Section>
    <Title>Centered container</Title>
    <ContainerComponent>
      <Notification>This container is centered on desktop.</Notification>
    </ContainerComponent>
  </Section>
)

const FluidContainerExample: React.FC = () => (
  <Section>
    <div className="is-fullwidth">
      <Title>Fluid container</Title>
      <ContainerComponent fluid>
        <Notification>
          This container is <strong>fluid</strong>: it will have a 32px gap on
          either side, on any viewport size.
        </Notification>
      </ContainerComponent>
    </div>
  </Section>
)

const ContainerBreakpointExample: React.FC = () => (
  <Section>
    <div className="is-fullwidth">
      <Title>Breakpoint containers</Title>
      <ContainerComponent breakpoint="widescreen">
        <Notification>
          This container is <strong>fullwidth</strong> <em>until</em> the
          <code>$widescreen</code> breakpoint.
        </Notification>
      </ContainerComponent>
    </div>
    <Section>
      <ContainerComponent breakpoint="fullhd">
        <Notification>
          This container is <strong>fullwidth</strong> <em>until</em> the
          <code>$fullhd</code> breakpoint.
        </Notification>
      </ContainerComponent>
    </Section>
  </Section>
)

export const Container: React.FC = () => (
  <>
    <CenteredContainerExample />
    <FluidContainerExample />
    <ContainerBreakpointExample />
  </>
)
