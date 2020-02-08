import React from 'react'
import { Box, Section, Text, Title } from 'technoidentity-ui'

const TextSizesExample: React.FC = () => (
  <Section>
    <Title>Sizes</Title>
    <Box>
      <Text textSize="1">size 1</Text>
      <Text textSize="2">size 2</Text>
      <Text textSize="3">size 3</Text>
      <Text textSize="4">size 4</Text>
      <Text textSize="5">size 5</Text>
      <Text textSize="6">size 6</Text>
      <Text textSize="7">size 7</Text>
    </Box>
  </Section>
)

const TextResponsiveSizesExample: React.FC = () => (
  <Section>
    <Title>Responsive Size</Title>
    <Box>
      <Text textSize="1" textResponsiveSize="mobile">
        is-size-1-mobile
      </Text>
      <Text textSize="1" textResponsiveSize="tablet">
        is-size-1-tablet
      </Text>
      <Text textSize="1" textResponsiveSize="touch">
        is-size-1-touch
      </Text>
      <Text textSize="1" textResponsiveSize="desktop">
        is-size-1-desktop
      </Text>
      <Text textSize="1" textResponsiveSize="widescreen">
        is-size-1-widescreen
      </Text>
      <Text textSize="1" textResponsiveSize="fullhd">
        is-size-1-fullhd
      </Text>
    </Box>
  </Section>
)

const TextColorHelperExample: React.FC = () => (
  <Section>
    <Title>Colors</Title>
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
      <Text textColor="grey-lighter">grey-lighter</Text>
      <Text textColor="white-ter">white-ter</Text>
      <Text textColor="white-bis">White-bis</Text>
    </Box>
  </Section>
)

const TextAlignmentExample: React.FC = () => (
  <Section>
    <Title>Alignment</Title>
    <Box>
      <Text textAlignment="centered"> centered</Text>
      <Text textAlignment="left"> left</Text>
      <Text textAlignment="right"> right</Text>
      <Text textAlignment="justified">justified</Text>
    </Box>
  </Section>
)

const TextResponsiveAlignmentExample: React.FC = () => (
  <Section>
    <Title>Responsive Alignment</Title>
    <Box>
      <Text textAlignment="centered" textResponsiveAlignment="desktop">
        has-text-centered-desktop
      </Text>
      <Text textAlignment="left" textResponsiveAlignment="mobile">
        has-text-left-mobile
      </Text>
      <Text textAlignment="right" textResponsiveAlignment="tablet">
        has-text-right-tablet
      </Text>
      <Text textAlignment="centered" textResponsiveAlignment="fullhd">
        has-text-centered-fullhd
      </Text>
      <Text textAlignment="left" textResponsiveAlignment="touch">
        has-text-right-touch
      </Text>
      <Text textAlignment="right" textResponsiveAlignment="widescreen">
        has-text-right-widescreen
      </Text>
    </Box>
  </Section>
)

const TextTransformationExample: React.FC = () => (
  <Section>
    <Title>Text Transformation</Title>
    <Box>
      <Text textTransformation="lowercase">all characters to lowercase</Text>
      <Text textTransformation="uppercase">all characters to uppercase</Text>
      <Text textTransformation="capitalized">
        first character of each word to uppercase
      </Text>
      <Text textTransformation="italic">all characters to italic</Text>
    </Box>
  </Section>
)

const TextWeightExample: React.FC = () => (
  <Section>
    <Title>Text Weight</Title>
    <Box>
      <Text textWeight="normal">Normal</Text>
      <Text textWeight="light">Light</Text>
      <Text textWeight="semiBold">SemiBold</Text>
      <Text textWeight="bold">Bold</Text>
    </Box>
  </Section>
)

export const Typography: React.FC = () => (
  <>
    <TextSizesExample />
    <TextAlignmentExample />
    <TextResponsiveSizesExample />
    <TextResponsiveAlignmentExample />
    <TextColorHelperExample />
    <TextTransformationExample />
    <TextWeightExample />
  </>
)
