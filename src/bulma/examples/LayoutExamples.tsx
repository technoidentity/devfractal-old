import React from 'react'
import { Column, Columns } from '../columns'
import { Notification } from '../elements'
import { Container, Section } from '../layout'

export const LayoutExample: React.SFC = () => (
  <div>
    <Section>
      <Container>
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
    <Section>
      <Columns multiline responsiveness="mobile">
        <Column size="one-quarter">
          <Notification variant="primary">is-one-quarter</Notification>
        </Column>
        <Column size="one-quarter">
          <Notification variant="primary">is-one-quarter</Notification>
        </Column>
        <Column size="one-quarter">
          <Notification variant="primary">is-one-quarter</Notification>
        </Column>
        <Column className="is-one-quarter">
          <Notification variant="primary">is-one-quarter</Notification>
        </Column>
        <Column size="half">
          <Notification variant="primary">is-half</Notification>
        </Column>
        <Column size="one-quarter">
          <Notification variant="primary">is-one-quarter</Notification>
        </Column>
        <Column size="one-quarter">
          <Notification variant="primary">is-one-quarter</Notification>
        </Column>
        <Column size="one-quarter">
          <Notification variant="primary">is-one-quarter</Notification>
        </Column>
        <Column>
          <Notification variant="primary">Auto</Notification>
        </Column>
      </Columns>
    </Section>
    <Section>
      <Columns responsiveness="mobile">
        <Column size="half" offsetSize="one-quarter">
          <div>
            <Notification variant="primary">
              <code>is-half is-offset-one-quarter</code>
            </Notification>
          </div>
        </Column>
      </Columns>

      <Columns responsiveness="mobile">
        <Column size="three-fifths" offsetSize="one-fifth">
          <div>
            <Notification variant="primary">
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
            <Notification variant="primary">
              <code>is-11 is-offset-1</code>
            </Notification>
          </div>
        </Column>
      </Columns>
    </Section>
  </div>
)
