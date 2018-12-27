import * as React from 'react'
import { Column, Columns } from '../../columns'
import { Notification } from '../../elements'
import { Section } from '../../layout'

export const ResponsiveColumnExample: React.SFC = () => (
  <div>
    <Section>
      <Columns className="is-mobile-only">
        <Column>
          <Notification variant="primary">1</Notification>
        </Column>
        <Column>
          <Notification variant="primary">2</Notification>
        </Column>
        <Column>
          <Notification variant="primary">3</Notification>
        </Column>
        <Column>
          <Notification variant="primary">4</Notification>
        </Column>
      </Columns>
    </Section>
    <Section>
      <Columns className="is-desktop-only">
        <Column>
          <Notification variant="primary">1</Notification>
        </Column>
        <Column>
          <Notification variant="primary">2</Notification>
        </Column>
        <Column>
          <Notification variant="primary">3</Notification>
        </Column>
        <Column>
          <Notification variant="primary">4</Notification>
        </Column>
      </Columns>
    </Section>
  </div>
)
