import { storiesOf } from '@storybook/react'
import React from 'react'
import { Text } from '../devfractal/modifiers/Text'

storiesOf('Text', module)
  .add('with size', () => (
    <div>
      <Text textSize="1">size 1</Text>
      <Text textSize="2">size 2</Text>
      <Text textSize="3">size 3</Text>
      <Text textSize="4">size 4</Text>
      <Text textSize="5">size 5</Text>
      <Text textSize="6">size 6</Text>
      <Text textSize="7">size 7</Text>
    </div>
  ))
  .add('with alignment', () => (
    <div>
      <Text textAlignment="centered">text centered</Text>
      <Text textAlignment="left"> text left</Text>
      <Text textAlignment="right">text right</Text>
      <Text textAlignment="justified">text justified</Text>
    </div>
  ))
  .add('with color', () => (
    <div>
      <Text textColor="black">black</Text>
      <Text textColor="grey">grey</Text>
      <Text textColor="primary">primary</Text>
      <Text textColor="success">success</Text>
      <Text textColor="warning">warning</Text>
      <Text textColor="link">link</Text>
      <Text textColor="info">info</Text>
      <Text textColor="white">white</Text>
      <Text textColor="black-bis">black-bis</Text>
      <Text textColor="black-ter">black-ter</Text>
      <Text textColor="grey-darker">grey-darker</Text>
      <Text textColor="grey-dark">grey-dark</Text>
      <Text textColor="grey-light">grey-light</Text>
      <Text textColor="white-ter">white-ter</Text>
    </div>
  ))
  .add('with background color', () => (
    <div>
      <Text textBackgroundColor="black">black</Text>
      <Text textBackgroundColor="grey">grey</Text>
      <Text textBackgroundColor="primary">primary</Text>
      <Text textBackgroundColor="success">success</Text>
      <Text textBackgroundColor="warning">warning</Text>
      <Text textBackgroundColor="link">link</Text>
      <Text textBackgroundColor="info">info</Text>
      <Text textBackgroundColor="white">white</Text>
      <Text textBackgroundColor="black-bis">black-bis</Text>
      <Text textBackgroundColor="black-ter">black-ter</Text>
      <Text textBackgroundColor="grey-darker">grey-darker</Text>
      <Text textBackgroundColor="grey-dark">grey-dark</Text>
      <Text textBackgroundColor="grey-light">grey-light</Text>
      <Text textBackgroundColor="white-ter">white-ter</Text>
    </div>
  ))
  .add('text weight', () => (
    <div>
      <Text textWeight="normal">normal</Text>
      <Text textWeight="light">light</Text>
      <Text textWeight="semiBold">semiBold</Text>
      <Text textWeight="bold">Bold</Text>
    </div>
  ))
  .add('text transformation', () => (
    <div>
      <Text textTransformation="lowercase">all characters to lowercase</Text>
      <Text textTransformation="uppercase">all characters to uppercase</Text>
      <Text textTransformation="capitalized">
        first character of each word to uppercase
      </Text>
      <Text textTransformation="italic">all characters to italic</Text>
    </div>
  ))
  .add('text with responsive size', () => (
    <div>
      <Text textSize="6" textResponsiveSize="mobile">
        mobile responsive size
      </Text>
      <Text textSize="4" textResponsiveSize="tablet">
        tablet responsive size
      </Text>
      <Text textSize="3" textResponsiveSize="touch">
        touch responsive size
      </Text>
      <Text textSize="1" textResponsiveSize="desktop">
        desktop responsive size
      </Text>
      <Text textSize="2" textResponsiveSize="widescreen">
        widescreen responsive size
      </Text>
      <Text textSize="1" textResponsiveSize="fullhd">
        fullhd responsive size
      </Text>
    </div>
  ))
  .add('text with responsive alignment', () => (
    <div>
      <Text textAlignment="centered" textResponsiveAlignment="desktop">
        desktop
      </Text>
      <Text textAlignment="left" textResponsiveAlignment="mobile">
        mobile
      </Text>
      <Text textAlignment="right" textResponsiveAlignment="tablet">
        tablet
      </Text>
      <Text textAlignment="centered" textResponsiveAlignment="fullhd">
        fullhd
      </Text>
      <Text textAlignment="right" textResponsiveAlignment="touch">
        touch
      </Text>
      <Text textAlignment="centered" textResponsiveAlignment="widescreen">
        widescreen
      </Text>
    </div>
  ))
  .add('unselected text', () => (
    <div>
      <Text unSelectable>Unselectable text</Text>
      <Text>Selectable text</Text>
    </div>
  ))
