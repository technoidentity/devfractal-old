import React from 'react'
import {
  Column,
  Columns,
  Container,
  Notification,
  Section,
  Title,
} from '../devfractal'

export const NestingColumnExample: React.SFC = () => (
  <div>
    <Section>
      <Container>
        <Title size="4">Nesting</Title>
        <Columns>
          <Column>
            <Notification variant="info" textAlignment="centered">
              First column
            </Notification>
            <Columns>
              <Column>
                <Notification variant="info" textAlignment="centered">
                  First nested column
                </Notification>
              </Column>
              <Column>
                <Notification variant="info" textAlignment="centered">
                  Second nested column
                </Notification>
              </Column>
            </Columns>
          </Column>
          <Column>
            <Notification className="is-danger" textAlignment="centered">
              Second column
            </Notification>
            <Columns>
              <Column>
                <Notification variant="danger" textAlignment="centered">
                  50%
                </Notification>
              </Column>
              <Column>
                <Notification variant="danger" textAlignment="centered">
                  Auto
                </Notification>
              </Column>
              <Column>
                <Notification variant="danger" textAlignment="centered">
                  Auto
                </Notification>
              </Column>
            </Columns>
          </Column>
        </Columns>
      </Container>
    </Section>
  </div>
)
