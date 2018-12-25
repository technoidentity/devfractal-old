import * as React from 'react'
import { Column, Columns } from '../../columns'
import { Notification } from '../../elements'
import { Section } from '../../layout'

export const GapColumn: React.SFC = () => (
  <div>
    <Columns gapless>
      <Column>
        <Notification variant="primary">No Gap</Notification>
      </Column>
      <Column>
        <Notification variant="primary">No Gap</Notification>
      </Column>
      <Column>
        <Notification variant="primary">No Gap</Notification>
      </Column>
      <Column>
        <Notification variant="primary">No Gap</Notification>
      </Column>
    </Columns>

    <Section>
      <Columns gapless multiline responsiveness="mobile">
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
  </div>
)
