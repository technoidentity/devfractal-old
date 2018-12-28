import React from 'react'
import { Box, Notification, Title } from '../../elements'
import { Container, Section } from '../../layout'

export const ContainerExample: React.SFC = () => (
  <div>
    <Title>Centered container</Title>
    <Container>
      <Box>
        <Notification>This container is centered on desktop.</Notification>
      </Box>
    </Container>
    <Section>
      <Title>Fluid container</Title>
      <Box>
        <Container className="is-fluid">
          <Notification>
            This container is <strong>fluid</strong>: it will have a 32px gap on
            either side, on any viewport size.
          </Notification>
        </Container>
      </Box>
    </Section>
    <Section>
      <Title>Breakpoint containers</Title>
      <Box>
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
      </Box>
    </Section>
  </div>
)
