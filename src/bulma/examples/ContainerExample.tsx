import * as React from 'react'
import { Container } from '../Container'
import { Notification } from '../Notification'

export const ContainerExample: React.SFC = () => (
  <Container>
    <Notification>This container is centered on desktop.</Notification>
  </Container>
)
