import * as React from 'react'
import { Columns } from '../Columns'
import { Column } from '../Column'
import { Section } from '../Section'
import { Container } from '../Container'
import { Notification } from '../Notification'

export const LayoutExample: React.SFC = () => (
  <div>
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
            <Notification className="is-danger">Second column</Notification>
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
    <Section>
      <Columns multiline responsiveness="mobile">
        <Column size="one-quarter">
          <Notification color="primary">is-one-quarter</Notification>
        </Column>
        <Column size="one-quarter">
          <Notification color="primary">is-one-quarter</Notification>
        </Column>
        <Column size="one-quarter">
          <Notification color="primary">is-one-quarter</Notification>
        </Column>
        <Column className="is-one-quarter">
          <Notification color="primary">is-one-quarter</Notification>
        </Column>
        <Column size="half">
          <Notification color="primary">is-half</Notification>
        </Column>
        <Column size="one-quarter">
          <Notification color="primary">is-one-quarter</Notification>
        </Column>
        <Column size="one-quarter">
          <Notification color="primary">is-one-quarter</Notification>
        </Column>
        <Column size="one-quarter">
          <Notification color="primary">is-one-quarter</Notification>
        </Column>
        <Column>
          <Notification color="primary">Auto</Notification>
        </Column>
      </Columns>
    </Section>
    <Section>
      <Columns responsiveness="mobile">
        <Column size="half" offsetSize="one-quarter">
          <div>
            <Notification color="primary">
              <code>is-half is-offset-one-quarter</code>
            </Notification>
          </div>
        </Column>
      </Columns>

      <Columns responsiveness="mobile">
        <Column size="three-fifths" offsetSize="one-fifth">
          <div>
            <Notification color="primary">
              <code>is-three-fifths is-offset-one-fifth</code>
            </Notification>
          </div>
        </Column>
      </Columns>

      <Columns responsiveness="mobile">
        <Column gridSize="4" offsetSize="8">
          <div>
            <Notification className="is-primary">
              <code>is-4 is-offset-8</code>
            </Notification>
          </div>
        </Column>
      </Columns>

      <Columns responsiveness="mobile">
        <Column className="is-11 is-offset-1">
          <div>
            <Notification color="primary">
              <code>is-11 is-offset-1</code>
            </Notification>
          </div>
        </Column>
      </Columns>
    </Section>
  </div>
)
