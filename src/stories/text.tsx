import { storiesOf } from '@storybook/react'
import React from 'react'
import { Text } from '../bulma/modifiers/Text'

storiesOf('Text', module)
  .add('with size', () => (
    <div>
      <Text textSize="1">Hello</Text>
      <Text textSize="2">Hello</Text>
      <Text textSize="3">Hello</Text>
      <Text textSize="4">Hello</Text>
      <Text textSize="5">Hello</Text>
      <Text textSize="6">Hello</Text>
      <Text textSize="7">Hello</Text>
    </div>
  ))
  .add('with alignment', () => (
    <div>
      <Text textAlignment="centered">Hello</Text>
      <Text textAlignment="left">Hello</Text>
      <Text textAlignment="right">Hello</Text>
      <Text textAlignment="justified">Hello</Text>
    </div>
  ))
  .add('with color', () => (
    <div>
      <Text textColor="black">Hello</Text>
      <Text textColor="grey">Hello</Text>
      <Text textColor="primary">Hello</Text>
      <Text textColor="success">Hello</Text>
      <Text textColor="warning">Hello</Text>
      <Text textColor="link">Hello</Text>
      <Text textColor="info">Hello</Text>
      <Text textColor="danger">Hello</Text>
    </div>
  ))
  .add('text weight', () => (
    <div>
      <Text textWeight="normal">Hello</Text>
      <Text textWeight="light">Hello</Text>
      <Text textWeight="semiBold">Hello</Text>
      <Text textWeight="bold">Hello</Text>
    </div>
  ))
  .add('text transformation', () => (
    <div>
      <Text textTransformation="lowercase">HELLO</Text>
      <Text textTransformation="uppercase">hello</Text>
      <Text textTransformation="capitalized">hello</Text>
      <Text textTransformation="italic">hello</Text>
    </div>
  ))
  .add('text with responsive size', () => (
    <div>
      <Text textSize="6" textResponsiveSize="mobile">
        Hello
      </Text>
      <Text textSize="4" textResponsiveSize="tablet">
        Hello
      </Text>
      <Text textSize="3" textResponsiveSize="touch">
        Hello
      </Text>
      <Text textSize="1" textResponsiveSize="desktop">
        Hello
      </Text>
      <Text textSize="2" textResponsiveSize="widescreen">
        Hello
      </Text>
      <Text textSize="1" textResponsiveSize="fullhd">
        Hello
      </Text>
    </div>
  ))
  .add('text with responsive alignment', () => (
    <div>
      <Text textAlignment="centered" textResponsiveAlignment="desktop">
        Hello
      </Text>
      <Text textAlignment="left" textResponsiveAlignment="mobile">
        Hello
      </Text>
      <Text textAlignment="right" textResponsiveAlignment="tablet">
        Hello
      </Text>
      <Text textAlignment="centered" textResponsiveAlignment="fullhd">
        Hello
      </Text>
      <Text textAlignment="right" textResponsiveAlignment="touch">
        Hello
      </Text>
      <Text textAlignment="centered" textResponsiveAlignment="widescreen">
        Hello
      </Text>
    </div>
  ))
