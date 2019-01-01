import React from 'react'
import { Column, Columns } from '../../../devfractal/columns'
import { Notification, Title } from '../../../devfractal/elements'
import { Container, Section } from '../../../devfractal/layout'

export const NestingColumnExample: React.SFC = () => (
  <div>
    <Section>
      <Container>
        <Title size="4">Nesting</Title>
        <Columns>
          <Column>
            <Notification variant="info">First column</Notification>
            <Columns>
              <Column>
                <Notification variant="info">First nested column</Notification>
              </Column>
              <Column>
                <Notification variant="info">Second nested column</Notification>
              </Column>
            </Columns>
          </Column>
          <Column>
            <Notification className="is-danger">Second column</Notification>
            <Columns>
              <Column>
                <Notification variant="danger">50%</Notification>
              </Column>
              <Column>
                <Notification variant="danger">Auto</Notification>
              </Column>
              <Column>
                <Notification variant="danger">Auto</Notification>
              </Column>
            </Columns>
          </Column>
        </Columns>
      </Container>
    </Section>
  </div>
)
