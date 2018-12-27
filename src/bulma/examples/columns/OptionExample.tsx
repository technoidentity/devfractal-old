import * as React from 'react'
import { Column, Columns } from '../../columns'
import { Notification } from '../../elements'
import { Section } from '../../layout'

export const OptionsColumnExample: React.SFC = () => (
  <div>
    <Columns verticallyCentered>
      <Column gridSize="8">
        <Notification className="has-text-centered" variant="primary">
          vertically centered
        </Notification>
      </Column>
      <Column>
        <Notification variant="primary">
          Second column with more content. This is so you can see the vertical
          alignment.
        </Notification>
      </Column>
    </Columns>

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

    <Columns responsiveness="mobile" columnCentered>
      <Column size="half">
        <Notification variant="primary">
          <code className="html">is-half</code>
        </Notification>
      </Column>
    </Columns>

    <Columns multiline columnCentered responsiveness="mobile">
      <Column narrow>
        <Notification variant="primary">
          <code className="html">is-narrow</code>
          First Column
        </Notification>
      </Column>
      <Column narrow>
        <Notification variant="primary">
          <code className="html">is-narrow</code>
          Our Second Column
        </Notification>
      </Column>
      <Column narrow>
        <Notification variant="primary">
          <code className="html">is-narrow</code>
          Third Column
        </Notification>
      </Column>
      <Column narrow>
        <Notification variant="primary">
          <code className="html">is-narrow</code>
          The Fourth Column
        </Notification>
      </Column>
      <Column narrow>
        <Notification variant="primary">
          <code className="html">is-narrow</code>
          Fifth Column
        </Notification>
      </Column>
    </Columns>
  </div>
)
