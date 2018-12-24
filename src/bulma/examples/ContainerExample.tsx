import React from 'react'
import { Notification } from '../elements/Notification'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'

export const ContainerExample: React.SFC = () => (
  <div>
    <Container>
      <Notification>This container is centered on desktop.</Notification>
    </Container>
    <Section>
      <Container className="is-fluid">
        <Notification>
          This container is <strong>fluid</strong>: it will have a 32px gap on
          either side, on any viewport size.
        </Notification>
      </Container>
    </Section>
    <Section>
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
  </div>
)
