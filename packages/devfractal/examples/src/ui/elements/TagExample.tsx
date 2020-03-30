import React from 'react'
import { Control } from 'srtp-ui'
import {
  Box,
  Delete,
  Field,
  Section,
  Tag as TagComponent,
  Tags,
  Text,
  Title,
} from 'srtp-ui'

const BasicTagExample: React.FC = () => (
  <Section>
    <Title>Default Tag</Title>
    <TagComponent>Tag label</TagComponent>
  </Section>
)

const TagColorExample: React.FC = () => (
  <Section>
    <Title>Colors</Title>
    <Box>
      <Tags>
        <TagComponent variant="black">Black</TagComponent>
        <TagComponent variant="dark">Dark</TagComponent>
        <TagComponent variant="light">Light</TagComponent>
        <TagComponent variant="primary">Primary</TagComponent>
        <TagComponent variant="info">Info</TagComponent>
        <TagComponent variant="success">Success</TagComponent>
        <TagComponent variant="warning">Warning</TagComponent>
        <TagComponent variant="danger">Danger</TagComponent>
        <TagComponent variant="white">White</TagComponent>
      </Tags>
    </Box>
  </Section>
)

const TagSizeExample: React.FC = () => (
  <Section>
    <Title>Sizes</Title>
    <Box>
      <Tags>
        <TagComponent size="normal">Normal</TagComponent>
        <TagComponent size="medium">Medium</TagComponent>
        <TagComponent size="large">Large</TagComponent>
      </Tags>
    </Box>
  </Section>
)

const TagModifiersExample: React.FC = () => (
  <Section>
    <Title>Modifiers</Title>
    <Box>
      <Tags>
        <TagComponent rounded>Rounded</TagComponent>
        <TagComponent modifier="link">Link</TagComponent>
        <TagComponent modifier="delete" />
      </Tags>
    </Box>
  </Section>
)

const CombinationsExample: React.FC = () => (
  <Section>
    <Title>Combinations</Title>
    <Box>
      <Tags>
        <TagComponent variant="success">
          Bar
          <Delete size="small" />
        </TagComponent>
        <TagComponent variant="warning" size="medium">
          Hello
          <Delete size="small" />
        </TagComponent>
        <TagComponent variant="danger" size="large">
          World
          <Delete size="large" />
        </TagComponent>
      </Tags>
    </Box>
  </Section>
)

const TagAlignmentExample: React.FC = () => (
  <Section>
    <Title>Alignment</Title>
    <Box>
      <Text>Centered </Text>
      <Tags alignment="centered">
        <TagComponent size="normal">Normal</TagComponent>
        <TagComponent size="medium">Medium</TagComponent>
        <TagComponent size="large">Large</TagComponent>
      </Tags>
      <Text> Right</Text>
      <Tags alignment="right">
        <TagComponent size="normal">Normal</TagComponent>
        <TagComponent size="medium">Medium</TagComponent>
        <TagComponent size="large">Large</TagComponent>
      </Tags>
    </Box>
  </Section>
)

const ListOfTagsExample: React.FC = () => (
  <Section>
    <Title>List of Tags</Title>
    <Box>
      <Tags>
        <TagComponent>One</TagComponent>
        <TagComponent>Two</TagComponent>
        <TagComponent>Three</TagComponent>
        <TagComponent>Four</TagComponent>
        <TagComponent>Five</TagComponent>
        <TagComponent>Six</TagComponent>
        <TagComponent>Seven</TagComponent>
        <TagComponent>Eight</TagComponent>
        <TagComponent>Nine</TagComponent>
        <TagComponent>Ten</TagComponent>
        <TagComponent>Eleven</TagComponent>
        <TagComponent>Twelve</TagComponent>
      </Tags>
    </Box>
  </Section>
)

const AttachTagsTogetherExample: React.FC = () => (
  <Section>
    <Title>Attach Tags Together</Title>
    <Box>
      <Section>
        <Tags addons>
          <TagComponent>Package</TagComponent>
          <TagComponent variant="primary">Bulma</TagComponent>
        </Tags>
        <Section>
          <Field groupedMultiline>
            <Control>
              <Tags addons>
                <TagComponent variant="dark">npm</TagComponent>
                <TagComponent variant="success">0.5.0</TagComponent>
              </Tags>
            </Control>
            <Control>
              <Tags addons>
                <TagComponent variant="dark">Technology</TagComponent>
                <TagComponent modifier="delete" />
              </Tags>
            </Control>
          </Field>
        </Section>
      </Section>
    </Box>
  </Section>
)

export const Tag: React.FC = () => (
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
