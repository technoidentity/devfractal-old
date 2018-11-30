import * as React from 'react'
import { Columns } from '../Columns'
import { Column } from '../Column'
import { Section } from '../Section'
import { Container } from '../Container'
import { Notification } from '../Notification'

export const LayoutExample: React.SFC = () => (
  <Section>
    <Container>
      <Columns>
        <Column>
          <Notification color="info">First column</Notification>
          <Columns>
            <Column>
              <Notification color="info">First nested column</Notification>
            </Column>
            <Column>
              <Notification color="info">Second nested column</Notification>
            </Column>
          </Columns>
        </Column>
        <Column>
          <Notification color="danger">Second column</Notification>
          <Columns>
            <Column>
              <Notification color="danger">50%</Notification>
            </Column>
            <Column>
              <Notification color="danger">Auto</Notification>
            </Column>
            <Column>
              <Notification color="danger">Auto</Notification>
            </Column>
          </Columns>
        </Column>
      </Columns>
    </Container>
  </Section>
)
