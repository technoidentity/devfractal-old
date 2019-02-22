import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Radio, RadioGroup } from '../docs/examples/devfractal'

storiesOf('Radio', module)
  .add('with action', () => (
    <RadioGroup name="gender2" onChange={action('onChange')}>
      <Radio>Gender</Radio>
    </RadioGroup>
  ))
  .add('with checked', () => (
    <RadioGroup name="gender2">
      <Radio checked>Male</Radio>)
    </RadioGroup>
  ))
  .add('with disabled', () => (
    <RadioGroup name="gender3">
      <Radio disabled>Female</Radio>)
    </RadioGroup>
  ))
