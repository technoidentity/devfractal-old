import React from 'react'
import { Box, Section, Text, Title } from '../devfractal'

export const TextColorExample: React.SFC = () => (
  <Section>
    <Title>Text Color</Title>
    <Box>
      <Text textColor="black">black</Text>
      <Text textColor="primary">primary</Text>
      <Text textColor="success">success</Text>
      <Text textColor="warning">warning</Text>
      <Text textColor="link">link</Text>
      <Text textColor="dark">dark</Text>
      <Text textColor="info">info</Text>
      <Text textColor="white">white</Text>
      <Text textColor="danger">Danger</Text>
      <Text textColor="black-bis">black-bis</Text>
      <Text textColor="black-ter">black-ter</Text>
      <Text textColor="grey-darker">grey-darker</Text>
      <Text textColor="grey-dark">grey-dark</Text>
      <Text textColor="grey">grey</Text>
      <Text textColor="grey-light">grey-light</Text>
      <Text textColor="grey-light">grey-light</Text>
      <Text textColor="grey-lighter">grey-lighter</Text>
      <Text textColor="white-ter">white-ter</Text>
      <Text textColor="white-bis">White-bis</Text>
    </Box>
  </Section>
)

export const TextBackgroundColorExample: React.SFC = () => (
  <Section>
    <Title>Background Color</Title>
    <Box>
      <Text textBackgroundColor="black">black</Text>
      <Text textBackgroundColor="primary">primary</Text>
      <Text textBackgroundColor="success">success</Text>
      <Text textBackgroundColor="warning">warning</Text>
      <Text textBackgroundColor="link">link</Text>
      <Text textBackgroundColor="dark">dark</Text>
      <Text textBackgroundColor="info">info</Text>
      <Text textBackgroundColor="white">white</Text>
      <Text textBackgroundColor="danger">Danger</Text>
      <Text textBackgroundColor="black-bis">black-bis</Text>
      <Text textBackgroundColor="black-ter">black-ter</Text>
      <Text textBackgroundColor="grey-darker">grey-darker</Text>
      <Text textBackgroundColor="grey-dark">grey-dark</Text>
      <Text textBackgroundColor="grey">grey</Text>
      <Text textBackgroundColor="grey-light">grey-light</Text>
      <Text textBackgroundColor="grey-light">grey-light</Text>
      <Text textBackgroundColor="grey-lighter">grey-lighter</Text>
      <Text textBackgroundColor="white-ter">white-ter</Text>
      <Text textBackgroundColor="white-bis">White-bis</Text>
    </Box>
  </Section>
)

export const ColorHelpersExample: React.SFC = () => (
  <>
    <TextColorExample />
    <TextBackgroundColorExample />
  </>
)
