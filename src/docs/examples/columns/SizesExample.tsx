import React from 'react'
import {
  Box,
  Column,
  Columns,
  Container,
  Notification,
  Section,
  SubTitle,
  Title,
} from '../devfractal'

export const SizesColumnExample: React.SFC = () => (
  <div>
    <Section>
      <Container>
        <Title size="4">Different sizes</Title>
        <Columns>
          <Column size="four-fifths">
            <Notification variant="primary" textAlignment="centered">
              is-four-fifths
            </Notification>
          </Column>
          <Column>
            <Notification variant="light" textAlignment="centered">
              Auto
            </Notification>
          </Column>
          <Column>
            <Notification variant="light" textAlignment="centered">
              Auto
            </Notification>
          </Column>
        </Columns>

        <Columns>
          <Column size="three-quarters">
            {' '}
            <Notification variant="primary" textAlignment="centered">
              is-three-quarters
            </Notification>
          </Column>
          <Column>
            <Notification variant="light" textAlignment="centered">
              Auto
            </Notification>
          </Column>
          <Column>
            <Notification variant="light" textAlignment="centered">
              Auto
            </Notification>
          </Column>
        </Columns>

        <Columns>
          <Column size="two-thirds">
            {' '}
            <Notification variant="primary" textAlignment="centered">
              is-two-thirds
            </Notification>
          </Column>
          <Column>
            <Notification variant="light" textAlignment="centered">
              Auto
            </Notification>
          </Column>
          <Column>
            <Notification variant="light" textAlignment="centered">
              Auto
            </Notification>
          </Column>
        </Columns>

        <Columns>
          <Column size="three-fifths">
            {' '}
            <Notification variant="primary" textAlignment="centered">
              is-three-fifths
            </Notification>
          </Column>
          <Column>
            <Notification variant="light" textAlignment="centered">
              Auto
            </Notification>
          </Column>
          <Column>
            <Notification variant="light" textAlignment="centered">
              Auto
            </Notification>
          </Column>
        </Columns>

        <Columns>
          <Column size="half">
            {' '}
            <Notification variant="primary" textAlignment="centered">
              is-half
            </Notification>
          </Column>
          <Column>
            <Notification variant="light" textAlignment="centered">
              Auto
            </Notification>
          </Column>
          <Column>
            <Notification variant="light" textAlignment="centered">
              Auto
            </Notification>
          </Column>
        </Columns>

        <Columns>
          <Column size="two-fifths">
            {' '}
            <Notification variant="primary" textAlignment="centered">
              is-two-fifths
            </Notification>
          </Column>
          <Column>
            <Notification variant="light" textAlignment="centered">
              Auto
            </Notification>
          </Column>
          <Column>
            <Notification variant="light" textAlignment="centered">
              Auto
            </Notification>
          </Column>
        </Columns>

        <Columns>
          <Column size="one-third">
            {' '}
            <Notification variant="primary" textAlignment="centered">
              is-one-third
            </Notification>
          </Column>
          <Column>
            <Notification variant="light" textAlignment="centered">
              Auto
            </Notification>
          </Column>
          <Column>
            <Notification variant="light" textAlignment="centered">
              Auto
            </Notification>
          </Column>
        </Columns>

        <Columns>
          <Column size="one-quarter">
            {' '}
            <Notification variant="primary" textAlignment="centered">
              is-one-quarter
            </Notification>
          </Column>
          <Column>
            <Notification variant="light" textAlignment="centered">
              Auto
            </Notification>
          </Column>
          <Column>
            <Notification variant="light" textAlignment="centered">
              Auto
            </Notification>
          </Column>
        </Columns>

        <Columns>
          <Column size="one-fifth">
            {' '}
            <Notification variant="primary" textAlignment="centered">
              is-one-fifth
            </Notification>
          </Column>
          <Column>
            <Notification variant="light" textAlignment="centered">
              Auto
            </Notification>
          </Column>
          <Column>
            <Notification variant="light" textAlignment="centered">
              Auto
            </Notification>
          </Column>
        </Columns>
      </Container>
    </Section>

    <Section>
      <Container>
        <Title size="4">Offset</Title>
        <Columns>
          <Column size="half" offsetSize="one-quarter">
            <div>
              <Notification variant="primary" textAlignment="centered">
                <code>is-half is-offset-one-quarter</code>
              </Notification>
            </div>
          </Column>
        </Columns>

        <Columns>
          <Column size="three-fifths" offsetSize="one-fifth">
            <div>
              <Notification variant="primary" textAlignment="centered">
                <code>is-three-fifths is-offset-one-fifth</code>
              </Notification>
            </div>
          </Column>
        </Columns>

        <Columns>
          <Column gridSize="4" offsetSize="8">
            <div>
              <Notification className="is-primary" textAlignment="centered">
                <code>is-4 is-offset-8</code>
              </Notification>
            </div>
          </Column>
        </Columns>

        <Columns>
          <Column className="is-11 is-offset-1">
            <div>
              <Notification variant="primary" textAlignment="centered">
                <code>is-11 is-offset-1</code>
              </Notification>
            </div>
          </Column>
        </Columns>
      </Container>
    </Section>

    <Section>
      <Container>
        <Title size="4">Narrow column</Title>
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
      </Container>
    </Section>
  </div>
)
