import React from 'react'
import { Box, Delete, Tag, Tags, Title } from '../../elements'
import { Field } from '../../form'
import { Section } from '../../layout'
import { Text } from '../../modifiers'

export const TagExample: React.SFC = () => (
  <>
    <Section>
      <Title>Default Tag</Title>
      <Tag>Tag label</Tag>
    </Section>
    <Section>
      <Title>Colors</Title>
      <Box>
        <Tags>
          <Tag variant="black">Black</Tag>
          <Tag variant="dark">Dark</Tag>
          <Tag variant="light">Light</Tag>
          <Tag variant="primary">Primary</Tag>
          <Tag variant="link">Link</Tag>
          <Tag variant="info">Info</Tag>
          <Tag variant="success">Success</Tag>
          <Tag variant="warning">Warning</Tag>
          <Tag variant="danger">Danger</Tag>
          <Tag variant="white">White</Tag>
        </Tags>
      </Box>
    </Section>
    <Section>
      <Title>Sizes</Title>
      <Box>
        <Tags>
          <Tag size="normal">Normal</Tag>
          <Tag size="medium">Medium</Tag>
          <Tag size="large">Large</Tag>
        </Tags>
      </Box>
    </Section>
    <Section>
      <Title>Modifiers</Title>
      <Box>
        <Tags>
          <Tag modifier="rounded">Rounded</Tag>
          <Tag modifier="delete" />
        </Tags>
      </Box>
    </Section>
    <Section>
      <Title>Combinations</Title>
      <Box>
        <Tags>
          <Tag variant="success">
            Bar
            <Delete size="small" />
          </Tag>
          <Tag variant="warning" size="medium">
            Hello
            <Delete size="small" />
          </Tag>
          <Tag variant="danger" size="large">
            World
            <Delete size="large" />
          </Tag>
        </Tags>
      </Box>
    </Section>
    <Section>
      <Title>Alignment</Title>
      <Box>
        <Text>Centered </Text>
        <Tags alignment="centered">
          <Tag size="normal">Normal</Tag>
          <Tag size="medium">Medium</Tag>
          <Tag size="large">Large</Tag>
        </Tags>
        <Text> Right</Text>
        <Tags alignment="right">
          <Tag size="normal">Normal</Tag>
          <Tag size="medium">Medium</Tag>
          <Tag size="large">Large</Tag>
        </Tags>
      </Box>
    </Section>
    <Section>
      <Title>List of Tags</Title>
      <Box>
        <Tags>
          <Tag>One</Tag>
          <Tag>Two</Tag>
          <Tag>Three</Tag>
          <Tag>Tour</Tag>
          <Tag>Five</Tag>
          <Tag>Six</Tag>
          <Tag>Seven</Tag>
          <Tag>Eight</Tag>
          <Tag>Nine</Tag>
          <Tag>Ten</Tag>
          <Tag>Eleven</Tag>
          <Tag>Twelve</Tag>
        </Tags>
      </Box>
    </Section>
    <Section>
      <Title>Attach Tags Together</Title>
      <Box>
        <Section>
          <Tags addons>
            <Tag>Package</Tag>
            <Tag variant="primary">Bulma</Tag>
          </Tags>
          <Section>
            <Field groupedMultiline>
              <div className="control">
                <Tags addons>
                  <Tag variant="dark">npm</Tag>
                  <Tag variant="success">0.5.0</Tag>
                </Tags>
              </div>
              <div className="control">
                <Tags addons>
                  <Tag variant="dark">Technology</Tag>
                  <Tag modifier="delete" />
                </Tags>
              </div>
            </Field>
          </Section>
        </Section>
      </Box>
    </Section>
  </>
)
