import * as React from 'react'
import { Column, Columns } from '../../columns'
import { Box, Notification, Title } from '../../elements'
import { SubTitle } from '../../elements/Title'
import { Section } from '../../layout'

export const SizesColumn: React.SFC = () => (
  <div>
    <Columns>
      <Column size="four-fifths">
        <Notification variant="primary">is-four-fifths</Notification>
      </Column>
      <Column>
        <Notification variant="light">Auto</Notification>
      </Column>
      <Column>
        <Notification variant="light">Auto</Notification>
      </Column>
    </Columns>

    <Columns>
      <Column size="three-quarters">
        {' '}
        <Notification variant="primary">is-three-quarters</Notification>
      </Column>
      <Column>
        <Notification variant="light">Auto</Notification>
      </Column>
      <Column>
        <Notification variant="light">Auto</Notification>
      </Column>
    </Columns>

    <Columns>
      <Column size="two-thirds">
        {' '}
        <Notification variant="primary">is-two-thirds</Notification>
      </Column>
      <Column>
        <Notification variant="light">Auto</Notification>
      </Column>
      <Column>
        <Notification variant="light">Auto</Notification>
      </Column>
    </Columns>

    <Columns>
      <Column size="three-fifths">
        {' '}
        <Notification variant="primary">is-three-fifths</Notification>
      </Column>
      <Column>
        <Notification variant="light">Auto</Notification>
      </Column>
      <Column>
        <Notification variant="light">Auto</Notification>
      </Column>
    </Columns>

    <Columns>
      <Column size="half">
        {' '}
        <Notification variant="primary">is-half</Notification>
      </Column>
      <Column>
        <Notification variant="light">Auto</Notification>
      </Column>
      <Column>
        <Notification variant="light">Auto</Notification>
      </Column>
    </Columns>

    <Columns>
      <Column size="two-fifths">
        {' '}
        <Notification variant="primary">is-two-fifths</Notification>
      </Column>
      <Column>
        <Notification variant="light">Auto</Notification>
      </Column>
      <Column>
        <Notification variant="light">Auto</Notification>
      </Column>
    </Columns>

    <Columns>
      <Column size="one-third">
        {' '}
        <Notification variant="primary">is-one-third</Notification>
      </Column>
      <Column>
        <Notification variant="light">Auto</Notification>
      </Column>
      <Column>
        <Notification variant="light">Auto</Notification>
      </Column>
    </Columns>

    <Columns>
      <Column size="one-quarter">
        {' '}
        <Notification variant="primary">is-one-quarter</Notification>
      </Column>
      <Column>
        <Notification variant="light">Auto</Notification>
      </Column>
      <Column>
        <Notification variant="light">Auto</Notification>
      </Column>
    </Columns>

    <Columns>
      <Column size="one-fifth">
        {' '}
        <Notification variant="primary">is-one-fifth</Notification>
      </Column>
      <Column>
        <Notification variant="light">Auto</Notification>
      </Column>
      <Column>
        <Notification variant="light">Auto</Notification>
      </Column>
    </Columns>
    <Section>
      <Columns>
        <Column size="half" offsetSize="one-quarter">
          <div>
            <Notification variant="primary">
              <code>is-half is-offset-one-quarter</code>
            </Notification>
          </div>
        </Column>
      </Columns>

      <Columns>
        <Column size="three-fifths" offsetSize="one-fifth">
          <div>
            <Notification variant="primary">
              <code>is-three-fifths is-offset-one-fifth</code>
            </Notification>
          </div>
        </Column>
      </Columns>

      <Columns>
        <Column gridSize="4" offsetSize="8">
          <div>
            <Notification className="is-primary">
              <code>is-4 is-offset-8</code>
            </Notification>
          </div>
        </Column>
      </Columns>

      <Columns>
        <Column className="is-11 is-offset-1">
          <div>
            <Notification variant="primary">
              <code>is-11 is-offset-1</code>
            </Notification>
          </div>
        </Column>
      </Columns>
    </Section>
    <Section>
      <Columns>
        <Column narrow>
          <Box>
            <Title size="5">Narrow column</Title>
            <SubTitle>This column is only 200px wide.</SubTitle>
          </Box>
        </Column>
        <Column>
          <Box>
            <Title size="5">Flexible column</Title>
            <SubTitle>
              This column will take up the remaining space available.
            </SubTitle>
          </Box>
        </Column>
      </Columns>
    </Section>
  </div>
)
