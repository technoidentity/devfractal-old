import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Button } from '../bulma/form/Button'

storiesOf('Button ', module)
  .add('with variant', () => (
    <div>
      <Button variant="primary" onClick={action('onClick')}>
        OK
      </Button>
      <Button variant="link">OK</Button>
      <Button variant="white">OK</Button>
      <Button variant="dark">OK</Button>
      <Button variant="success">OK</Button>
      <Button variant="warning">OK</Button>
      <Button variant="danger">OK</Button>
      <Button variant="link">OK</Button>
      <Button variant="light">OK</Button>
      <Button variant="text">OK</Button>
      <Button variant="black">OK</Button>
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
  .add('with rounded', () => <Button rounded={Boolean(true)}>OK</Button>)
  .add('with inverted', () => <Button inverted={Boolean(true)}>OK</Button>)
  .add('with outlined', () => <Button outlined={Boolean(true)}>OK</Button>)
