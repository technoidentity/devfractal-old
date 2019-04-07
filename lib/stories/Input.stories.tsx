import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Input } from '../src/lib'

storiesOf('Input', module)
  .add('with variant', () => (
    <div>
      <Input
        variant="primary"
        onChange={action('onChange')}
        placeholder="primary"
      />
      <Input variant="info" placeholder="info" />
      <Input variant="success" placeholder="success" />
      <Input variant="white" placeholder="white" />
      <Input variant="warning" placeholder="warning" />
      <Input variant="danger" placeholder="danger" />
      <Input variant="black" placeholder="black" />
      <Input variant="light" placeholder="light" />
      <Input variant="dark" placeholder="dark" />
    </div>
  ))
  .add('with type', () => (
    <div>
      <Input type="text" placeholder="type is text" variant="info" />
      <Input type="password" placeholder="type is password" variant="dark" />
      <Input type="email" placeholder="type is email" variant="danger" />
      <Input type="tel" placeholder="type is phone number" variant="primary" />
    </div>
  ))
  .add('with size', () => (
    <div>
      <Input ctrlSize="small" placeholder="small Textarea" variant="primary" />
      <Input ctrlSize="medium" placeholder="medium input" variant="warning" />
      <Input ctrlSize="large" placeholder="large input" variant="info" />
      <Input fullWidth placeholder="fullwidth input" variant="danger" />
      <Input placeholder="normal input" variant="danger" />
    </div>
  ))
  .add('with state', () => (
    <div>
      <Input state="focused" placeholder="focused input" />
      <Input state="hovered" placeholder="hovered input" />
      <Input state="static" placeholder="static input" />
      <Input state="active" placeholder="active input" />
    </div>
  ))
  .add('loading input', () => (
    <Input variant="primary" loading placeholder="loading input" />
  ))
  .add('inline input', () => (
    <Input variant="danger" inline loading placeholder="inline input" />
  ))
  .add('fullwidth input', () => (
    <Input variant="success" fullWidth placeholder="fullwidth input" />
  ))
  .add('disabled input', () => <Input disabled placeholder="disabled input" />)
