import React from 'react'
import { Control } from '../devfractal'
import {
  Box,
  Delete,
  Field,
  Section,
  Tag,
  Tags,
  Text,
  Title,
} from '../devfractal'

export const BasicTagExample: React.SFC = () => (
  <Section>
    <Title>Default Tag</Title>
    <Tag>Tag label</Tag>
  </Section>
)

export const TagColorExample: React.SFC = () => (
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
)

export const TagSizeExample: React.SFC = () => (
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
)

export const TagModifiersExample: React.SFC = () => (
  <Section>
    <Title>Modifiers</Title>
    <Box>
      <Tags>
        <Tag modifier="rounded">Rounded</Tag>
        <Tag modifier="delete" />
      </Tags>
    </Box>
  </Section>
)

export const CombinationsExample: React.SFC = () => (
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
)

export const TagAlignmentExample: React.SFC = () => (
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
)

export const ListOfTagsExample: React.SFC = () => (
  <Section>
    <Title>List of Tags</Title>
    <Box>
      <Tags>
        <Tag>One</Tag>
        <Tag>Two</Tag>
        <Tag>Three</Tag>
        <Tag>Four</Tag>
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
)

export const AttachTagsTogetherExample: React.SFC = () => (
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
            <Control>
              <Tags addons>
                <Tag variant="dark">npm</Tag>
                <Tag variant="success">0.5.0</Tag>
              </Tags>
            </Control>
            <Control>
              <Tags addons>
                <Tag variant="dark">Technology</Tag>
                <Tag modifier="delete" />
              </Tags>
            </Control>
          </Field>
        </Section>
      </Section>
    </Box>
  </Section>
)

export const TagExample: React.SFC = () => (
  <>
    <BasicTagExample />
    <TagColorExample />
    <TagSizeExample />
    <TagModifiersExample />
    <CombinationsExample />
    <TagAlignmentExample />
    <ListOfTagsExample />
    <AttachTagsTogetherExample />
  </>
)
