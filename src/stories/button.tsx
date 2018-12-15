import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Button } from '../bulma/form/Button'

storiesOf('Button ', module)
  .add('with color', () => (
    <div>
      <Button color="primary" onClick={action('onClick')}>
        OK
      </Button>
      <Button color="link">OK</Button>
      <Button color="white">OK</Button>
      <Button color="dark">OK</Button>
      <Button color="success">OK</Button>
      <Button color="warning">OK</Button>
      <Button color="danger">OK</Button>
      <Button color="link">OK</Button>
      <Button color="light">OK</Button>
      <Button color="text">OK</Button>
      <Button color="black">OK</Button>
    </div>
  ))
  .add('with size', () => (
    <div>
      <Button size="large">large</Button>
      <Button size="small">small</Button>
      <Button size="normal">normal</Button>
      <Button size="medium">medium</Button>
    </div>
  ))
  .add('with style', () => (
    <div>
      <Button buttonStyle="rounded">rounded</Button>
      <Button buttonStyle="inverted">inverted</Button>
      <Button color="primary" buttonStyle="outlined">
        outlined
      </Button>
    </div>
  ))
  .add('with state', () => (
    <div>
      <Button state="active">active</Button>
      <Button state="focused">focus</Button>
      <Button state="hovered">hover</Button>
      <Button state="loading">loading</Button>
      <Button state="static">active</Button>
    </div>
  ))
  .add('with fullWidth', () => <Button fullWidth={Boolean(true)}>OK</Button>)
