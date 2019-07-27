import React from 'react'
import {
  Box,
  Section,
  SubTitle,
  Title as TitleComponent,
} from 'technoidentity-devfractal-ui-core'

const TitleSizeExample: React.FC = () => (
  <Section>
    <TitleComponent>Title Sizes</TitleComponent>
    <Box>
      <TitleComponent size="1">Title 1</TitleComponent>
      <TitleComponent size="2">Title 2</TitleComponent>
      <TitleComponent size="3">Title 3(default size)</TitleComponent>
      <TitleComponent size="4">Title 4</TitleComponent>
      <TitleComponent size="5">Title 5</TitleComponent>
      <TitleComponent size="6">Title 6</TitleComponent>
    </Box>
  </Section>
)

const SubtitleSizeExample: React.FC = () => (
  <Section>
    <TitleComponent>Subtitle Sizes</TitleComponent>
    <Box>
      <SubTitle size="1">Subtitle 1</SubTitle>
      <SubTitle size="2">Subtitle 2</SubTitle>
      <SubTitle size="3">Subtitle 3</SubTitle>
      <SubTitle size="4">Subtitle 4</SubTitle>
      <SubTitle size="5">Subtitle 5</SubTitle>
      <SubTitle size="6">Subtitle 6</SubTitle>
    </Box>
  </Section>
)

const CombinedExample: React.FC = () => (
  <Section>
    <TitleComponent>Combined Example</TitleComponent>
    <Box>
      <TitleComponent size="1">Title 1</TitleComponent>
      <SubTitle size="3">Subtitle 3</SubTitle>
      <TitleComponent size="2">Title 2</TitleComponent>
      <SubTitle size="4">Subtitle 4</SubTitle>
      <TitleComponent size="3">Title 3</TitleComponent>
      <SubTitle size="5">Subtitle 5</SubTitle>
    </Box>
  </Section>
)

const WithSpacingExample: React.FC = () => (
  <Section>
    <TitleComponent>With Spacing</TitleComponent>
    <Box>
      <TitleComponent size="1" spaced>
        Title 1
      </TitleComponent>
      <SubTitle size="3">Subtitle 3</SubTitle>
      <TitleComponent size="2" spaced>
        Title 2
      </TitleComponent>
      <SubTitle size="4">Subtitle 4</SubTitle>
      <TitleComponent size="3" spaced>
        Title 3
      </TitleComponent>
      <SubTitle size="5">Subtitle 5</SubTitle>
    </Box>
  </Section>
)

export const Title: React.FC = () => (
  <>
    <TitleSizeExample />
    <SubtitleSizeExample />
    <CombinedExample />
    <WithSpacingExample />
  </>
)
