import React from 'react'
import { Box, Button, Section, Text, Title } from 'srtp-ui'

export const Helpers: React.FC = () => (
  <>
    <Section>
      <Title>Spacing</Title>
      <Box>
        <Text textWeight="bold">is-paddingLess</Text>
        <Button paddingLess>Button</Button>
        <Text textWeight="bold">with padding</Text>
        <Button>Button1</Button>
        <Text textWeight="bold">is-marginLess</Text>
        <Button marginLess>Button</Button>
        <Text textWeight="bold">with margin</Text>
        <Button>Button</Button>
      </Box>
    </Section>
    <Section>
      <Title>Float</Title>
      <Box>
        <Text textWeight="bold">is-pulled-left</Text>
        <Button noControl>Button1</Button>
        <Button noControl floating="pulled-left">
          Pulled Left Button 2
        </Button>
        <Button noControl>Button3</Button>
        <Text textWeight="bold">is-pulled-right</Text>
        <Button noControl>Button1</Button>
        <Button noControl floating="pulled-right">
          Pulled Right Button 2
        </Button>
        <Button noControl>Button3</Button>
      </Box>
    </Section>
    <Section>
      <Title>Other</Title>
      <Box>
        <Text textWeight="bold">is-shadowLess</Text>
        <Button shadowLess>Button</Button>
        <Text textWeight="bold">with shadow</Text>
        <Button>Button</Button>
        <Text textWeight="bold">is-unselectable</Text>
        <Text unSelectable>unselectable text</Text>
        <Text textWeight="bold">selectable</Text>
        <Text>selectable text</Text>
        <Text textWeight="bold">is-invisible</Text>
        <Button invisible>Button</Button>
        <Text textWeight="bold">visible</Text>
        <Button>Button</Button>
        <Text textWeight="bold">is-radiusless</Text>
        <Button radiusLess>Button</Button>
        <Text textWeight="bold">with radius</Text>
        <Button>Button</Button>
      </Box>
    </Section>
  </>
)
