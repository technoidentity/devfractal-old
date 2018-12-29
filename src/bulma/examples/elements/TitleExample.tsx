import React from 'react'
import { Box, SubTitle, Title } from '../../elements'
import { Section } from '../../layout'

export const TitleExample: React.SFC = () => (
  <>
    <Section>
      <Title>Title Sizes</Title>
      <Box>
        <Title size="1">Title 1</Title>
        <Title size="2">Title 2</Title>
        <Title size="3">Title 3(default size)</Title>
        <Title size="4">Title 4</Title>
        <Title size="5">Title 5</Title>
        <Title size="6">Title 6</Title>
        <Title size="7">Title 7</Title>
      </Box>
    </Section>
    <Section>
      <Title>Subtitle Sizes</Title>
      <Box>
        <SubTitle size="1">Subtitle 1</SubTitle>
        <SubTitle size="2">Subtitle 2</SubTitle>
        <SubTitle size="3">Subtitle 3</SubTitle>
        <SubTitle size="4">Subtitle 4</SubTitle>
        <SubTitle size="5">Subtitle 5</SubTitle>
        <SubTitle size="6">Subtitle 6</SubTitle>
        <SubTitle size="7">Subtitle 7</SubTitle>
      </Box>
    </Section>
    <Section>
      <Title>Combined Example</Title>
      <Box>
        <Title size="1">Title 1</Title>
        <SubTitle size="3">Subtitle 3</SubTitle>
        <Title size="2">Title 2</Title>
        <SubTitle size="4">Subtitle 4</SubTitle>
        <Title size="3">Title 3</Title>
        <SubTitle size="5">Subtitle 5</SubTitle>
      </Box>
    </Section>
    <Section>
      <Title>With Spacing</Title>
      <Box>
        <Title size="1" spaced>
          Title 1
        </Title>
        <SubTitle size="3">Subtitle 3</SubTitle>
        <Title size="2" spaced>
          Title 2
        </Title>
        <SubTitle size="4">Subtitle 4</SubTitle>
        <Title size="3" spaced>
          Title 3
        </Title>
        <SubTitle size="5">Subtitle 5</SubTitle>
      </Box>
    </Section>
  </>
)
